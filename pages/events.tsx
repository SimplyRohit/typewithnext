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
    <div className=" justify-center items-center h-screen" style={{ backgroundColor: '#886263' }} >
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4" >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleClick}>Sports</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEventdata(events)}>All</button>
      <h1 className="text-2xl font-bold text-center" >Events</h1>
      <ul className="space-y-2" >
        {eventdata.slice(0 , 7).map((event: any) => (
          <li className="bg-gray-100 p-3 rounded-md" key={event.id}>
            <p className="font-semibold">{event.date}</p>
            <p className="font-semibold">{event.category}</p>
            <p className="font-semibold">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
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
