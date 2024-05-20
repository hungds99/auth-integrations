
import Admin from '@/components/admin';
import { auth, clerkClient } from '@clerk/nextjs/server';

export default async function Dashboard() {
  const { userId } = auth().protect();
  const user = await clerkClient.users.getUser(userId);
  if (!user) return null;

  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Admin />
    </div>
  );
}
