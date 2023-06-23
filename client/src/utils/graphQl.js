import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Query {
    me {
      savedBooks {
        bookId
        title
        image
        authors
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($removeBookInput: RemoveBookInput!) {
    removeBook(removeBookInput: $removeBookInput) {
      savedBooks {
        bookId
        title
        image
        authors
        description
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($registerInput: RegisterInput!) {
    addUser(registerInput: $registerInput) {
      token
      user {
        _id
        username
        email
        bookCounts
      }
    }
  }
`;


export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($saveBookInput: SaveBookInput!) {
    saveBook(saveBookInput: $saveBookInput) {
      _id
      bookCounts
      email
      savedBooks {
        title
        bookId
      }
      username
    }
  }
`;
