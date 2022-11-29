import React from 'react';
import { AboutStyled } from './style';
import { Tabs } from 'antd';

const About = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <AboutStyled>
      <Tabs
        onChange={onChange}
        type='card'
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
    </AboutStyled>
  );
};

export default About;
