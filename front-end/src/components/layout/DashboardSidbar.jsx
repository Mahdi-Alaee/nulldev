import { HiOutlineUserCircle } from "react-icons/hi";
import Link from "next/link";

const DashboardSidbar = async ({children}) => {
  return (
    <div className="flex w-full justify-between lg:flex-row flex-col gap-5 ">
        <div className="h-max lg:w-1/5 w-full flex flex-col justify-center items-center p-5 rounded-lg shadow-[0_4px_15px_#f43f5d40]">
        <HiOutlineUserCircle  size={50} className="text-rose-500 mb-3"/>
        <span className="h-[1px] mb-5 w-full bg-black/20"></span>
        <div className="flex flex-col gap-2 lg:items-start w-full items-center">
            <Link href="/dashboard">حساب کاربری</Link>
            <Link href="/dashboard/services">سرویس ها</Link>
            <Link href="/dashboard/posts">مقالات</Link>
            <Link href="/dashboard/project">پروژه ها</Link>
            <Link href="/dashboard/contact">تماس با ما</Link>
            <Link href="/dashboard/about"> درباره ما</Link>

        </div>
        </div>
        <div className="lg:w-4/5 w-full">
            {children}
        </div>
    </div>
  )
}

export default DashboardSidbar