import React from 'react';
import { FriendStyled } from './style';
import FriendItem from './cpns/friendItem';

const friends = [
  { id: '1', name: 'Darry' },
  { id: '2', name: 'Jarry' },
  { id: '3', name: 'Sorry' },
  { id: '4', name: 'Kitty' },
  { id: '5', name: 'Jay' },
  { id: '6', name: 'Tom' },
  { id: '7', name: 'Ray' },
  { id: '8', name: 'Angel' },
  { id: '9', name: 'Tony' },
  { id: '10', name: 'Sisiy' },
  { id: '11', name: 'Darry' },
  { id: '12', name: 'Jarry' },
  { id: '13', name: 'Sorry' },
  { id: '14', name: 'Kitty' },
  { id: '15', name: 'Jay' },
];

const Friend = () => {
  return (
    <FriendStyled>
      <div className='friend-container'>
        {friends.map((item) => (
          <FriendItem key={item.id} info={item} />
        ))}
      </div>
    </FriendStyled>
  );
};

export default Friend;
