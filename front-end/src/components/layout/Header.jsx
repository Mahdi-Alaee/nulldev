"use client"
import Link from "next/link";
import { useState } from "react";
import { HiOutlineLogin, HiOutlineUserCircle } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Header = () => {
  const [isOpen, setIsopen] = useState(false)

  return (
    <>
      <header className="sticky top-0.5 shadow-xl z-50 flex justify-between items-center p-5 my-5 bg-rose-500 rounded-2xl text-white">
        <h1 className="text-xl font-semibold"><Link href="/">NullDev | تیم نال</Link></h1>
        <ul className={`items-center gap-4 hidden lg:flex`}>
          <li><Link href="/">خانه</Link></li>
          <li><Link href="/blog">وبلاگ</Link></li>
          <li><Link href="/project">پروژه ها</Link></li>
          <li><Link href="/team">تیم ما</Link></li>
          <li><Link href="/about">درباره ما</Link></li>
          <li><Link href="/contact">تماس با ما</Link></li>
        </ul>


        <div className="flex items-center gap-2">
        
            <Link href="/" className="flex items-center gap-2 bg-white py-1 px-4 rounded-lg text-rose-500 group">
              مشاوره رایگان
            </Link>
        
          
    
          <button className="lg:hidden block" onClick={() => setIsopen(!isOpen)}><HiMenuAlt1 size={24} /></button>
        </div>


      </header>
      <ul className={`lg:hidden transition-all p-4 flex-col fixed inset-0 w-full h-full z-10 flex items-center gap-3 py-5  bg-white ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>

        <button onClick={() => setIsopen(false)} className="self-start" >
          <AiOutlineCloseCircle size={20} />
        </button>

        <li><Link href="/">خانه</Link></li>
        <li><Link href="/blog">وبلاگ</Link></li>
        <li><Link href="/project">پروژه ها</Link></li>
        <li><Link href="/team">تیم ما</Link></li>
        <li><Link href="/about">درباره ما</Link></li>
        <li><Link href="/contact">تماس با ما</Link></li>

      </ul>
    </>
  );
};


export default Header;