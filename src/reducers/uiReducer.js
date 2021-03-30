import { types } from "../types/types";

const initialState = {
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.iuOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.iuCloseModal:
      return {
        ...state,
        modalOpen: false,
      };

    default:
      return state;
  }
};
