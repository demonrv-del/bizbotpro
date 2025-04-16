import { useState } from 'react';

export function ChatBox({ botId }: { botId: string }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    setMessages(prev => [...prev, `You: ${input}`, `${botId}Bot: (Pretend response)`]);
    setInput('');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow max-w-2xl mx-auto">
      <div className="h-64 overflow-y-auto border-b mb-4">
        {messages.map((msg, idx) => (
          <p key={idx} className="text-sm my-1">{msg}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border px-3 py-2 rounded-md"
        />
        <button onClick={sendMessage} className="bg-black text-white px-4 py-2 rounded-md">Send</button>
      </div>
    </div>
  );
}