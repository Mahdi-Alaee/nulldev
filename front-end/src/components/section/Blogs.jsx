"use client";

import React, { useState } from 'react';
import Title from '../module/Title';
import BlogCart from '../module/BlogCart';

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {
          "id": "1",
          "img": "",
          "date": "10th Oct 2022",
          "slug": "test",
          "title": "طراحی سایت خدماتی چه مزایایی دارد؟",
          "desc": "طراحی سایت خدماتی چه مزایایی دارد؟|در این مقاله درباره مزایای طراحی سایت خدماتی صحبت میکنیم که یکی از بهترین گزینه هاست",
          "categoryId": 1
        },
        {
          "id": "2",
          "img": "",
          "date": "10th Oct 2022",
          "slug": "test",
          "title": "طراحی سایت خدماتی چه مزایایی دارد؟",
          "desc": "طراحی سایت خدماتی چه مزایایی دارد؟|در این مقاله درباره مزایای طراحی سایت خدماتی صحبت میکنیم که یکی از بهترین گزینه هاست",
          "categoryId": 2
        },       
      ]);



    return (
        <section className="py-20">
            <div className="mx-auto">
                <Title
                    miniTitle="بلاگ"
                    title="مطالب مفیدی بخوانید"
                    desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
                />
                <div className="justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 grid lg:grid-cols-3 md:grid-cols-2 lg:justify-between lg:gap-x-8">
                    {blogs.map((blog) => (
                        <BlogCart key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
