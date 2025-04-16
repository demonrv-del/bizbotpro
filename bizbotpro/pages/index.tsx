import { useState } from 'react';
import { BotCard } from '../components/BotCard';

export default function Dashboard() {
  const bots = [
    { id: 'sales', name: 'SalesBot', emoji: '👨‍💼', desc: 'Closes deals while you sleep.' },
    { id: 'support', name: 'SupportBot', emoji: '🎧', desc: 'Answers customer queries instantly.' },
    { id: 'admin', name: 'AdminBot', emoji: '📅', desc: 'Automates your admin tasks.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to BizBot Pro</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}