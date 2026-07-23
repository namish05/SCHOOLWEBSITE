import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-parchment-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
