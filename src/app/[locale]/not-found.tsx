import { Link } from "@/i18n/routing"
import Image from "next/image"
import bearLogo from '../../../public/bear-logo.png'

const NotFound = () => {
 return (
  <section className="h-full w-full max-w-[1240px] mx-auto px-3 md:px-5 py-10 flex flex-col items-center justify-center">
   <h2 className="text-2xl">Ne možemo naći stranicu koju tražite.</h2>
   <p>
    Vratite se na{" "}
    <Link
     className="text-red-400 bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-600 dark:hover:bg-zinc-700 px-2 rounded-md"
     href={"/"}
    >
     početnu{" "}
    </Link>{" "}
    stranu.
   </p>
   <div className=" mt-5 relative max-w-[200px] w-full z-10 h-[180px]">
    <Image
     src={bearLogo}
     alt="Company Logo"
     fill
     sizes="(max-width:200px) 100vw"
     className="object-cover z-10"
    />
   </div>
  </section>
 )
}
export default NotFound