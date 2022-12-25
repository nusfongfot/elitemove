/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '../contexts/authContext';
import LoadingContextProvider from '../contexts/loadingContext';
import ActivityContextProvider from '../contexts/activityContext';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <LoadingContextProvider>
          <ActivityContextProvider>
            <Router />
          </ActivityContextProvider>
        </LoadingContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
