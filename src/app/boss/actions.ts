'use server'

import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function loginAdmin(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (email === 'Info@una-reinigungen.ch' && password === 'aaaqqq111') {
    const cookieStore = await cookies()
    cookieStore.set('admin_token', 'secure_una_admin_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    return { success: true }
  }
  
  return { error: 'Invalid credentials' }
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_token')
  revalidatePath('/boss')
}

export async function updateLeadStatus(id: string, newStatus: string) {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  if (token !== 'secure_una_admin_token') throw new Error('Unauthorized')

  await prisma.lead.update({
    where: { id },
    data: { status: newStatus }
  })
  
  revalidatePath('/boss')
}
