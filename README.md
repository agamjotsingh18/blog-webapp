# Blog WebApp

Welcome to Blog WebApp, a full-featured blogging platform where users can create, edit, and view blog posts. This application is built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- User Authentication (Sign Up, Login)
- Create, Read, Update, Delete (CRUD) Blog Posts
- View All Blogs
- View Blogs by User
- Responsive Design

## Live Demo

You can access the live version of the application here: [Blog With Me](https://blog-with-me.vercel.app/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**

    ```sh
    git clone https://github.com/agamjotsingh18/blog-webapp.git
    cd blog-webapp
    ```

2. **Install dependencies**

    For the backend:
    ```sh
    cd backend
    npm install
    ```

    For the frontend:
    ```sh
    cd frontend
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongo_uri
    ```

4. **Run the application**

    In the `backend` directory:
    ```sh
    npm start
    ```

    In the `frontend` directory:
    ```sh
    npm start
    ```

    The application should now be running on [http://localhost:3000](http://localhost:3000) for the frontend and [http://localhost:5000](http://localhost:5000) for the backend.

## Technologies Used

- **Frontend:** React, Redux, Material UI
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Deployment:** Vercel

## Project Structure

- `backend/`: Contains the backend code (API, database models, controllers, routes)
- `blog-webapp//`: Contains the frontend code (React components, Redux store, CSS)
