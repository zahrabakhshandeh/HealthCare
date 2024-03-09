import Link from 'next/link';
import LoginArt from '/public/login.svg'

export default function Home() {
  return (
    <main>
      <div>
        Health Care
        <Link href={'/register/login'}>CLick to navigate login page</Link>
      </div>
    </main>
  );
}