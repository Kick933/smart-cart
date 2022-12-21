import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen gap-4 justify-center items-center'>
      <h1 className='font-extrabold flex gap-4 break-keep text-3xl mb-4 text-indigo-400'><span>Welcome to</span><Link href='/' className='text-indigo-500 underline-offset-2 hover:scale-110 transition-transform decoration-double decoration-2 underline decoration'>Smart-Cart</Link></h1>
      <span className='w-screen flex flex-col md:flex-row items-center justify-center gap-8'>
        <Link className='bg-indigo-300 hover:shadow-xl hover:border border-indigo-600 hover:scale-110 transition-transform w-24 h-12 rounded-xl shadow-xl flex justify-center items-center' href='/sell'>Sell</Link>
        <Link className='bg-indigo-300 hover:shadow-xl hover:border border-indigo-600 hover:scale-110 transition-transform w-24 h-12 rounded-xl shadow-xl flex justify-center items-center' href='/buy'>Buy</Link>
      </span>
    </div>
  )
}
