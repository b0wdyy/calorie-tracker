import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await fetch(`${process.env['API_URL']}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }

        return null
      },
      credentials: {
        email: {
          type: 'text',
        },
        password: {
          type: 'password',
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token['user'] || session.user
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token['user'] = user
      }
      return token
    },
  },
  pages: {
    signIn: '/login',
    newUser: '',
  },
}
