import { createFileRoute } from '@tanstack/react-router'
import { AdmissionsPage } from '../pages/AdmissionsPage'

export const Route = createFileRoute('/admissions')({
  component: AdmissionsPage,
})
