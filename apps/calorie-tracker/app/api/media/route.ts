import cloudinary from 'cloudinary'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get('image') as string | null

  if (!image) {
    return NextResponse.json('No image provided', {
      status: 400,
    })
  }

  // Save the image to a database or file system
  cloudinary.v2.config({
    cloud_name: process.env['CLOUDINARY_CLOUD_NAME'],
    api_key: process.env['CLOUDINARY_API_KEY'],
    api_secret: process.env['CLOUDINARY_API_SECRET'],
  })

  const { secure_url } = await cloudinary.v2.uploader.upload(image, {
    folder: `users/${req.headers.get('x-user-id')}`,
    chunk_size: 6000000,
  })

  return NextResponse.json({ secure_url })
}
