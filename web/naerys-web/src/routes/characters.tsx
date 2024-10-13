import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters')({
  component: Characters,
})

function Characters(){
  return (
    <div>This is All Characters Viewer</div>
  )
}