import { useState } from "react";
type Comment = {
  id: number;
  name: string;
  comment: string;
};
export default function FetchComments() {
  const [postcomment, setpostcomment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  async function deltecomment(commentid: number) {
    const response = await fetch(`/api/comments/${commentid}`, {
      method: "DELETE",
    });
    fetchcomment();
  }
  async function storecomments() {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postcomment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  async function fetchcomment() {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  }
  return (
    <>
      <input
        type="text"
        placeholder="comment"
        value={postcomment}
        onChange={(e) => setpostcomment(e.target.value)}
      />
      <button onClick={storecomments}> store comments</button>
      <button onClick={() => fetchcomment()}> fetch comments</button>
      {comments.map((comment) => (
        <li onClick={() => deltecomment(comment.id)} key={comment.id}>
          {comment.comment} - {comment.name}
        </li>
      ))}
    </>
  );
}
