import React, { useState, useRef, MutableRefObject } from 'react';
import { AboutStyled } from './style';
import marked from 'marked';
import hljs from 'highlight.js';

import { list } from './demo';

const renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true, //启动类似Github样式的Markdown,填写true或者false
  pedantic: false, //只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
  sanitize: false, //原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
  tables: true, //支持Github形式的表格，必须打开gfm选项
  breaks: true, //支持Github换行符，必须打开gfm选项，填写true或者false
  smartLists: true, //优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  smartypants: true,
  highlight: function (code: any) {
    return hljs.highlightAuto(code).value;
  },
});

const About = () => {
  const [showWhat, setShowWhat] = useState<string>('blog');
  const curInput: MutableRefObject<any> = useRef(null);

  let html = marked(`${showWhat === 'blog' ? list.blog.content : list.blogger.content}`);

  // 顶部切换
  const curChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setShowWhat('blogger') : setShowWhat('blog');
  };
  // 点击本站
  const clickBlog = () => {
    curInput.current.checked = false;
    setShowWhat('blog');
  };
  // 点击博主
  const clickBlogger = () => {
    curInput.current.checked = true;
    setShowWhat('blogger');
  };

  return (
    <AboutStyled showWhat={showWhat}>
      <div className='toggleBox'>
        <div className='blog-words' onClick={clickBlog}>
          本站
        </div>
        <label className='toggle blog-blogger'>
          <input type='checkbox' className='toggle-checkbox' ref={curInput} onChange={curChange} />
          <div className='toggle-btn'></div>
        </label>
        <div className='blogger-words' onClick={clickBlogger}>
          博主
        </div>
      </div>
      <div className='detailed-content markdown-body' dangerouslySetInnerHTML={{ __html: html }}></div>
    </AboutStyled>
  );
};

export default About;
