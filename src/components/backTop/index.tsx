import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackTopStyled } from './style';
import { BackTop } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { set_scroll_top } from '@/store/actions/main';
import { set_header_show, set_header_hide } from '@/store/actions/header';
import { RootState } from '@/store';

interface CurStateType {
  scrollTop: number;
  isShowHeader: boolean;
}

const MyBackTop: React.FC = memo(() => {
  debugger;
  const dispatch = useDispatch();
  const { scrollTop, isShowHeader } = useSelector<RootState, CurStateType>((state) => ({
    scrollTop: state.main.scrollTop,
    isShowHeader: state.header.isShowHeader,
  }));
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    debugger;
    window.addEventListener('scroll', handleScroll);
    function handleScroll() {
      const curScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      dispatch(set_scroll_top(curScrollTop));
    }
    return () => {
      //组件销毁时候，取消监听
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (scrollTop >= 200 && isShowHeader) {
      setIsShow(true);
      dispatch(set_header_hide());
    }
    if (scrollTop < 200 && !isShowHeader) {
      setIsShow(false);
      dispatch(set_header_show());
    }
  }, [dispatch, isShowHeader, scrollTop]);

  const backTop = () => {
    setIsShow(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };
  return (
    <BackTopStyled isShow={isShow}>
      <img
        src='https://blog-1303885568.cos.ap-chengdu.myqcloud.com/useImg/backTop.png'
        alt='返回顶部'
        title='啊啊啊 ~~~'
        onClick={() => backTop()}
      />
      {/* <div className='mobile' onClick={() => backTop()}>
        <RocketOutlined
          style={{
            color: 'pink',
            position: 'absolute',
            fontSize: '25px',
            borderRadius: '50%',
            padding: '6px',
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        ></RocketOutlined>
      </div> */}
      <BackTop className='mobile'>
        <div className='ant-back-top-inner'>
          <RocketOutlined />
        </div>
      </BackTop>
    </BackTopStyled>
  );
});

export default MyBackTop;
