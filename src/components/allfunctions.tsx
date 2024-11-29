import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USERS, GET_USER, GET_FIRST_10_USERS } from '../graphql/queries';
import { ADD_USER, DELETE_ALL_USERS, DELETE_FIRST_10_USERS, DELETE_USER, UPDATE_ALL_USERS, UPDATE_USER } from '../graphql/mutations';

const UsersWithAllOperations = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Queries
  const { loading, error, data } = useQuery(GET_USERS);
  const { data: userData } = useQuery(GET_USER, {
    variables: { id: 1 }, // Replace with actual user ID as needed
  });
  const { data: first10Data } = useQuery(GET_FIRST_10_USERS);

  // Mutations
  const [addUser] = useMutation(ADD_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [deleteAllUsers] = useMutation(DELETE_ALL_USERS);
  const [deleteFirst10Users] = useMutation(DELETE_FIRST_10_USERS);
  const [updateUser] = useMutation(UPDATE_USER);
  const [updateAllUsers] = useMutation(UPDATE_ALL_USERS);

  const handleAddUser = async () => {
    await addUser({ variables: { name: userName, email: userEmail } });
    setUserName('');
    setUserEmail('');
  };

  const handleDeleteUser = async (id: any) => {
    await deleteUser({ variables: { id } });
  };

  const handleDeleteAllUsers = async () => {
    await deleteAllUsers();
  };

  const handleDeleteFirst10Users = async () => {
    await deleteFirst10Users();
  };

  const handleUpdateUser = async (id: number) => {
    await updateUser({ variables: { id, name: userName, email: userEmail } });
  };

  const handleUpdateAllUsers = async () => {
    await updateAllUsers({ variables: { name: userName, email: userEmail } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>User Operations</h2>

      {/* Add User */}
      <div>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Get All Users */}
      <h3>All Users</h3>
      <ul>
        {data.users.map((user: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Get One User */}
      <h3>Get One User (ID 1)</h3>
      {userData && (
        <div>
          <p>Name: {userData.user.name}</p>
          <p>Email: {userData.user.email}</p>
        </div>
      )}

      {/* Get First 10 Users */}
      <h3>First 10 Users</h3>
      <ul>
        {first10Data.users.map((user: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      {/* Delete All Users */}
      <button onClick={handleDeleteAllUsers}>Delete All Users</button>

      {/* Delete First 10 Users */}
      <button onClick={handleDeleteFirst10Users}>Delete First 10 Users</button>

      {/* Update User */}
      <h3>Update User (ID 1)</h3>
      <button onClick={() => handleUpdateUser(1)}>Update User</button>

      {/* Update All Users */}
      <h3>Update All Users</h3>
      <button onClick={handleUpdateAllUsers}>Update All Users</button>
    </div>
  );
};

export default UsersWithAllOperations;
