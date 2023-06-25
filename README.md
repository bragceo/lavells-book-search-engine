# Lavells Book Search Engine

## Description 

This is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) web application integrated with GraphQL using Apollo Server. The application allows users to interact with a Google Books API, enabling them to search, view, save and delete books. Users can also create an account and log in to access their saved books. GraphQL queries and mutations are used for interaction with the server.


## User Story

AS AN avid reader <br>
I WANT to search for new books to read <br>
SO THAT I can keep a list of books to purchase <br>

## Acceptance Criteria

GIVEN a book search engine <br>
WHEN I load the search engine <br>
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br>
WHEN I click on the Search for Books menu option <br>
THEN I am presented with an input field to search for books and a submit button <br>
WHEN I am not logged in and enter a search term in the input field and click the submit button <br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site <br>
WHEN I click on the Login/Signup menu option <br>
THEN a modal appears on the screen with a toggle between the option to log in or sign up <br>
WHEN the toggle is set to Signup <br>
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button <br>
WHEN the toggle is set to Login <br>
THEN I am presented with two inputs for an email address and a password and login button <br>
WHEN I enter a valid email address and create a password and click on the signup button <br>
THEN my user account is created and I am logged in to the site <br>
WHEN I enter my account’s email address and password and click on the login button <br>
THEN I the modal closes and I am logged in to the site <br>
WHEN I am logged in to the site <br>
THEN the menu options change to Search for Books, an option to see my saved books, and Logout <br>
WHEN I am logged in and enter a search term in the input field and click the submit button <br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account <br>
WHEN I click on the Save button on a book <br>
THEN that book’s information is saved to my account <br>
WHEN I click on the option to see my saved books <br>
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account <br>
WHEN I click on the Remove button on a book <br>
THEN that book is deleted from my saved books list <br>
WHEN I click on the Logout button <br>
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button <br>


## Deployed URL
https://llevels-graphql-1b8972e76c7e.herokuapp.com/


## Github Repository

https://github.com/bragceo/lavells-book-search-engine



## Overview of Code structure and its components:

 The application consists of several components. The following is just an overview:

SavedBooks.js: This component fetches the user's saved books from the server using the GET_ME GraphQL query. The list is updated using React's useEffect hook whenever there's a change in user data. Books can be removed from the user's saved books by calling the removeBook mutation.

SignupForm.js: This component provides the functionality for users to create a new account. User data is handled using React's useState hook and new users are created on the server by calling the ADD_USER GraphQL mutation.

LoginForm.js: This component is similar to the SignupForm.js but it handles user login instead of user registration. Users are authenticated on the server by calling the LOGIN GraphQL mutation.

Navbar.js: This component handles the application's navigation bar. The bar displays different links based on the user's authentication status, which is determined using Auth.loggedIn().

Book.js, User.js, index.js models: These models define the structure of the database. The User.js file describes a user, while Book.js describes a book.

typeDef.js, resolvers.js, index.js schemas: These files define the GraphQL schema and the resolver functions used for executing queries and mutations on the server.

## How to run the application
 
Running the application locally:

Assuming Node.js installed, here's how you can run the application:

Navigate to the root directory of the project.

Run npm install to install the necessary dependencies.

Run npm start to start the server and client concurrently. If they are set to run separately, you might need to start them separately:

Run npm run server to start the server.

Run npm run client to start the client.

The application should now be running and accessible on localhost:3000 (or whichever port is set in your configuration).

Note: You need to have a MongoDB server running and a .env file with the necessary environment variables (e.g., database URI, API keys, etc.). Please refer to the application's documentation for more specific setup instructions.



## Special Thanks 

Shout out to the awesome Instructors and TAs who worked with me through numerous challenges. These individuals include: Diego, Enrique Gomes, and Erik Hoverstein. 



## Authors 

Lavell Juan <br>



## Credits 

N/a

## License 

Please refer to license in repo 






