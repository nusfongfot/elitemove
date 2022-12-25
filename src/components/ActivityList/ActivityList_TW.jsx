import { useNavigate } from 'react-router-dom';

import Statistics from '../Statistics/Statistics';
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import ButtonPurple from '../buttons/ButtonPurpleCreate';
import ScrollLists from './ScrollList';
import './item.css';

function ActivityList() {
  const navigate = useNavigate();

  const addNewActivity = () => {
    navigate('/activity/create');
  };

  return (
    <div className="mt-10 w-screen">
      <div className="flex flex-col 2xl:hidden">
        {/* LEFT */}
        <div className="">
          <div className="">
            <ProfileSummary />
          </div>
        </div>
        {/* FEED-CENTER */}

        {/* STAT-RIGHT */}
        <div className="">
          <div className="">
            <Statistics />
          </div>
        </div>
        <div className="mt-10">
          <ButtonPurple text="create new activity" className="w-full" onClick={addNewActivity} />
          <div className="">
            <ScrollLists />
          </div>
        </div>
      </div>
      <div className="hidden 2xl:grid 2xl:grid-cols-12 2xl:gap-4 2xl:px-4">
        {/* LEFT */}
        <div className="2xl:col-start-1 2xl:col-end-4  left-4 top-[80px] w-[350px]">
          <div className=" ">
            <ProfileSummary />
          </div>
        </div>
        {/* FEED-CENTER */}

        {/* STAT-RIGHT */}

        <div className="2xl:mt-0 2xl:col-start-4 2xl:col-end-9 mr-12">
          <ButtonPurple text="create new activity" className="w-full" onClick={addNewActivity} />
          <div className="">
            <ScrollLists />
          </div>
        </div>

        <div className="2xl:col-start-10 2xl:col-end-13 top-[80px] min-w-[450px] ml-[-160px]">
          <div className="">
            <Statistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityList;
