import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../helpers/api-util';
import EventsSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

export default function AllEventsPage(props) {
  const router = useRouter();

  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
  };
}
