import Link from 'next/link';
import LoginArt from '/public/login.svg'

export default function Home() {
  return (
    <main>
      <div>
        Health Care
        <Link  href={'/register/login/'} >Click Here for login Page</Link>
      </div>
    </main>
  );
}