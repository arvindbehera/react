import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import PostDetails from "./PostDetails";

const getPosts = async (newPage) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&page=${newPage}`
  );
  return resp.json();
};
const maxPage = 10;
function Posts() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const queryClient = useQueryClient();
  useEffect(() => {
    if (currentPage < maxPage) {
      let nextPage = currentPage + 1;
      queryClient.prefetchQuery(["posts", nextPage], () => getPosts(nextPage));
    }
  }, [currentPage]);

  const { data, error, isLoading, isFetching } = useQuery(
    ["posts", currentPage],
    () => getPosts(currentPage),
    {
      staleTime: 3000,
      keepPreviousData: true,
    }
  );
  if (isLoading) return <h4>Loading...</h4>;
  if (error)
    return (
      <>
        <h4>Something went Wrong!</h4>
        <p>{error.message}</p>
      </>
    );

  return (
    <div>
      <h1>Post</h1>
      {data.map((post) => (
        <h4 key={post.id} onClick={() => setSelectedPost(post)}>
          {post.title}
        </h4>
      ))}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}>
        PREV
      </button>
      <span>Page No: {currentPage}</span>
      <button
        disabled={currentPage === data.length}
        onClick={() => setCurrentPage((prev) => prev + 1)}>
        NEXT
      </button>
      {selectedPost && <PostDetails posts={selectedPost} />}
    </div>
  );
}

export default Posts;
