import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href='/portofolio'>Portofolio</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}
