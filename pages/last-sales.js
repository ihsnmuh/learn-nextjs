import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const { data, error } = useSWR(
  //   'https://nextjs-learn-8ad33-default-rtdb.firebaseio.com/sales.json'
  // );

  // useEffect(() => {
  //   console.log(data);
  //   if (data) {
  //     const transformSales = [];

  //     for (const key in data) {
  //       transformSales.push({
  //         id: key,
  //         userName: data[key].userName,
  //         volume: data[key].volume,
  //       });
  //     }
  //     setSales(transformSales);
  //   }
  // }, [data]);

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
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [sales]);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!sales || isLoading) {
    return <p>Loading...</p>;
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

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-learn-8ad33-default-rtdb.firebaseio.com/sales.json'
  );
  const data = await response.json();

  const transformSales = [];

  for (const key in data) {
    transformSales.push({
      id: key,
      userName: data[key].userName,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformSales,
    },
  };
}
