import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
const prisma = require ('@/libs/prismadb')
const serverAuth = async (req: NextApiRequest) => {
    const session =  await getSession({req})

    if(!session?.user?.email){
        throw new Error('Unauthorized')
    }

    const currentUser = await prisma.findUnique({
        where:{
            email: session.user.email
        }
    })
    if(!currentUser){
        throw new Error('Unauthorized')
    }
    return {currentUser}
}

export default serverAuth