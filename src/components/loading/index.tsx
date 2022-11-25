import React from 'react';
import { LoadingStyled } from './style';

const Loading = () => {
  return (
    <LoadingStyled>
      <div className='box'>
        <div className='cat'>
          <div className='cat__body'></div>
          <div className='cat__body'></div>
          <div className='cat__tail'></div>
          <div className='cat__head'></div>
        </div>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
