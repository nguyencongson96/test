import React from "react";
import { useParams } from "react-router-dom";

const Author = (props) => {
  const { list } = props;
  const { authorSlug } = useParams();
  const filterList = list.filter((ele) => ele.authorSlug === authorSlug);
  const filterElement = filterList.map((ele) => (
    <div className="quote" key={ele._id}>
      <div className="content">{ele.content}</div>
    </div>
  ));
  return (
    <div className="quote-summary">
      <div className="author-name">
        {filterList.length === 0 ? "" : filterList[0].author}
      </div>
      <div className="quote-list">{filterElement}</div>
    </div>
  );
};

export default Author;
