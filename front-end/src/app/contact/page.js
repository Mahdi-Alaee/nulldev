"use client"
import Title from "@/components/module/Title";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex gap-5 flex-col md:flex-row items-start justify-center ">
      {/* بخش سمت چپ */}
      <div className="space-y-6 w-full md:w-auto">
        <div className="bg-rose-500 text-white rounded-lg shadow-md p-6 md:w-80 w-full">
          <p className="text-sm mb-2">تماس مستقیم با ما</p>
          <h3 className="text-2xl font-medium mb-4">021 6532 5324</h3>
          <button className="w-full bg-rose-700 text-white py-2 rounded-md">
            تماس با ما
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-6 md:w-80 w-full">
          <p className="text-sm mb-2">گفتگو با تیم ما</p>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            email@pagedone.com
          </h3>
          <button className="w-full bg-gray-200 text-gray-900 py-2 rounded-md">
            گفتگو کنید
          </button>
        </div>
      </div>

      {/* فرم سمت راست */}
      <div className="bg-white shadow-lg rounded-lg  mt-8  flex-1 w-full">
       <Title miniTitle="تماس با ما" title="تماس با ما" desc="لطفا پیام خود را ارسال کنید. تیم ما آماده پاسخگویی به شماست."/>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div className="flex justify-between gap-2 lg:flex-row flex-col">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ایمیل"
              className="lg:w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="شماره تلفن"
              className="lg:w-1/2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="پیام خود را بنویسید..."
              rows="5"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            ارسال پیام
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
