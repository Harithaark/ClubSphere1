import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ClubDetails from './pages/ClubDetails';
import EventList from './pages/EventList';
import AddEvent from './pages/AddEvent';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/club/:id" element={<ProtectedRoute><ClubDetails /></ProtectedRoute>} />
        <Route path="/events/:clubId" element={<ProtectedRoute><EventList /></ProtectedRoute>} />
        <Route path="/events/:clubId/add" element={<ProtectedRoute><AddEvent /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/club/:id" element={<ProtectedRoute><ClubDetails /></ProtectedRoute>} />
<Route path="/events/:clubId/add" element={<ProtectedRoute><AddEvent /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
