import { ideaQueryOptons } from "@/routes/Ideas";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { IdeasProps } from "../types/ideas";
import { Link } from "@tanstack/react-router";

export default function IdeasPage() {
  const { data } = useSuspenseQuery(ideaQueryOptons());
  console.log('data is being processed', data)
  return (
    <div className='max-w-4xl mx-auto rounded-md bg-gray-200 mt-4 py-6 px-4'>
      <div className="grid  sm:grid-cols-3 max-w-4xl mx-auto">
         {data.map((item: IdeasProps) => (
          <Link to='/Ideas/$ideaId' params={{ideaId:item.id}} className="gap-4 bg-white m-2 rounded-lg p-4 shadow-md">
        <h1 className="text-lg font-bold">{item.title}</h1>
        <p className="my-2 text-gray-500">{item.summary}</p>
        </Link>
      ))}
      </div>
     

    </div>
  )
}