import React from "react";

// props: name, job, messages
const CommentCard = ({ name, job, messages }) => {
  return (
    <blockquote className="border border-black/15 rounded-lg shadow-lg flex-shrink-0 w-full sm:w-96 h-56 p-6 bg-white mx-2 my-4 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <p className="text-gray-700 mt-0.5">{job}</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700  leading-relaxed overflow-hidden">
        {messages}
      </p>
    </blockquote>
  );
};

export default CommentCard;
