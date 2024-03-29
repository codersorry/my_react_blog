import React, { useState, useEffect } from 'react';
import { Timeline, Spin, message } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { getArticleList } from '@/services/pages/home';
import { ArticleListDataType } from '@/services/pages/home';

const Record = () => {
  const [timeLineList, setTimeLineList] = useState<ArticleListDataType[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getArticleList().then((res) => {
      setTimeLineList(res.data.articles);
    });
  }, []);
  return (
    <div>
      <Spin tip='加载中...' spinning={false}>
        <Timeline mode='alternate' style={{ marginTop: '1rem' }}>
          <Timeline.Item style={{ fontWeight: 'bold' }}>
            当前共计 <span style={{ color: 'red', fontWeight: 'bold' }}>{520}</span> 篇日志,继续加油哦!
          </Timeline.Item>

          {timeLineList.map((i) => {
            return <Timeline.Item key={i.article_id}>{i.article_title}</Timeline.Item>;
          })}

          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item color='green'>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color='red'>Network problems being solved 2015-09-01</Timeline.Item>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            Technical testing 2015-09-01
          </Timeline.Item>

          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              Vue音乐播放器开发<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2020-3-1
              </span>
            </span>
          </Timeline.Item>
          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              React博客开发<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2020-2-15
              </span>
            </span>
          </Timeline.Item>
          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              Flutter应用初尝试<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2020-1-1
              </span>
            </span>
          </Timeline.Item>
          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              RN视频应用开发<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2019-10-1
              </span>
            </span>
          </Timeline.Item>
          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              原生小网站开发<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2019-5-16
              </span>
            </span>
          </Timeline.Item>
          <Timeline.Item color='green'>
            <span
              onClick={() => {
                message.destroy();
                message.warning('历程记载,见证美好生活');
              }}
              className='TimelineSpan'
            >
              接触Web前端<br></br>
              <span
                style={{
                  color: 'rgb(0, 216, 255)',
                  fontWeight: '400',
                  fontSize: '.75rem',
                }}
              >
                2018-7-1
              </span>
            </span>
          </Timeline.Item>
        </Timeline>
      </Spin>
    </div>
  );
};

export default Record;
