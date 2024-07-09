const serverAuth = require("@/libs/serverAuth");
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method !== 'GET'){
        res.status(405).end();
    }
    try {
        const { currentUser } = await serverAuth(req)
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).end()
    }
}