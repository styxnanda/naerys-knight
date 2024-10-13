import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/peyrie')({
  component: Peyrie,
})

function Peyrie(){
  return (
    <div>This is the pairing feature component</div>
  )
}