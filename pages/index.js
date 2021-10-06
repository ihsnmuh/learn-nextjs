import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-util';
import Head from 'next/head';
import NewsletterRegistration from '../components/input/newsletter-registration';

export default function Home(props) {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>Next JS Event</title>
        <meta
          name='description'
          content='ini adalah isi dari desctiption metatext page....'
        />
      </Head>
      <NewsletterRegistration />
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
    revalidate: 1800, //generate page setiap 30 mnt
  };
}
