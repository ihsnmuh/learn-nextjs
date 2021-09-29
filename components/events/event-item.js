import Link from 'next/link';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/button';
import styles from './event-item.module.css';

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
            <DateIcon />
            <time>{dateHandle}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={explorerLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
