# React JSONPlaceholder App

Welcome to the **React JSONPlaceholder App**! This is a simple yet powerful app that fetches and displays posts from the JSONPlaceholder API, with a few fun features like searching, viewing details, pagination, and comments display!

## Features

- 📜 **Fetch Data from API**: Uses JSONPlaceholder API to fetch a list of posts.
- 📜 **Display Posts in Twitter Style**: Posts are displayed in a layout similar to Twitter, complete with icons for comments, retweets, likes, and shares.
- 🔍 **Search Functionality**: A search bar that allows users to filter posts by title.
- 📜 **Responsive Design**: Fully responsive layout using Tailwind CSS, optimized for both desktop and mobile devices.
- 📝 **View Details**: Click on a post to view the full details along with user comments.
- 🔄 **Pagination**: Browse posts with easy navigation between pages.
- 🔧 **Context API**: Centralized state management with React's Context API.
- ✅ **Unit Testing**: Component tests using Jest to ensure code reliability.

## Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run dev
   ```

## Usage

- **Searching**: Enter text in the search bar to filter posts based on the title.
- **Post Selection**: Click on any post to view more details (extendable with additional features as needed).

## Components

- `App.jsx`: Main application wrapper, includes PostList and Footer.
- `PostList.jsx`: Displays a list of posts in a Twitter-style format.
- `SearchBar.jsx`: Search bar for filtering posts.
- `Footer.jsx`: Static footer component for additional navigation links.

## Dependencies

- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework for responsive styling
- **JSONPlaceholder API**: Mock API for testing data fetching

## Future Enhancements

- Add pagination for large post lists.
- Integrate a backend for real-time data and user authentication.
- Enhance post details view with comments and likes.
