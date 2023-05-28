'use client'

import { Button, FormField, FormInput, FormLabel } from '@calorie-tracker/ui'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

import LoginHero from '../../../public/images/hero-login.jpg'

export default function LoginPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const params = useSearchParams()
  const callbackUrl = params.get('callbackUrl') || '/'

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await signIn('credentials', {
      ...user,
      redirect: true,
      callbackUrl,
    })
  }

  return (
    <div className="grid h-screen w-screen grid-cols-2">
      <div className="grid h-full w-full place-content-center">
        <h1 className="mb-4 text-2xl font-bold">Welcome back!</h1>

        <p className="mb-8 font-thin text-slate-400">
          Please enter your credentials.
        </p>

        <form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }}
              type="email"
              id="email"
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              onChange={(e) => {
                setUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }}
              type="password"
              id="password"
            />
          </FormField>

          <Button className="mt-8 w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>

      <div className="overflow-hidden">
        <Image
          src={LoginHero}
          alt="login hero"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
