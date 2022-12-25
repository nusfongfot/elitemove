import axios from '../services/axios';

export const register = (data) => axios.post('/auth/register', data);
export const login = (data) => axios.post('/auth/login', data);

// {login: (data)=> {}, register: (data)=>}
