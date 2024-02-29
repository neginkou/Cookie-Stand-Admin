import Link from 'next/link';
import Footer from "@/components/Footer";


export default function Overview(){
  return (
    <>
    <header className="flex items-center justify-between h-12 pt-8 pb-8 pl-4 text-4xl font-semibold bg-green-500">
    <h1>Cookie Stand Admin</h1>
    <Link href='/' className='px-2 mx-4 text-base bg-white rounded-md'>Home</Link>
    </header>
    <Footer />
    </>
   
  )
}