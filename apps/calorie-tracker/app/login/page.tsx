import { Button, FormField, FormInput, FormLabel } from '@calorie-tracker/ui'
import Image from 'next/image'

import LoginHero from '../../public/images/hero-login.jpg'

export default function LoginPage() {
  return (
    <div className="grid h-screen w-screen grid-cols-2">
      <div className="grid h-full w-full place-content-center">
        <h1 className="mb-4 text-2xl font-bold">Welcome back!</h1>

        <p className="mb-8 font-thin text-slate-400">
          Please enter your credentials.
        </p>

        <form>
          <FormField>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" id="password" />
          </FormField>

          <Button className="mt-8 w-full" type="submit">
            Sign in
          </Button>
        </form>
      </div>

      <div>
        <Image
          src={LoginHero}
          alt="login hero"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
