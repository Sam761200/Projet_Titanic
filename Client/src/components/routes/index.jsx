import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound'; 


const index = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<ProtectedRoutes/>}>
          <Route path="/Graphique" element={<Graphique />} />
        </Route> */}
          <Route path="/" element={<Home />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default index;