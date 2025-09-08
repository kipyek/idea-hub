import { createFileRoute } from '@tanstack/react-router'
import { queryOptions } from '@tanstack/react-query'
import IdeasPage from '@/screens/ideas/ideas'
import { fetchIdeas } from '@/lib/api/ideas'



export const ideaQueryOptons = () => queryOptions({
    queryKey:['idea'],
    queryFn: fetchIdeas
})

export const Route = createFileRoute('/Ideas/')({
  component: IdeasPage,
  loader: ({context: {queryClient}})=> queryClient.ensureQueryData(ideaQueryOptons())
})


