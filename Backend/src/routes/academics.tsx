import { createFileRoute } from '@tanstack/react-router'
import { AcademicsPage } from '../pages/AcademicsPage'

export const Route = createFileRoute('/academics')({
  component: AcademicsPage,
})
