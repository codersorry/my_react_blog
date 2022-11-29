import React from 'react';
import { FooterStyled } from './style';
import { Space } from 'antd';
import cat from '@/assets/images/cat.gif';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className='footer-content'>
        <div className='footer-left'>Darry</div>
        <div className='footer-middle'>
          <div className='footer-middle-left'>
            <div>© 2022 Darry</div>
            <div>By antd & react & node</div>
          </div>
          <div className='footer-middle-right'>
            <img src={cat} alt='' />
          </div>
        </div>
        <div className='footer-right'>
          <Space>
            <img alt='logo' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
              alt=''
              height='20'
            ></img>
          </Space>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
