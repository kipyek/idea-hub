import { fetchIdeas } from '@/lib/api/ideas'
import type { IdeasProps } from '@/screens/types/ideas'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HiLightBulb } from 'react-icons/hi'


const ideaQueryOption = () => queryOptions({
  queryKey: ['ideas'],
  queryFn: fetchIdeas
})

export const Route = createFileRoute('/')({
  component: App,
  loader: () => ideaQueryOption()
})

function App() {
  const { data } = useSuspenseQuery(ideaQueryOption())
  const latest = data.slice(0, 3)
  return (
    <div className='max-w-4xl mx-auto rounded-md bg-gray-200 mt-4 py-6 px-4'>
      <div
        className="flex flex-col md:flex-row items-start justify-between gap-10 p-6 text-blue-600"
      >
        <div className="flex flex-col items-start gap-4">
          <HiLightBulb className='w-16 h-16 text-yellow-400' />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to IdeaHub</h1>
          <p className="text-gray-600 max-w-xs">
            Share, explore, and build on the best startup ideas and side hustles.
          </p>
        </div>

        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Latest Ideas</h2>
          <ul className="space-y-6">
            {latest.map((idea: IdeasProps) => (
              <li key={idea.id} className="border border-gray-300 rounded-lg shadow p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-900">{idea.title}</h3>
                <p className="text-gray-600 mb-2">{idea.summary}</p>
                <Link to='/Ideas/$ideaId' params={{ ideaId: idea.id }} className="text-blue-600 hover:underline"> Read more → </Link>
              </li>
            ))}


          </ul>

          <div className="mt-6">
            <a
              href="/ideas"
              className="w-full text-center inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition"
            >
              View All Ideas
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
