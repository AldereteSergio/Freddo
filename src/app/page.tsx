import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat - Zayka',
  description: 'Chat with the internet, chat with Zayka.',
};

const Home = () => {
  return <ChatWindow />;
};

export default Home;
