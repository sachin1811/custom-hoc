import "./styles.css";
import posts from "./components/posts";
import news from "./components/news";
import hoc from "./components/hoc";

const PostWrapped = hoc(posts);
const NewsWrapped = hoc(news);

export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <PostWrapped />
      <br />
      <br />
      <br />
      <br />
      <NewsWrapped />
    </div>
  );
}
