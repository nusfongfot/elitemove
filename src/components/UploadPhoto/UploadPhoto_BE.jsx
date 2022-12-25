/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import ButtonPurpleUpLoad from '../buttons/ButtonPurpleUpLoad';
import { useAuth } from '../../contexts/authContext';
import { useLoading } from '../../contexts/loadingContext';

function UploadPhoto({
  file, setFile, inputFileRef, userID,
}) {
  const AUTH = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const onChangeFile = (event) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };
  const onSaveFile = async () => {
    // Send Request
    try {
      const formData = new FormData();
      formData.append('profilePhoto', file);
      startLoading();
      await AUTH.updateUserProfile(formData);
      toast.success('UpdatePhoto Successfully!', {
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
      setFile(null);
      stopLoading();
    }
  };
  const onCanCelFile = () => {
    setFile(null);
  };
  console.log(file);
  return (
    <div>
      <ButtonPurpleUpLoad
        text="Edit Photo"
        file={file}
        onChangeFile={onChangeFile}
        onSaveFile={onSaveFile}
        onCanCelFile={onCanCelFile}
        inputFileRef={inputFileRef}
      />
    </div>
  );
}

export default UploadPhoto;
