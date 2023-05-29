'use client'

import { Button, FormField, FormInput, FormLabel } from '@calorie-tracker/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { User } from '@prisma/client'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

type ProfileFormProps = {
  user: Omit<User, 'uuid' | 'password'>
}

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
})

type ProfileFormValues = yup.InferType<typeof schema>

export const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
  const { register, handleSubmit } = useForm<ProfileFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    },
  })
  const [profilePicture, setProfilePicture] = React.useState<string | null>(
    user.image
  )

  const toBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })

  const onSubmit = (data: ProfileFormValues) => console.log(data)

  const handleProfilePictureChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    setProfilePicture(URL.createObjectURL(file))

    const formData = new FormData()
    const base64 = await toBase64(file)

    formData.append('image', base64 as string)

    const res = await fetch('/api/media', {
      method: 'POST',
      body: formData,
      headers: {
        'x-user-id': user.username,
      },
    })
    const url = await res.json()
    console.log(url)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel htmlFor="profile_picture">
          Profile picture
          <img
            className="h-32 w-32 rounded-full object-cover"
            src={profilePicture || ''}
            alt="Profile"
          />
        </FormLabel>
        <input
          onChange={handleProfilePictureChange}
          id="profile_picture"
          className="hidden"
          type="file"
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="first_name">First name</FormLabel>
        <FormInput id="first_name" type="text" {...register('first_name')} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="last_name">Last name</FormLabel>
        <FormInput id="last_name" type="text" {...register('last_name')} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput id="email" type="email" {...register('email')} />
      </FormField>

      <Button>Save Settings</Button>
    </form>
  )
}
