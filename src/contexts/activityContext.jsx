/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import {
  createContext, useContext, useState,
} from 'react';
import * as ActAPI from '../api/activityApi';

const ActivityContext = createContext();

function ActivityContextProvider({ children }) {
  const [allActivity, setAllActivity] = useState([]);
  const [activity, setActivity] = useState(null);

  const navigate = useNavigate();

  const getAllActivityUser = async (userId, page) => {
    try {
      const res = await ActAPI.getAllLazyLoad(userId, page);
      const data = await res.data.activities;
      setAllActivity((oldData) => [...oldData, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivityById = (id) => {
    const newActivityList = allActivity.filter((item) => item._id !== id);
    setAllActivity(newActivityList);
  };

  const createActivity = async (formData) => {
    try {
      const res = await ActAPI.createActivity(formData);
      setActivity(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        allActivity,
        activity,
        createActivity,
        setAllActivity,
        getAllActivityUser,
        deleteActivityById,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);

export default ActivityContextProvider;
