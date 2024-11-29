import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

export const ADD_10_USERS = gql`
  mutation AddUsers($users: [UserInput!]) {
    addUsers(users: $users) {
      id
      name
      email
    }
  }
`;

// DELETE One User (Mutation): This deletes a user by their id.
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;

// DELETE all Users (Mutation): This deletes all users.
export const DELETE_ALL_USERS = gql`
  mutation {
    deleteAllUsers {
      id
      name
    }
  }
`;

// DELETE first 10 Users (Mutation): This deletes 10 users by limit.
export const DELETE_FIRST_10_USERS = gql`
  mutation {
    deleteUsers(limit: 10) {
      id
      name
    }
  }
`;

// Update all Users (Mutation): This updates all users .
export const UPDATE_ALL_USERS = gql`
  mutation {
    updateAllUsers(email: "newemail@sample.com") {
      id
      name
      email
    }
  }
`;

// Update first 10 Users (Mutation): This updates 10 users by their id.
export const UPDATE_FIRST_10_USERS = gql`
  mutation {
    updateUsers(limit: 10, email: "newemail@sample.com") {
      id
      name
      email
    }
  }
`;

// Update one User (Mutation): This updates a users by their id.
export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

