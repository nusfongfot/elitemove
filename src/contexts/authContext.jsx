/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as AuthAPI from '../api/authApi'; // {login: (data)=> {}, register: (data)=>}
import * as ProfileAPI from '../api/profileApi';
import * as ActAPI from '../api/activityApi';
import { setAccessToken, getAccessToken, removeAccessToken } from '../services/localStorage';

// ### Named Context ใช้ 2 ที่
const AuthContext = createContext();

// ### Create HigherOrder Component : Context Wrapper
function AuthContextProvider({ children }) {
  // ## SHARED DATA
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();
  // ## EFFECT HOOK
  useEffect(() => {
    const fetchMe = async () => {
      // Send API to get Profile as USER

      try {
        const response = await ProfileAPI.getMe();
        // const r = await ProfileAPI.getProfile(response.data.user._id);
        const fetchedUser = response.data.user;
        // 1 setUser
        console.log(fetchedUser);
        setUser(fetchedUser);
        // 2 navigate
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    };

    // เช็คว่ามี token ไหม
    // ถ้ามี ส่ง token ไปขอ profile
    // ถ้าไม่มี ก็ไม่ต้องทำอะไร / setUser(null)
    const token = getAccessToken();
    if (token) {
      console.log('FM');
      fetchMe();
    }
  }, []);

  // console.log('CTX');
  // ## SHARED LOGIC
  // # AUTH
  const login = async (data) => {
    try {
      // API : REQ->RES
      const response = await AuthAPI.login(data); // axios.post('/auth/login',
      const { user: userObj, token } = response.data;
      // #1 SET USER ==> Trigger Route
      setUser(userObj);

      // #2 SET TOKEN
      setAccessToken(token);
      toast.success('Login Succesfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      // #3 Navigate Path
      navigate('/dashboard');
    } catch (error) {
      // console.log(error.message);
      // if (error.message === 'Request failed with status code 403') {
      //   alert('Please login with valid email and password');
      // }
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };
  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
    // removeToken
    // navigate --> landing page ('/')
    // setUser = null
  };
  const register = async (formData) => {
    try {
      const res = await AuthAPI.register(formData);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.code === 'ERR_BAD_REQUEST') {
        alert('This email is already in use');
      }
    }
  };
  // # PROFILE
  const getUserProfile = async () => {};
  const updateUserProfile = async (formData) => {
    try {
      const res = await ProfileAPI.updateProfile(user._id, formData);
      const newProfile = res.data.profile;
      setUser(newProfile);
    } catch (error) {
      console.log(error);
    }
  };

  // # Bundle Shared Value,Logic in Object
  const shared = {
    user,
    initialLoading,
    login,
    logout,
    register,
    getUserProfile,
    updateUserProfile,
  };
  // ที่ที่ 1 : ใช้ตั้ง Provider
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
}

// ### CustomHook
export const useAuth = () => useContext(AuthContext);

// ที่ที่ 2 : ใช้กัับ Consumer
// ### Export Named for call later
export { AuthContext };

// ### Export HOC for Wrapper
export default AuthContextProvider;
