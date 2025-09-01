import IdeaDetailsPage from '@/screens/ideas/ideaDetails'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: async({params})=>{
    const res = await fetch(`/api/ideas/${params.ideaId}`)

    if(!res.ok) throw new Error("Failed to fetch ideas")

    return res.json()
  }
})


