import "./BlogItem.css";
const BlogItem = (props) => (
  <div className="mr">
    <div>{props.title}</div>
    <img src={props.image_url} alt="item" />
  </div>
);
export default BlogItem;
