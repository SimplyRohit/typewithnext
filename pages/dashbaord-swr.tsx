import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("http://localhost:3001/dashboard");
  const data = await response.json();
  return data;
};

export default function Dashboard() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}
