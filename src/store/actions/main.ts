import { MAIN } from '../constants';

const get_article_type = () => ({ type: MAIN.GET_ARTICLE_TYPE });
const set_scroll_top = (scrollTop: number) => ({ type: MAIN.SET_SCROLL_TOP, payload: { scrollTop } });

export { get_article_type, set_scroll_top };
