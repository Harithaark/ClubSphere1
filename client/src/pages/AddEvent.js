import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

const AddEvent = () => {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post(`/events/${clubId}`, form);
    navigate(`/club/${clubId}`);
  };

  return (
    <div>
      <h2>Add Event to Club #{clubId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input name="date" type="date" onChange={handleChange} />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
