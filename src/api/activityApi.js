/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line quotes
import axios from "../services/axios";

export const getAllLazyLoad = (userId, page) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios.get(`/activity/all/${userId}?page=${page}`);
export const deleteActivity = (activityId) => axios.delete(`/activity/${activityId}`);
export const getActivity = (activityId) => axios.get(`/activity/${activityId}`);
export const createActivity = (data) => axios.post("/activity", data);
export const updateActivityById = (activityId, formData) =>
  axios.patch(`/activity/${activityId}`, formData);
