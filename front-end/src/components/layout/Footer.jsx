import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center p-5 my-5  bg-rose-500 rounded-2xl text-white  gap-5">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold ">تیم برنامه نویسی نال | Developer Null Team</h2>
        <p className="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
      </div>
      <ul className="flex justify-between items-center gap-5">
      <li><Link href="/">خانه</Link></li>
          <li><Link href="/blog">وبلاگ</Link></li>
          <li><Link href="/project">پروژه ها</Link></li>
          <li><Link href="/team">تیم ما</Link></li>
          <li><Link href="/about">درباره ما</Link></li>
          <li><Link href="/contact">تماس با ما</Link></li>
      </ul>
    </footer>
  )
}

export default Footer