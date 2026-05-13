import Title from '../module/Title'
import ProjectCard from '../module/ProjectCard'

const Project = async () => {
  // 1. دریافت داده‌ها از API
  // نکته: در محیط Production، بهتر است از process.env.NEXT_PUBLIC_API_URL استفاده کنید
  const API_BASE_URL = 'http://localhost:8000'; 
  
  const res = await fetch(`${API_BASE_URL}/api/portfolios/`, {
    next: { revalidate: 0 } // برای اینکه داده‌ها همیشه تازه باشند
  })

  // 2. بررسی خطای شبکه
  if (!res.ok) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-red-500 text-xl">خطا در بارگذاری پروژه‌ها</h2>
      </section>
    )
  }

  // 3. تبدیل JSON به آبجکت جاوااسکریپت
  const data = await res.json()

  // 4. آماده‌سازی داده‌ها برای کامپوننت کارت
  // در این مرحله آدرس تصاویر را از حالت نسبی به حالت کامل تبدیل می‌کنیم
  const projects = data.map(item => {
    // بررسی می‌کنیم اگر آدرس با http شروع نشده بود، آدرس سرور را به ابتدای آن اضافه می‌کنیم
    const fullImageUrl = item.image && !item.image.startsWith('http')
      ? `${API_BASE_URL}${item.image}`
      : item.image;

    return {
      img: fullImageUrl, 
      title: item.title,
      // اگر url وجود نداشت، از id استفاده می‌کنیم تا slug حتماً ساخته شود
      slug: item.url || `project-${item.id}`, 
      desc: item.description,
      // تبدیل آرایه آبجکتِ تگ‌ها به آرایه‌ای از رشته‌ها (Strings)
      tag: item.tags ? item.tags.map(t => t.name) : [] 
    };
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* پس‌زمینه گرافیکی */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fb7185] to-[#f9a8d4] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto px-4">
        <Title 
          miniTitle="پروژه ها" 
          title="پروژه های تیم" 
          desc="لیست آخرین پروژه‌های انجام شده توسط تیم ما." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              img={project.img} 
              title={project.title} 
              slug={project.slug} 
              desc={project.desc} 
              tag={project.tag} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;