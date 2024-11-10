import React from "react";

function PostList({ posts, onPostSelect }) {
  return (
    <div className="bg-blue-900 text-white p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col md:flex-row p-4 border-b border-gray-600 cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-800 animate-fadeIn"
          onClick={() => onPostSelect(post)}
        >
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div className="w-20 h-20 ">
                <img
                  className="rounded-full object-contain w-full h-full"
                  src="https://media.licdn.com/dms/image/v2/D4D22AQHSQoMO0100bA/feedshare-shrink_1280/feedshare-shrink_1280/0/1721832332125?e=1733961600&v=beta&t=CQtp-IZHxFHH-xWZEsxtJS4TLtajG4tSFOL9UUIHfsI"
                  alt="User profile"
                />
              </div>
              <div className="ml-3">
                <p className="text-base leading-6 font-medium text-white">
                  User {post.userId}
                  <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                    {" "}
                    Youssef_Boshra . {new Date().toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>
          </a>
          <div className="pl-0 md:pl-16 mt-2 md:mt-0">
            <p className="text-sm md:text-base font-medium text-white">
              {post.title}
            </p>
            <p className="text-xs md:text-base font-medium text-gray-400">
              {post.body.slice(0, 100)}...
            </p>
            <div className="flex mt-2">
              <div className="flex-1 text-center py-1 md:py-2 m-1 md:m-2">
                <a
                  href="#"
                  className="group flex items-center text-gray-500 px-2 py-2 md:px-3 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-1 md:py-2 m-1 md:m-2">
                <a
                  href="#"
                  className="group flex items-center text-gray-500 px-2 py-2 md:px-3 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-1 md:py-2 m-1 md:m-2">
                <a
                  href="#"
                  className="group flex items-center text-gray-500 px-2 py-2 md:px-3 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center py-1 md:py-2 m-1 md:m-2">
                <a
                  href="#"
                  className="group flex items-center text-gray-500 px-2 py-2 md:px-3 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
