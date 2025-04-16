import Link from 'next/link';

export function BotCard({ bot }: { bot: { id: string; name: string; emoji: string; desc: string } }) {
  return (
    <Link href={`/bot/${bot.id}`}>
      <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition cursor-pointer">
        <h2 className="text-xl font-semibold">{bot.emoji} {bot.name}</h2>
        <p className="text-gray-600 mt-2">{bot.desc}</p>
      </div>
    </Link>
  );
}