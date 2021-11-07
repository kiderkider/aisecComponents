import BlogList from "./components/BlogList";
import ContentList from "./components/ContentList";
import OurBlogHome from "./components/OurBlogPage/OurBlogHome";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Aiesec Components</h1>
      <h2>Blog Component</h2>
      <BlogList />
      <h2>Content Component</h2>
      <ContentList />
      <h2>Blog page Component</h2>
      <OurBlogHome />
    </div>
  );
}
