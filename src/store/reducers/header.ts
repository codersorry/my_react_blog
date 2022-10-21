import { HEADER } from '../constants';

export interface HeaderState {
  isShowHeader: boolean;
}

const initHeaderState: HeaderState = {
  isShowHeader: true,
};

const header = (state = initHeaderState, action: { type: any; data: any }) => {
  switch (action.type) {
    case HEADER.SET_HEADER_SHOW:
      return { ...state, isShowHeader: true };
    case HEADER.SET_HEADER_HIDE:
      return { ...state, isShowHeader: false };
    default:
      return state;
  }
};

export default header;
