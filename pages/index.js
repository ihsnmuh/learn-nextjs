import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function Home(props) {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
