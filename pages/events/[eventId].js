import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistic';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from '../../helpers/api-util';
import Head from 'next/head';
import Comments from '../../components/input/comments';

export default function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <>
        <div className='center'>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30, //30s
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
