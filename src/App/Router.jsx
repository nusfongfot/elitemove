/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */

import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard/DashBoard';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage_11';
import RegisterPage from '../pages/RegisterPage/Register_33';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import CreateActivity from '../pages/CreateActivity/CreateActivity';
import EditActivity from '../pages/EditActivity/EditActivity';
import { useAuth } from '../contexts/authContext';
import AppLayout from '../layout/AppLayout';

function Router() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="dashboard" element={<DashBoardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="activity/create" element={<CreateActivity />} />
        <Route path="activity/edit/:activityId" element={<EditActivity />} />
      </Route>
    </Routes>
  );
}

export default Router;
