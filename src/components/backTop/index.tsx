import React, { memo, useState } from 'react';
import { BackTopStyled } from './style';

const BackTop: React.FC = memo(() => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const clickHide = () => {
    setIsShow(false);
  };
  return (
    <BackTopStyled isShow={isShow}>
      <div className='spider-container show'>
        <div className='spider'>
          <div className='legs-left'>
            <div className='leg leg-1'></div>
            <div className='leg leg-2'></div>
            <div className='leg leg-3'></div>
          </div>
          <div className='body' onClick={clickHide}>
            <div className='eyes'></div>
            <div className='mouth'></div>
          </div>
          <div className='legs-right'>
            <div className='leg leg-1'></div>
            <div className='leg leg-2'></div>
            <div className='leg leg-3'></div>
          </div>
        </div>
      </div>
    </BackTopStyled>
  );
});

export default BackTop;
