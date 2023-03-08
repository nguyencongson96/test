import React from "react";
import { Link } from "react-router-dom";

const RandomQuote = (props) => {
  const { quote } = props;
  return (
    <div className="random-quote">
      <div className="quote">
        <div className="content">{quote.content}</div>
        <div className="info">
          <Link className="author" to={`/${quote.authorSlug}`}>
            {quote.author}
          </Link>
          <div className="tag">{quote.tags.join(", ")}</div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
