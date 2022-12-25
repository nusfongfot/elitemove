/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate, useParams } from 'react-router-dom';
import Joi from 'joi';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import ActivityImage from '../../images/train2.jpg';
import * as ActAPI from '../../api/activityApi';
import { useLoading } from '../../contexts/loadingContext';

const formSchema = Joi.object({
  title: Joi.string().min(3).max(20).label('title')
    .required(),
  dateTime: Joi.date().label('date').required(),
  type: Joi.string()
    .valid('bicycling', 'running', 'hiking', 'walking', 'swimming')
    .label('activity type')
    .required(),
  details: Joi.string().label('details').optional(),
  distanceKM: Joi.number().integer().optional().label('distance'),
  durationMin: Joi.number().integer().required().label('duration')
    .required(),
  photo: Joi.string().label('photo').optional(),
  _id: Joi.string().optional(),
});

function EditActivity() {
  const { activityId } = useParams();
  const defaultActivityData = {
    title: '',
    dateTime: '',
    type: 'default',
    details: '',
    distanceKM: '',
    durationMin: '',
    photo: '',
  };

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [activityData, setActivityData] = useState(defaultActivityData);
  const [activityById, setActivityById] = useState({});
  const { startLoading, stopLoading } = useLoading();
  // const date = activityData.dateTime.split('T')[0];
  // console.log(date);
  const AUTH = useAuth();

  const getActivityById = async () => {
    startLoading();
    const res = await ActAPI.getActivity(activityId);
    const {
      title, dateTime, type, details, distanceKM, durationMin, photo,
    } = res.data.activityDetail;

    // console.log(dateTime.split('T')[0]);

    let newObj = {
      title,
      dateTime: dateTime.split('T')[0],
      type,
      details,
      distanceKM,
      durationMin,
      photo,
    };
    setActivityData(newObj);
    stopLoading();
  };
  // const dateTimeFormatted = AUTH.user.dateTime.split('T')[0];

  useEffect(() => {
    getActivityById();
    setActivityData({
      title: activityById.title,
      dateTime: activityById.dateTime,
      type: activityById.type,
      details: activityById.details,
      distanceKM: activityById.distanceKM,
      durationMin: activityById.durationMin,
    });
  }, []);
  const handleInputChange = (event) => {
    const formInputName = event.target.name;
    const formInputValue = event.target.value;
    const newActivityData = { ...activityData };
    newActivityData[formInputName] = formInputValue;
    setActivityData(newActivityData);
  };
  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const onCancel = () => {
    setFile(null);
    navigate('/dashboard');
  };
  // console.log('photo', file);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log('Edit activity', activityData);
    const { value, error } = formSchema.validate(activityData);
    if (error) {
      const fieldError = error.details.map((item) => alert(item.message));
    }
  };
  const editActivityData = async () => {
    // Send Request
    try {
      const newActivityData = activityData;
      const formData = new FormData();
      // eslint-disable-next-line no-restricted-syntax
      for (const key in newActivityData) {
        if (key !== 'dateTime') {
          formData.append(key, newActivityData[key]);
        }
      }
      const formatDateTime = `${newActivityData.dateTime}T02:00:00.000Z`;
      console.log(formatDateTime);
      formData.append('dateTime', formatDateTime);
      if (file) {
        formData.append('photo', file);
      }
      console.log(newActivityData);
      startLoading();
      await ActAPI.updateActivityById(activityId, formData);
      navigate('/dashboard');
      toast.success('Update Succesfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.log(error);
    } finally {
      stopLoading();
    }
  };
  const handleOnClick = () => {
    editActivityData();
    // SEND API TO EDIT ACTIVITY
    // navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[90%] min-w-[360px] lg:max-w-[921px] h-[780px] rounded-[10px] bg-gray-primary px-[10%] semi-lg:px-[100px] flex flex-col">
        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <h3 className="font-thin text-[40px] text-white">Edit Activity</h3>
        </div>
        {/* input field */}
        <form
          className="h-full py-4 semi-lg:py-8 flex flex-col justify-around "
          onSubmit={handleFormSubmit}
        >
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input
              type="text"
              placeholder="Title your activity"
              name="title"
              id="titleInput"
              value={activityData.title}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
            <input
              type="date"
              placeholder="Date"
              name="dateTime"
              id="dateTimeInput"
              value={activityData.dateTime}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
          </div>
          <select
            className="input-primary"
            name="type"
            id="typeInput"
            value={activityData.type}
            onChange={handleInputChange}
          >
            <option value="bicycling">Bicycling</option>
            <option value="hiking">Hiking</option>
            <option value="running">Running</option>
            <option value="swimming">Swimming</option>
            <option value="walking">Walking</option>
          </select>
          <input
            type="text"
            placeholder="Share more about your activity"
            name="details"
            id="detialsInput"
            value={activityData.details}
            onChange={handleInputChange}
            className="input-primary"
          />
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input
              type="number"
              placeholder="Distance(KM)"
              name="distanceKM"
              id="distanceKMInput"
              value={activityData.distanceKM}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
            <input
              type="number"
              placeholder="Duration(Min)"
              name="durationMin"
              id="durationMinInput"
              value={activityData.durationMin}
              onChange={handleInputChange}
              className="input-primary flex-1"
            />
          </div>
          <div className="flex justify-center">
            <div className="w-5/6 rounded-lg shadow-xl bg-transparent">
              {!file ? (
                <div>
                  <label className="inline-block mb-2 text-gray-400">Upload a photo</label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-32 border-4 border-white
                     border-dashed hover:bg-gray-300 hover:border-gray-300"
                    >
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 text-purple-400 group-hover:text-gray-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5
                          5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p
                          className="pt-1 text-sm tracking-wider
                      text-purple-400 group-hover:text-purple-900"
                        >
                          Attach a file
                        </p>
                      </div>
                      <input
                        type="file"
                        className="opacity-0"
                        name="photo"
                        id="photoInput"
                        value={file}
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <img src={URL.createObjectURL(file)} alt="activity pic" className="h-[150px]" />
                </div>
              )}
            </div>
          </div>
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <button
              type="button"
              className="w-full border-2 border-purple-500 h-[60px] rounded-[10px] text-white text-xl font-semibold drop-shadow-2xl flex-1"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary self-center flex-1"
              onClick={handleOnClick}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditActivity;
