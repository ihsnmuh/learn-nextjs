import { useRouter } from 'next/dist/client/router';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistic';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { getEventById } from '../../dummy-data';

export default function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No Event Found</p>;
        </ErrorAlert>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
