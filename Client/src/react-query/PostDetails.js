import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";

const getComments = async (pageId) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${pageId}`
  );
  return resp.json();
};

const hanldeDelete = async (pageId) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${pageId}`,
    {
      method: "DELETE",
    }
  );
  return resp.json();
};

const handleUpdate = async (pageId) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${pageId}`,
    {
      method: "PUT",
    }
  );
  return resp.json();
};

function PostDetails({ posts }) {
  const [pageId, setPageId] = useState(null);

  const deleteComments = useMutation((postId) => hanldeDelete(postId));
  const updateComments = useMutation((postId) => hanldeDelete(postId));

  const { data, error, isLoading, isFetching } = useQuery(
    ["comments", posts],
    () => getComments(posts.id)
  );

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <div>
      <hr />
      <h4 style={{ color: "blue" }}>{posts.title}</h4>
      <button onClick={() => deleteComments.mutate(posts.id)}>Delete</button>
      <button onClick={() => updateComments.mutate(posts.id)}>Update</button>
      {deleteComments.isError && (
        <p style={{ color: "red" }}>Unable to delete!</p>
      )}
      {deleteComments.isLoading && (
        <p style={{ color: "purple" }}>Delete in proces!</p>
      )}
      {deleteComments.isSuccess && (
        <p style={{ color: "green" }}>Success Deleted!</p>
      )}
      {/* update */}
      {updateComments.isError && (
        <p style={{ color: "red" }}>Unable to update!</p>
      )}
      {updateComments.isLoading && (
        <p style={{ color: "purple" }}>Update in proces!</p>
      )}
      {updateComments.isSuccess && (
        <p style={{ color: "green" }}>Success Updated!</p>
      )}
      {data.map((comment) => (
        <h4 key={comment.id}>{comment.email}</h4>
      ))}
    </div>
  );
}

export default PostDetails;
