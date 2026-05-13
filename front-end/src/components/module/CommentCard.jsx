import React from "react";

const CommentCard = ({ img, name, job, messages }) => {
  return (
    <blockquote className="rounded-lg shadow-sm flex-shrink-0 w-full lg:w-1/2 p-4">
      <div className="flex items-center gap-3">
        <img
          alt={name}
          src={img}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-gray-700 mt-0.5">{job}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 text-center lg:text-start">
        {messages}
      </p>
    </blockquote>
  );
};

export default CommentCard;
