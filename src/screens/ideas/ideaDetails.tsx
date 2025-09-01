import { Route } from "@/routes/Ideas/$ideaId";

export default function IdeaDetailsPage() {
    const {title} = Route.useLoaderData();
    console.log(title)
  return (
    <div>
      My idea number {title}
    </div>
  )
}