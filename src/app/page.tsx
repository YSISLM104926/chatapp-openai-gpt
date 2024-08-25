'use client';
import { useChat } from "ai/react";
import image from '../assets/chatbot.png'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col justify-center h-screen w-1/2 mx-auto">
        <div className="mb-12">
          {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? '🙋🏻‍♂️USER: ' : '🤖MGRR: '}
              {m.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="relative">
              <input
                className="w-full bg-gray-800 text-white pl-10 pr-12 py-3 rounded-full border-none focus:ring-0 focus:outline-none"
                placeholder="Say something..."
                onChange={handleInputChange}
                value={input}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-gray-700 text-gray-400 p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 hover:rotate-45 hover:transition-all"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>s
    </div>
  );
}
