import { useRouter } from 'next/router';
import { ChatBox } from '../../components/ChatBox';

export default function BotChatPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chatting with {id} Bot</h1>
      <ChatBox botId={id as string} />
    </div>
  );
}