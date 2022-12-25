/* eslint-disable import/prefer-default-export */
/* eslint-disable quotes */
import axios from "../services/axios";

export const getStatistics = (queryString) => axios.get(`/statistics?${queryString}`);
