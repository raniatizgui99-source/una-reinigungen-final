import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import LoginForm from './LoginForm'
import PipelineUI from './PipelineUI'

export const dynamic = 'force-dynamic';

export default async function BossDashboard() {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value

  if (token !== 'secure_una_admin_token') {
    return <LoginForm />
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return <PipelineUI initialLeads={leads} />
}
