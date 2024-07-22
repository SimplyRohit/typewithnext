import { comments } from "@/data/comments";

export default function handler(req : any, res : any) {
    if (req.method !== "POST") {
        return res.status(200).json(comments)
    } else if (req.method === "POST") {
       const data = req.body.postcomment
        const newestComments = {
            id : new Date().getTime(), 
            name : "John Doe",
            comment : data
        }
        comments.push(newestComments)
        return res.status(200).json(comments)
       
    }
    
}