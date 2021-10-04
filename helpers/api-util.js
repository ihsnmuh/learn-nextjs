export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-learn-8ad33-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
