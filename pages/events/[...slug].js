import { useRouter } from 'next/dist/client/router';
import React from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { getFilteredEvents } from '../../helpers/api-util';

export default function FilteredEventPage(props) {
  const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className='center'>Loading..</p>;
  // }

  // const filteredYear = +filterData[0];
  // const filteredMonth = +filterData[1];

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Event</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className='center'>No events found for your filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Event</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}
