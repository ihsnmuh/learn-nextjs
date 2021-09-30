import { useEffect, useState } from 'react';

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://nextjs-learn-8ad33-default-rtdb.firebaseio.com/sales.json')
      .then((resp) => resp.json())
      .then((data) => {
        const transformSales = [];

        for (const key in data) {
          transformSales.push({
            id: key,
            userName: data[key].userName,
            volume: data[key].volume,
          });
        }
        setSales(transformSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.userName} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}
