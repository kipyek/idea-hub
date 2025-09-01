import IdeaDetailsPage from '@/screens/ideas/ideaDetails'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: async({params})=>{
    return params.ideaId
  }
})


