import { comments } from "@/data/comments";
export default function handler(req : any, res : any) {
    const { commentsid } = req.query
    if (req.method == "GET") {
console.log(commentsid)
 const comment = comments.find((comment) => comment.id === Number(commentsid));
 res.status(200).json(comment)
    } else if (req.method == "DELETE") {
        const comment = comments.find((comment) => comment.id === Number(commentsid));
       const index = comments.findIndex((comment) => comment.id === Number(commentsid));
       comments.splice(index, 1);
       res.status(200).json(comment)
    }
}