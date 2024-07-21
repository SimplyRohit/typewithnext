
import { useState } from "react";
type Comment = {
    id: number;
    name: string;
    comment: string;
}
export default function FetchComments() {
const [comments, setComments] = useState<Comment[]>([]);
async function fetchcomment() {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
}
    return (
<>
        <button onClick={() => fetchcomment()}> fetch comments</button>
        {comments.map((comment) => (<li key={comment.id}>{comment.comment} - {comment.name}</li>))}
        </>
    )
}

