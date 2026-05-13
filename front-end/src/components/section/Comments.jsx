import React from "react";
import Title from "../module/Title";
import CommentCard from "../module/CommentCard";

// تابعی برای دریافت نظرات از API
async function getComments() {
  // از API Route یا مستقیم از بک‌اند در این قسمت داده‌ها را دریافت می‌کنیم
  // اگر از API Routes در Next.js استفاده می‌کنید، URL به این شکل خواهد بود:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/customercomments/`);
  // اما چون قبلاً تنظیمات rewrites را برای http://127.0.0.1:8000 انجام دادیم، می‌توانیم مستقیماً از آن استفاده کنیم:
  const res = await fetch("http://127.0.0.1:8000/api/customercomments/" , {
     next: { revalidate: 0 } // برای اینکه داده‌ها همیشه تازه باشند (هر بار رفرش شوند)
  });

  if (!res.ok) {
    // در سمت سرور، بهتر است خطا را لاگ کنیم یا یک وضعیت خطا را برگردانیم
    // پرتاب کردن خطا در SSR می‌تواند کل صفحه را خراب کند، مگر اینکه با error boundaries مدیریت شود.
    console.error(`خطا در دریافت نظرات از API: ${res.status} ${res.statusText}`);
    return []; // در صورت خطا، آرایه خالی برمی‌گردانیم تا صفحه خراب نشود
  }

  return res.json();
}

// کامپوننت اصلی که داده‌ها را دریافت و رندر می‌کند
const Comments = async () => {
  const comments = await getComments(); // داده‌ها را مستقیماً اینجا دریافت می‌کنیم

  // اگر هیچ کامنتی دریافت نشد یا خطا رخ داد، می‌توانیم یک پیام نمایش دهیم
  if (comments.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <Title
            miniTitle="نظرات مشتریان"
            title="از زبان مشتریان بشنوید"
            desc="تیم نال با تجربه ی بالا و با کمک نیرو های کارآمد، جوان و خلاق 24 ساعته به صورت شبانه روزی در حال خدمات رسانی به مشتریان عزیز است. با استفاده از تخصص ما در زمینه طراحی سایت، میتوانید یک وبسایت حرفه ای و کارآمد را برای کسب و کار خود ایجاد کنید"
          />
          <p className="text-center text-gray-500">نظری برای نمایش وجود ندارد.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <Title
          miniTitle="نظرات مشتریان"
          title="از زبان مشتریان بشنوید"
          desc="تیم نال با تجربه ی بالا و با کمک نیرو های کارآمد، جوان و خلاق 24 ساعته به صورت شبانه روزی در حال خدمات رسانی به مشتریان عزیز است. با استفاده از تخصص ما در زمینه طراحی سایت، میتوانید یک وبسایت حرفه ای و کارآمد را برای کسب و کار خود ایجاد کنید"
        />
        {/* دیگر نیازی به نمایش وضعیت loading و error نیست چون داده‌ها قبل از رندر دریافت شده‌اند */}
        <div
          className="flex items-center gap-x-5 overflow-x-auto hide-scrollbar w-full mt-10"
        >
          {comments.map((comment) => (
            <CommentCard
              key={comment.id}
              name={comment.author}
              job={comment.role}
              messages={comment.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
