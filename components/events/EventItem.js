import Link from 'next/link';
import styles from './EventItem.module.css';

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const dateHandle = new Date(date).toLocaleDateString('en-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const explorerLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title}></img>
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{dateHandle}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={explorerLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
