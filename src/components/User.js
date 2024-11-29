import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const User = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <h3>{data.user.name}</h3>
      <p>{data.user.email}</p>
    </div>
  );
};

export default User;
