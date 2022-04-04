import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateHero from './pages/CreateHero';
import EditHero from './pages/EditHero';
import ListHeroes from './pages/ListHeroes';

const RoutesList = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<ListHeroes />} />
        <Route path='/edit/:id' element={<EditHero />} />
        <Route path='/create' element={<CreateHero />} />
      </Routes>
    </Router>
  );
};
export default RoutesList;
