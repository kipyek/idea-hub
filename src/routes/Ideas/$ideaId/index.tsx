import IdeaDetailsPage from '@/screens/ideas/ideaDetails'
import { createFileRoute } from '@tanstack/react-router'
import { queryOptions } from '@tanstack/react-query'
import { fetchIdea } from '@/lib/api/ideas'



export const ideaQueryOptons = (ideaId:string) => queryOptions({
    queryKey:['idea', ideaId],
    queryFn: () => fetchIdea(ideaId)
})

export const Route = createFileRoute('/Ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: ({params, context: {queryClient}})=> queryClient.ensureQueryData(ideaQueryOptons(params.ideaId))
})


