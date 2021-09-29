import EventItem from './event-item';
import Styles from './event-list.module.css';

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={Styles.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          key={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
