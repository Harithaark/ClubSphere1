import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [clubs, setClubs] = useState([]);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchClubs = async () => {
      const res = await API.get('/clubs');
      setClubs(res.data);
    };
    fetchClubs();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.name} ({user.role})</h2>
      <button onClick={logout}>Logout</button>

      <h3>All Clubs</h3>
      {user.role === 'admin' && (
        <Link to="/create-club"><button>Create New Club</button></Link>
      )}

      <ul>
        {clubs.map(club => (
          <li key={club.id}>
            <strong>{club.name}</strong> — {club.description}
            <br />
            <Link to={`/club/${club.id}`}>View Events</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
