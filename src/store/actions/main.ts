import { MAIN } from '../constants';
import { RightBarShowType, UserInfoType } from '../reducers/main';

// 保存用户信息
const set_user_info = (userInfo: UserInfoType) => ({ type: MAIN.SET_USER_INFO, payload: { userInfo } });
// 获取文章类型
const get_article_type = () => ({ type: MAIN.GET_ARTICLE_TYPE });
// 设置滚动的距离
const set_scroll_top = (scrollTop: number) => ({ type: MAIN.SET_SCROLL_TOP, payload: { scrollTop } });
// 设置右侧显示组件
const set_right_bar = (showRightBar: RightBarShowType) => ({ type: MAIN.SET_RIGHT_BAR, payload: { showRightBar } });
// 显示或隐藏tags组件
const set_tags_show = () => ({ type: MAIN.SET_TGAS_SHOW });
const set_tags_hide = () => ({ type: MAIN.SET_TGAS_HIDE });
// 显示或隐藏登录面板
const set_login_panel_show = () => ({ type: MAIN.SET_LOGIN_PANEL_SHOW });
const set_login_panel_hide = () => ({ type: MAIN.SET_LOGIN_PANEL_HIDE });

export {
  set_user_info,
  get_article_type,
  set_scroll_top,
  set_right_bar,
  set_tags_show,
  set_tags_hide,
  set_login_panel_show,
  set_login_panel_hide,
};
