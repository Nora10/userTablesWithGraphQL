import { gql } from '@apollo/client';

// GET All Users (Query): This retrieves all users.
export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

// GET One User (Query): This retrieves a single user by their id.
export const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            name
            email
        }
    }
`;

// GET First 10 Users (Query): This retrieves the first 10 users.
export const GET_FIRST_10_USERS = gql`
    query {
        users(limit: 10) {
            id
            name
            email
        }
    }
`;
