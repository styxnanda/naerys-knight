import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex bg-main-bg-image w-auto h-screen flex-col justify-center gap-3 border-none">
      <div className='flex flex-col justify-center gap-3 border-none bg-black bg-opacity-25 w-auto h-screen items-center'>
        <h1 className='text-7xl font-serif font-extrabold text-orange-200'>Naerys Knight</h1>
        <p className='text-2xl font-serif text-gray-100'>A Game of Thrones Character Viewer and AO3 Pairing Redirect</p>
        <div className='flex gap-4 pt-2'>
          <Link to='/characters'>
            <button type='button' className='bg-violet-400 text-center text-white font-semibold rounded-full px-6 py-2 hover:bg-violet-500'>Characters</button>
          </Link>
          <Link to='/peyrie'>
            <button type='button' className='bg-blue-500 text-center text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-600'>Pairing</button>
          </Link>
        </div>
      </div>
    </div>
  )
}