/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import UploadPhoto from '../UploadPhoto/UploadPhoto_BE';
import { useAuth } from '../../contexts/authContext';
import './EditAvatar.css';

function EditAvatar() {
  const { user } = useAuth();
  const defaultAvatar = 'https://images.unsplash.com/photo-1626245550585-0b8d640da77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

  const [file, setFile] = useState(null);
  const inputFileRef = useRef();
  const avatarPic = user.profilePhoto ? user.profilePhoto : defaultAvatar;

  const onClickAvatar = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="edit-avatar-container">
      <img
        className="avatar"
        src={file ? URL.createObjectURL(file) : avatarPic}
        alt="profile-image"
        onClick={onClickAvatar}
      />
      <UploadPhoto userID={user?._id} file={file} setFile={setFile} inputFileRef={inputFileRef} />
    </div>
  );
}

export default EditAvatar;
