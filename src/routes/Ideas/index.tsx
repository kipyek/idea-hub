import IdeasPage from '@/screens/ideas/ideas'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Ideas/')({
  component: IdeasPage,
})


