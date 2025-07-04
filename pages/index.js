import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 flex flex-col items-center">
      <header className="w-full shadow-md bg-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">SavvyLane 🌍</h1>
          <nav className="space-x-4 text-sm">
            <Link href="/" className="hover:underline text-gray-700">Home</Link>
            <Link href="/bible-verse" className="hover:underline text-blue-600">Bible Verse</Link>
            <Link href="/cv-tools" className="hover:underline text-blue-600">CV Tools</Link>
          </nav>
        </div>
      </header>

      <section className="w-full max-w-3xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Top Tools to Level Up Your Life 💼</h2>
        <p className="text-center mb-8 text-gray-600">Explore our hand-picked tools to help you write better, design easier, shop smarter, and grow faster.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <ToolCard name="Grammarly" desc="Write with confidence." url="https://www.grammarly.com/" color="blue" />
          <ToolCard name="Canva" desc="Design anything beautifully." url="https://www.canva.com/" color="green" />
          <ToolCard name="Temu" desc="Discover viral gadgets & gifts." url="https://www.temu.com/" color="yellow" />
          <ToolCard name="TypingClub" desc="Improve your typing for free." url="https://www.typingclub.com/" color="purple" />
        </div>
      </section>
    </main>
  );
}

function ToolCard({ name, desc, url, color }) {
  const bg = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    yellow: 'bg-yellow-50',
    purple: 'bg-purple-50'
  }[color];

  const text = {
    blue: 'text-blue-700',
    green: 'text-green-700',
    yellow: 'text-yellow-700',
    purple: 'text-purple-700'
  }[color];

  const button = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
    purple: 'bg-purple-600 hover:bg-purple-700'
  }[color];

  return (
    <div className={`${bg} p-6 rounded-xl shadow-md flex flex-col justify-between`}>
      <div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
      <a href={url} target="_blank" className={`mt-4 inline-block ${button} text-white px-4 py-2 rounded`}>Try {name}</a>
    </div>
  );
}
