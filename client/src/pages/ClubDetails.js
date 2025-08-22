import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../services/api';

const ClubDetails = () => {
  const { id } = useParams(); // clubId
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await API.get(`/events/${id}`);
      setEvents(res.data);
    };
    fetchEvents();
  }, [id]);

  return (
    <div>
      <h2>Events for Club #{id}</h2>
      <Link to={`/events/${id}/add`}><button>Add Event</button></Link>

      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> – {event.date}
            <br />
            {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubDetails;
