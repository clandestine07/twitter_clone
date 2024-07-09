const bcrypt = require('bcrypt')
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../libs/prismadb'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'}
            },

            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    return null
                }
                const user =  await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user || !user?.hashedPassword){
                    return null
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if(!isCorrectPassword){
                    return null
                }
                
                return user
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.JWT_SECRET, 
    },
    secret: process.env.NEXTAUTH_SECRET

})