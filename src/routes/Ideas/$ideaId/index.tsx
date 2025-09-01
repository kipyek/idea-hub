import IdeaDetailsPage from '@/screens/ideas/ideaDetails'
import { createFileRoute } from '@tanstack/react-router'
import api from '@/lib/axios'
import { queryOptions } from '@tanstack/react-query'

const fetchIdeas = async(ideaId:string) => {
    const res = await api.get(`/ideas/${ideaId}`)
    return res.data
}

export const ideaQueryOptons = (ideaId:string) => queryOptions({
    queryKey:['idea', ideaId],
    queryFn: () => fetchIdeas(ideaId)
})

export const Route = createFileRoute('/Ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: ({params, context: {queryClient}})=> queryClient.ensureQueryData(ideaQueryOptons(params.ideaId))
})


