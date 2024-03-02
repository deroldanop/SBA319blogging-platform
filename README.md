# Node, Express, and MongoDB Server Application

This is a sample server application built using Node.js, Express.js, and MongoDB. The application provides CRUD (Create, Read, Update, Delete) operations for three data collections: users, posts, and comments.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Ensure MongoDB is installed and running on your machine.
4. Start the server by running `npm start`.
5. Access the API endpoints using a tool like Postman or curl.

## API Routes

### Users

- **GET /users**: Get all users.
- **POST /users**: Create a new user.
- **DELETE /users/:id**: Delete a user by ID.

### Posts

- **GET /posts**: Get all posts.
- **POST /posts**: Create a new post.
- **DELETE /posts/:id**: Delete a post by ID.



## MongoDB Indexes

- Text index on the `title` and `content` fields of the Post collection for efficient text searches.

## MongoDB Validation

- Validation rule to ensure uniqueness of email addresses in the User collection.

## Sample Data

- Sample data for each collection is included to illustrate the use case.