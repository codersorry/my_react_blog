/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Row, Col, Menu, Tooltip, Dropdown, Space, Avatar, message } from 'antd';
import type { MenuProps } from 'antd';
import { HeaderStyled } from './style';
import {
  HomeOutlined,
  SmileOutlined,
  FormOutlined,
  ShareAltOutlined,
  MessageOutlined,
  RocketOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { get_article_type, set_login_panel_show, set_user_info } from '@/store/actions/main';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { ArticleTypeType } from '@/services/components/header';
import { UserInfoType } from '@/store/reducers/main';

type MenuItem = Required<MenuProps>['items'][number];

type CurStateType = {
  articleType: ArticleTypeType[];
  isShowHeader: boolean;
  userInfo: UserInfoType;
};

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [articleTypeList, setArticleTypeList] = useState([]);
  const { articleType, isShowHeader, userInfo } = useSelector<RootState, CurStateType>((state) => ({
    articleType: state.main.articleType,
    isShowHeader: state.header.isShowHeader,
    userInfo: state.main.userInfo,
  }));
  useEffect(() => {
    dispatch(get_article_type());
  }, []);

  useEffect(() => {
    mapArr(articleType);
  }, [articleType]);

  const mapArr = (data: ArticleTypeType[]) => {
    const arr: any = [];
    data.forEach((item: ArticleTypeType) => {
      arr.push(getItem(item.type_name, item.type_id));
    });
    setArticleTypeList(arr);
  };

  const headerItems: MenuItem[] = [
    getItem('首页', 'home', <HomeOutlined />),
    getItem('文章', 'article', <FormOutlined />, articleTypeList),
    getItem('记录', 'record', <RocketOutlined />),
    getItem('说说', 'say', <ShareAltOutlined />),
    getItem('图片', 'picture', <SmileOutlined />),
    // getItem('留言', '6', <MessageOutlined />),
    getItem('聊天室', '7', <MessageOutlined />),
    getItem('友链', '5', <SmileOutlined />),
    getItem('关于', '8', <UserOutlined />),
  ];

  const navigate = useNavigate();
  //点击菜单跳转路由
  const menuClick = (e: any) => {
    if (e.key === 'home') {
      navigate('/');
    } else if (e.keyPath[1] === 'article') {
      navigate(`/article/${e.key}`);
    } else if (e.key === 'record') {
      navigate('/record');
    } else if (e.key === 'say') {
      navigate('/say');
    } else if (e.key === 'picture') {
      navigate('/picture');
    }
  };

  // 下拉登录菜单点击登录
  const login = () => {
    dispatch(set_login_panel_show());
  };

  // 下拉登录菜单点击登出
  const logout = () => {
    dispatch(
      set_user_info({
        user_id: '',
        user_name: '',
        email: '',
        avatar: '',
      }),
    );
    localStorage.removeItem('darryBlogUserInfo');
    message.destroy();
    message.success('登出成功哦 ~');
  };
  const items = userInfo.user_id
    ? [
        {
          key: 'logout',
          label: '登出',
          icon: <LogoutOutlined />,
          onClick: logout,
        },
      ]
    : [
        {
          key: 'login',
          label: '登录',
          icon: <LoginOutlined />,
          onClick: login,
        },
      ];

  return (
    <HeaderStyled isShowHeader={isShowHeader}>
      <Row justify='center'>
        <Col xs={16} sm={16} md={0} lg={0} xl={0}>
          <span
            onClick={() => {}}
            className='header-logo'
            style={{
              textAlign: 'center',
              display: 'block',
              fontSize: '1.1rem',
              color: '#fff',
              fontWeight: 700,
            }}
          >
            Darry's Blog
          </span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={10} xl={9}>
          <Tooltip placement='bottom' title={<span>背景音乐控制(PS:字体缩放跟随音乐)</span>}>
            <span className='header-logo' id='yj'>
              Darry
            </span>
          </Tooltip>
          <span className='header-txt'>每天GET一个新知识</span>
        </Col>
        <Col className='memu-div' xs={4} sm={4} md={8} lg={8} xl={9}>
          <Menu
            mode='horizontal'
            onClick={menuClick}
            items={headerItems}
            style={{ backgroundColor: 'rgba(40,54,70,0)', color: 'pink' }}
          />
        </Col>

        <span className='avatarSpan'>
          <Dropdown menu={{ items }}>
            <Space>
              <span className='userName'>
                {userInfo.user_name ? userInfo.user_name : '可登录哦~'}&nbsp;
                <CaretDownOutlined />
              </span>
              <Avatar src={userInfo.avatar} size={30} icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </span>
      </Row>
    </HeaderStyled>
  );
};

export default Header;
