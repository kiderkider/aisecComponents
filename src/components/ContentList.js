import ContentItem from "./ContentItem";
const ContentList = () => {
  const contentDatas = [
    {
      key: 0,
      contentTitle: "GlobalTalent",
      title: "become an",
      content: "a lorem ipsum content",
      imgOne: "https://via.placeholder.com/150",
      imgTwo: "https://via.placeholder.com/150"
    },
    {
      key: 1,
      contentTitle: "contentTitle02",
      title: "title02",
      content: "a lorem ipsum content",
      imgOne: "https://via.placeholder.com/150",
      imgTwo: "https://via.placeholder.com/150"
    },
    {
      key: 2,
      contentTitle: "contentTitle02",
      title: "title02",
      content: "a lorem ipsum content",
      imgOne: "https://via.placeholder.com/150",
      imgTwo: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      {contentDatas.map((contentData) => (
        <ContentItem
          key={contentData.key}
          condition={contentData.key % 2 === 0 ? true : false}
          {...contentData}
        />
      ))}
    </div>
  );
};
export default ContentList;
