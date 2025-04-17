import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import PersonneList from './components/PersonneList';
import PersonneForm from './components/PersonneForm';
import PersonneSearch from './components/PersonneSearch';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PersonneList />} />
          <Route path="/add" element={<PersonneForm />} />
          <Route path="/edit/:id" element={<PersonneForm />} />
          <Route path="/search" element={<PersonneSearch />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;