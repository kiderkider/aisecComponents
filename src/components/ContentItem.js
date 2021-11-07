import "./ContentItem.css";
const ContentItem = (props) => {
  return (
    <div>
      <h1>{props.contentTitle}</h1>
      <div className={props.condition == true ? "right" : "left"}>
        <div className="block">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
        <div className="block">
          <img src={props.imgOne} alt="150X150" />
          <img src={props.imgTwo} alt="150X150" />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h1>{props.contentTitle}</h1>
  //     <div>
  //       <h3>{props.title}</h3>
  //       <p>{props.content}</p>
  //     </div>
  //     <div>
  //       <img src={props.imgOne} alt="1as0X150" />
  //       <img src={props.imgTwo} alt="1as0X150" />
  //     </div>
  //   </div>
  // );
};
export default ContentItem;
