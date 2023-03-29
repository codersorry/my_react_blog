import React, { memo, useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumb, Pagination, Spin, Dropdown, Space } from 'antd';
import type { PaginationProps, MenuProps } from 'antd';
import { LoadingOutlined, CaretDownOutlined } from '@ant-design/icons';
import 'highlight.js/styles/monokai-sublime.css';
import { ArticleStyled } from './style';
import { getArticleListByTypeId } from '@/services/pages/article';
import { ArticleListDataType } from '@/services/pages/home';
import ArticleItem from './cpns/articleItem';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '@/store';
import { MainState } from '@/store/reducers/main';
import Detail from '@/pages/detail';
import InterSectionLazyLoad from '@/utils/tools/InterSectionLazyLoad';
import { set_scroll_top } from '@/store/actions/main';

interface CurDropMenuItemType {
  key: number;
  label: string;
}

const Article: React.FC = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { articleType } = useSelector<RootState, MainState>((state) => state.main, shallowEqual);
  const { id } = useParams();
  const [articleTypeList, setArticleTypeList] = useState<CurDropMenuItemType[]>([]);
  const [curArticleType, setCurArticleType] = useState<string>(); // 面包屑当前的文章类型
  const [list, setList] = useState<ArticleListDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false); // 控制详情页的显示隐藏
  const [articleId, setArticleId] = useState(null); // 文章id
  const [scrollTop, setScrollTop] = useState<number>(0); // 保存文章页滚动的高度
  const [isShowArray, setIsShowArray] = useState<boolean[]>([]); //保存懒加载是否显示数组

  //isShowArray变化循环设置默认值false
  const setIsShowArrayFalse = useCallback((listLength: number) => {
    let newArr = [];
    for (let i = 0; i < listLength; i++) {
      newArr.push(false);
    }
    setIsShowArray(newArr);
    console.log(newArr);
  }, []);

  useEffect(() => {
    // 详情页返回后，同时修改redux中的scrollTop，解决返回后header显示隐藏问题
    dispatch(set_scroll_top(scrollTop));
    !isShowDetail && window.scrollTo(0, scrollTop);
  }, [dispatch, isShowDetail, scrollTop]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(set_scroll_top(0));
      window.scrollTo(0, 0);
    }, 10);

    // list改变时，使用InterSectionLazyLoad懒加载
    InterSectionLazyLoad('articeItem', (entry: any) => {
      isShowArray[entry.target.className.split('Index-')[1]] = true;
      setIsShowArray([...isShowArray]);
      console.log(isShowArray);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  //监听url上id参数的变化，重新请求数据
  useEffect(() => {
    setIsShowDetail(false); // id变化，需要显示文章页
    setPage(1);
    setPageSize(10);
    getArticleListByTypeId(id, { page: 1, pageSize: 10 })
      .then((res) => {
        setList(res.data.articles);
        setTotal(res.data.total);
        setIsShowArrayFalse(res.data.articles.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setIsShowArrayFalse]);

  //面包屑下拉文章类型列表
  useEffect(() => {
    let curArr: CurDropMenuItemType[] = [];
    articleType.forEach((i) => {
      curArr.push({ key: i.type_id, label: i.type_name });
    });
    setArticleTypeList(curArr);
  }, [articleType]);

  useEffect(() => {
    // 更新面包屑当前页的文章类型
    id && articleTypeList.length > 0 && setCurArticleType(idMapArticleType(id, articleTypeList));
  }, [id, articleTypeList]);

  // 下拉文章类型点击跳转
  const dropMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(`/article/${key}`);
  };

  // 给面包屑下拉菜单添加点击事件
  const items = articleTypeList.map((item) => {
    return { ...item, onClick: dropMenuClick };
  });

  // 根据id匹配当前页文章类型名称
  const idMapArticleType = (id: any, list: CurDropMenuItemType[]) => {
    let typeName = '';
    list.some((i) => {
      if (id * 1 === i.key * 1) {
        typeName = i.label;
        return true;
      } else {
        return false;
      }
    });
    return typeName;
  };

  //条数变化函数
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
    getArticleListByTypeId(id, { page: 1, pageSize })
      .then((res) => {
        setList(res.data.articles);
        setTotal(res.data.total);
        //重新请求后，自动返回顶部，手动设置redux中scrollTop的值为0
        dispatch(set_scroll_top(0));
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //修改分页栏展现方式
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    return originalElement;
  };

  //page 和 pageSize 变化函数
  const onChange: PaginationProps['onChange'] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
    getArticleListByTypeId(id, { page: page, pageSize })
      .then((res) => {
        setList(res.data.articles);
        setTotal(res.data.total);
        setIsShowArrayFalse(res.data.articles.length);
        //重新请求后，自动返回顶部，手动设置redux中scrollTop的值为0
        dispatch(set_scroll_top(0));
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ArticleStyled isShowDetail={isShowDetail}>
        <div className='breadcrumb'>
          <Breadcrumb>
            <Breadcrumb.Item>文章</Breadcrumb.Item>
            <Breadcrumb.Item className='breadcrumbItem'>
              <Dropdown menu={{ items }}>
                <Space>
                  {curArticleType}
                  <CaretDownOutlined />
                </Space>
              </Dropdown>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {list.map((item, index) => {
          return (
            <div key={item.article_id}>
              <ArticleItem
                isShow={isShowArray[index]}
                index={index}
                curItem={item}
                setIsShowDetail={setIsShowDetail}
                setArticleId={setArticleId}
                setScrollTop={setScrollTop}
              />
            </div>
          );
        })}
        <div style={{ display: list.length === 0 ? 'block' : 'none' }}>
          <div className='loadingDiv'>
            <Spin
              spinning={list.length === 0 ? true : false}
              indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
              tip='Loading...'
              size='large'
            />
          </div>
        </div>

        <Pagination
          className='paginationStyle'
          total={total}
          current={page}
          pageSize={pageSize}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
          onChange={onChange}
          defaultCurrent={1}
          pageSizeOptions={[10, 15, 20]}
        />
      </ArticleStyled>
      <Detail isShowDetail={isShowDetail} articleId={articleId} setIsShowDetail={setIsShowDetail} />
    </>
  );
});

export default Article;
