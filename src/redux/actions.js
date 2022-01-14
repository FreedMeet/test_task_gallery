import {
  APP_FIRST_LOAD,
  APP_SET_CURRENT_PAGE,
  POST_FETCH_DATA_FAILURE,
  POST_FETCH_DATA_START,
  POST_FETCH_DATA_SUCCESS,
} from "./types";
import { fetchNewData } from "../api/api";

export const fetchData = (newPage) => {
  return async (dispatch) => {
    dispatch(startFetchingData());

    try {
      const response = await fetchNewData(newPage);
      const data = await response.json();

      let posts = data.map((date) => ({
        username: date.user.username,
        miniImage: date.urls.small,
        fullImage: date.urls.full,
        width: date.width,
        height: date.height,
      }));

      dispatch(setCurrentPage(newPage));
      dispatch(dataFetchSuccesfull(posts));
    } catch (error) {
      console.log(error);
      dispatch(dataFetchFailed(error));
    }
  };
};
export const firstLoad = () => {
  return { type: APP_FIRST_LOAD };
};

export const startFetchingData = () => {
  return { type: POST_FETCH_DATA_START };
};
export const dataFetchSuccesfull = (posts) => {
  return {
    type: POST_FETCH_DATA_SUCCESS,
    posts,
  };
};
export const dataFetchFailed = (error) => {
  return { type: POST_FETCH_DATA_FAILURE, error };
};

export const setCurrentPage = (page) => {
  return {
    type: APP_SET_CURRENT_PAGE,
    page,
  };
};
