export default function handler(req : any, res : any) {
    const { params } = req.query
    res.status(200).json(params)
}