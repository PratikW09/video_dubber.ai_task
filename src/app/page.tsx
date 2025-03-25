'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-5">
    <h1 className="text-4xl font-extrabold text-blue-600 mb-5">
      🎨 Discord Text Generator
    </h1>
    <p className="text-lg text-gray-700 mb-4">
      Create colorful text for Discord with ease!
    </p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Get Started
    </button>
  </div>
  );
}
