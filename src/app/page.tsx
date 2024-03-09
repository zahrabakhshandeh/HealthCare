import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <Link href={'/register/login'}>CLick to navigate login page</Link>
      </div>
    </main>
  );
}