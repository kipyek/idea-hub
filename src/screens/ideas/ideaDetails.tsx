import { ideaQueryOptons, Route } from "@/routes/Ideas/$ideaId";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function IdeaDetailsPage() {
    const {ideaId} = Route.useParams();
    const {data} = useSuspenseQuery(ideaQueryOptons(ideaId));
  return (
    <div>
      My idea number {data.description}
    </div>
  )
}