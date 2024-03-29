export enum HEADER {
  // 控制顶部header的显示和隐藏
  SET_HEADER_SHOW = 'SET_HEADER_SHOW',
  SET_HEADER_HIDE = 'SET_HEADER_HIDE',
}

export enum MAIN {
  // 保存用户信息
  SET_USER_INFO = 'SET_USER_INFO',

  // 设置和获取文章类型
  GET_ARTICLE_TYPE = 'GET_ARTICLE_TYPE',
  SET_ARTICLE_TYPE = 'SET_ARTICLE_TYPE',

  //设置滚动的距离
  SET_SCROLL_TOP = 'SET_SCROLL_TOP',

  //设置右侧显示组件
  SET_RIGHT_BAR = 'SET_RIGHT_BAR',

  // 显示或隐藏tags组件
  SET_TGAS_SHOW = 'SET_TGAS_SHOW',
  SET_TGAS_HIDE = 'SET_TGAS_HIDE',

  // 显示或隐藏登录面板
  SET_LOGIN_PANEL_SHOW = 'set_login_panel_show',
  SET_LOGIN_PANEL_HIDE = 'set_login_panel_hide',
}
