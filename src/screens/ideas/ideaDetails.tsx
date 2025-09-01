import { Route } from "@/routes/Ideas/$ideaId";

export default function IdeaDetailsPage() {
    const {ideaId} = Route.useParams();
  return (
    <div>
      My idea number {ideaId}
    </div>
  )
}