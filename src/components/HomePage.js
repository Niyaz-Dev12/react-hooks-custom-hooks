import React, { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch data for posts

  const { data:posts, isLoaded }=useQuery("http://localhost:4000/posts");

  // set the document title
  useDocumentTitle("Home");

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
