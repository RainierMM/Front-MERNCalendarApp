import { types } from "../types/types";

export const uiOpenModal = () => {
  return {
    type: types.iuOpenModal,
  };
};

export const uiCloseModal = () => {
  return {
    type: types.iuCloseModal,
  };
};
