import { ideaQueryOptons, Route } from "@/routes/Ideas/$ideaId";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

export default function IdeaDetailsPage() {
  const { ideaId } = Route.useParams();
  const { data } = useSuspenseQuery(ideaQueryOptons(ideaId));
  return (
    <div className="p-8 max-w-4xl justify-center items-center mx-auto">
      <div className="bg-gray-100 m-2 rounded-lg p-4 shadow-md">
      <Link to="/Ideas" className="text-blue-500 underline block cursor-pointer">
      Back to Ideas
      </Link>
        <h1 className="text-lg font-bold">{data.title}</h1>
        <p className="my-2 text-gray-500">{data.description}</p>
        </div>
    </div>
  )
}