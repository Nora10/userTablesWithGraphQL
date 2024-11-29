import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addUser({ variables: { name, email } });
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding User...' : 'Add User'}
        </button>
      </form>

      {error && <p>Error! {error.message}</p>}
      {data && <p>User added successfully: {data.addUser.name}</p>}
    </div>
  );
};

export default AddUserForm;
