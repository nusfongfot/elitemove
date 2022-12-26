/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityCard from '../ActivityCard/ActivityCard';
import { useAuth } from '../../contexts/authContext';
import './item.css';
import { useLoading } from '../../contexts/loadingContext';
import * as ActAPI from '../../api/activityApi';

function ScrollLists() {
  const { user } = useAuth();
  const [list, setList] = useState([]);

  const [hasNext, setHasNext] = useState(true);

  const { startLoading, stopLoading } = useLoading();
  const fetchByPage = async (pagePaginate) => {
    try {
      startLoading();
      const res = await ActAPI.getAllLazyLoad(user?._id, pagePaginate);
      const newList = res.data.activities;

      setHasNext(res.data.hasNext);

      if (hasNext) {
        setList((p) => [...p, ...newList]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  };

  const deleteActivityById = (id) => {
    const newActivityList = list.filter((item) => item._id !== id);
    setList(newActivityList);
    toast.success('Delete Succesfully!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className="mt-[10px] w-full">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchByPage}
        hasMore={hasNext}
        loader={
          list.length > 0 && (
            <div className=" loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24" />
          )
        }
      >
        {list.map((item) => (
          <ActivityCard {...item} key={item._id} onDelete={deleteActivityById} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default ScrollLists;
