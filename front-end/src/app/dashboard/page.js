"use client";

import axios from "axios";
import React, { useState } from "react";

const TestPostComponent = () => {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const testPostRequest = async () => {
    // ساختار داده ارسالی
    const payload = {
      id: 123, // یک مقدار تستی برای id
      name: "پست تستی",
      slug: "test-post",
      body: "این یک متن تستی برای بررسی درخواست POST است.",
      image: "https://example.com/test-image.jpg",
      author_id: 1,
      category_id: 2,
    };

    setLoading(true);
    setResponseMessage(""); // پاک کردن پیام قبلی

    try {
      const response = await axios.post("http://nulldev.ir/api/admin/post", payload);
      console.log("Response Data:", response.data);
      if (response.data && response.data.status === "true") {
        setResponseMessage("پست با موفقیت ارسال شد!");
      } else {
        setResponseMessage("خطایی در ارسال داده رخ داده است.");
      }
    } catch (error) {
      console.error(
        "خطا در درخواست:",
        error.response ? JSON.stringify(error.response.data) : error.message
      );
      setResponseMessage(
        "خطا در ارسال داده: " + (error.response ? JSON.stringify(error.response.data) : error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">تست درخواست POST</h1>
      <button
        onClick={testPostRequest}
        className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "در حال ارسال..." : "ارسال درخواست"}
      </button>
      {responseMessage && (
        <div className="mt-4 text-lg font-medium">
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default TestPostComponent;
