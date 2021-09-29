import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/event-search';
import { useRouter } from 'next/dist/client/router';

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

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
