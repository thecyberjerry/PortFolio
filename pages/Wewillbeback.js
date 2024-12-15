import React from "react";

export default function Wewillbeback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          Hold tight! 🚧
        </h1>
        <p className="text-xl text-gray-700">
          I'm currently doing some sugar-sweet updates and changes.
        </p>
        <p className="text-md text-gray-500">
          I'll be right back, making everything better!
        </p>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-sm text-gray-400">Thank you for your patience!</p>
      </div>
    </div>
  );
}
