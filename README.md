# React User Profile App

This is a simple React application that fetches and displays user data from the `randomuser.me` API.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **Framer Motion**: A production-ready motion library for React.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.

## Features

- Fetches user data from the `randomuser.me` API using `axios`.
- Displays different information about the user when you hover over different elements.
- Uses Framer Motion to animate the size and position of the elements on hover.
- Uses Tailwind CSS for styling.

## How It Works

The app fetches a user from the `randomuser.me` API and displays different information about the user when you hover over different elements. The `activeDiv` state is used to determine which information to display.

The `motion.div`'s `animate` prop is set to animate the width, height, top, and left properties based on whether the div is the currently active one. This will keep the div expanded until another one is hovered over.

The `backgroundImage` property in the inline styles is correctly set to display different SVG images for each div. The `backgroundPosition` and `backgroundSize` properties ensure that the image is centered and covers the entire div.

## Running the App

To run the app, first install the dependencies with `npm install`. Then, start the development server with `npm start`. The app will be available at `http://localhost:3000`.
