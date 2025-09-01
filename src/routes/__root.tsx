import { HeadContent, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'
import { QueryClient } from '@tanstack/react-query'

type RouterContextProps = {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContextProps>()({
  head: () => ({
    meta:[
      {
        name:'description',
        content:'Give idea.Process it.Practice it.Action it.'
      },
      {
        title:'IdeaHub - Leap to life'
      }
    ]
  }),
  component: () => (
    <>
    <HeadContent/>
      <Outlet />
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Dev',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
