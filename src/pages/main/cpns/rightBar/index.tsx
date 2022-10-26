import React from 'react';
import { RightBarStyled } from './styled';
import Author from '@/components/author';
import Tags from '@/components/tags';
import { RightBarShowType } from '@/store/reducers/main';

type RightBarProps = {
  showRightBar: RightBarShowType;
};

const RightBar: React.FC<RightBarProps> = (props) => {
  return (
    <RightBarStyled showRightBar={props.showRightBar}>
      {props.showRightBar.showAuthor ? (
        <div className='right-author'>
          <Author />
        </div>
      ) : (
        ''
      )}
      {props.showRightBar.showTags ? (
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
