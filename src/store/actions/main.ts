import { MAIN } from '../constants';
import { RightBarShowType } from '../reducers/main';

const get_article_type = () => ({ type: MAIN.GET_ARTICLE_TYPE });
const set_scroll_top = (scrollTop: number) => ({ type: MAIN.SET_SCROLL_TOP, payload: { scrollTop } });
const set_right_bar = (showRightBar: RightBarShowType) => ({ type: MAIN.SET_RIGHT_BAR, payload: { showRightBar } });

export { get_article_type, set_scroll_top, set_right_bar };
