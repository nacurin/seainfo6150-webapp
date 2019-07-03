import React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import ArticleList from "./ArticleList/ArticleList";
import Footer from "./Footer/Footer";

const App = ({ articles }) => {
  return (
    <div className="App">
      <Header />
      <ArticleList articles={articles} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};
export default App;