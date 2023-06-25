import React, { useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { GET_ME, REMOVE_BOOK } from "../utils/graphQl";

const SavedBooks = (props) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const {
    loading,
    error,
    data: userData,
  } = useQuery(GET_ME, { fetchPolicy: "cache-and-network" });
  const [removeBook, { data: userDataR, error: errorR }] =
    useMutation(REMOVE_BOOK);

  // use this to determine if `useEffect()` hook needs to run again
  const userDataRLength = userDataR
    ? Object.keys(userDataR.removeBook.savedBooks).length
    : -1;

  useEffect(() => {
    if (userDataRLength === -1) return;

    props.client.cache.updateQuery({ query: GET_ME }, (_) => ({
      me: {
        savedBooks: [...userDataR.removeBook.savedBooks],
      },
    }));
  }, [userDataRLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database

  const deleteBook = (bookId) => {
    if (!token) {
      return false;
    }

    removeBook({ variables: { removeBookInput: { bookId } } });
  };

  if (errorR) {
    console.log(errorR);
  }

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <>
      <div fluid="true" className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className="pt-5">
          {userData.me.savedBooks.length
            ? `Viewing ${userData.me.savedBooks.length} saved ${
                userData.me.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <Row>
          {userData.me.savedBooks.map((book) => {
            return (
              <Col md="4" key={book.bookId}>
                <Card border="dark">
                  {book.image ? (
                    <Card.Img
                      src={book.image}
                      alt={`The cover for ${book.title}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className="small">Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() => deleteBook(book.bookId)}
                    >
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
