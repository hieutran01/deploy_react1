import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import TourCreate from "./pages/TourCreate";
import TourDelete from "./pages/TourDelete";
import TourEdit from "./pages/TourEdit";
import TourList from "./pages/TourList";
import TourShow from "./pages/TourShow";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Provider store={store}>
            <Routes>
              <Route path="deploy_react1/*" element={<TourList />} />
              <Route path="deploy_react1/tours/create" element={<TourCreate />} />
              <Route path="deploy_react1/tours/delete/:id" element={<TourDelete />} />
              <Route path="deploy_react1/tours/:id/edit" element={<TourEdit />} />
              <Route path="deploy_react1/tours/:id" element={<TourShow />} />
            </Routes>
        </Provider>
      </div>
    </div>
  );
}

export default App;
