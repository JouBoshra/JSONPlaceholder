import { PostProvider } from "./assets/context/PostContext";
import HomePage from "./assets/Pages/HomePage";

function App() {
  return (
    <PostProvider>
      <HomePage />
    </PostProvider>
  );
}

export default App;
