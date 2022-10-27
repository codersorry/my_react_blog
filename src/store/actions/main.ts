import { MAIN } from '../constants';
import { RightBarShowType } from '../reducers/main';

// 获取文章类型
const get_article_type = () => ({ type: MAIN.GET_ARTICLE_TYPE });
// 设置滚动的距离
const set_scroll_top = (scrollTop: number) => ({ type: MAIN.SET_SCROLL_TOP, payload: { scrollTop } });
// 设置右侧显示组件
const set_right_bar = (showRightBar: RightBarShowType) => ({ type: MAIN.SET_RIGHT_BAR, payload: { showRightBar } });
// 显示或隐藏tags组件
const set_tags_show = () => ({ type: MAIN.SET_TGAS_SHOW });
const set_tags_hide = () => ({ type: MAIN.SET_TGAS_HIDE });

export { get_article_type, set_scroll_top, set_right_bar, set_tags_show, set_tags_hide };
