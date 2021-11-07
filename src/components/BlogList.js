import BlogItem from "./BlogItem";
import "./BlogList.css";
const BlogList = () => {
  const blogDatas = [
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      title: "title01"
    },
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      title: "title01"
    },
    {
      key: "0",
      image_url: "https://via.placeholder.com/150",
      title: "title01"
    }
  ];
  return (
    <div className="op">
      {blogDatas.map((blogData) => (
        <BlogItem key={blogData.key} {...blogData} />
      ))}
    </div>
  );
};

export default BlogList;
