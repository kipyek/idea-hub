import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/Ideas/new/',
)({
  component: CreateNewIdeaPage,
})

function CreateNewIdeaPage() {
  return (
    <div className={`p-2`}>
      <div className={`text-lg`}>Welcome to the Route Group Example!</div>
      <hr className={`my-2`} />
    </div>
  )
}