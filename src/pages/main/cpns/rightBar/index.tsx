import React, { useState, useEffect } from 'react';
import { RightBarStyled } from './styled';
import Author from '@/components/author';
import Tags from '@/components/tags';
import { RightBarShowType } from '@/store/reducers/main';

type RightBarProps = {
  showRightBar: RightBarShowType;
};

const RightBar: React.FC<RightBarProps> = (props) => {
  const [lazyHideTags, setLazyHideTags] = useState<boolean>(false);
  const { showRightBar } = props;
  useEffect(() => {
    // 通过延迟隐藏的方式，显示消失动画
    if (showRightBar.showTags) {
      setLazyHideTags(showRightBar.showTags);
    } else {
      setTimeout(() => {
        setLazyHideTags(showRightBar.showTags);
      }, 600);
    }
  }, [showRightBar]);
  return (
    <RightBarStyled showRightBar={showRightBar}>
      {showRightBar.showAuthor ? (
        <div className='right-author'>
          <Author />
        </div>
      ) : (
        ''
      )}
      {lazyHideTags ? (
        <div className='right-tags'>
          <Tags />
        </div>
      ) : (
        ''
      )}
    </RightBarStyled>
  );
};

export default RightBar;
