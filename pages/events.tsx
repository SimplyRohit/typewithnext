import { useState } from "react";
import { useRouter } from "next/router";
import { isContext } from "vm";
export default function Events({ events }: any) {
  const [eventdata, setEventdata] = useState(events);
  const router = useRouter();
  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3001/events?category=Sports"
    );
    const data = await response.json();
    setEventdata(data);
    router.push("/events?category=Sports", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={handleClick}>Sports</button>
      <h1>Events</h1>
      <ul>
        {eventdata.map((event: any) => (
          <li key={event.id}>
            <p>{event.date}</p>
            <p>{event.category}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=Sports" : "";
  console.log(isContext);
  const response = await fetch(`http://localhost:3001/events?${queryString}`);
  const data = await response.json();
  console.log(data);
  return {
    props: {
      events: data,
    },
  };
}
