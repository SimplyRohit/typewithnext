import { useState, useEffect } from "react";

interface DashboardData {
  id: number;
  name: string;
  age: number;
}

export default function Dashboard() {
  const [isloading, setIsloading] = useState(true);
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3001/dashboard");
      const data = await response.json();
      setDashboard(data);
      setIsloading(false);
    }
    fetchData();
  }, []);

  if (isloading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Name: {dashboard!.name}</p>
      <p>Age: {dashboard!.age}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3001/dashboard");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      dashboard: data,
    },
  };
}
