import { GET_CAT_REQUEST, GET_CAT_SUCCESS, GET_CAT_ERROR } from "./constants";

export const CAT_URL = "https://aws.random.cat/meow";

export const getCatRequestAction = () => ({
  type: GET_CAT_REQUEST,
});

export const getCatSuccessAction = (catUrl) => ({
  type: GET_CAT_SUCCESS,
  payload: catUrl,
});

export const getCatErrorAction = () => ({
  type: GET_CAT_ERROR,
});

export const getCatActionWithThunk = () => async (dispatch, getState) => {
  dispatch(getCatRequestAction());

  try {
    const response = await fetch(CAT_URL);

    if (!response.ok) {
      throw new Error(`error`);
    }

    const result = await response.json();

    dispatch(getCatSuccessAction(result.file));
  } catch (error) {
    dispatch(getCatErrorAction());
  }
};