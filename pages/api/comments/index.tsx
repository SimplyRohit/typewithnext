import { comments } from "@/data/comments";

export default function handler(req : any, res : any) {
    res.status(200).json(comments)
}