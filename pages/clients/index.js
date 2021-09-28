import Link from 'next/link';

export default function ClientPage() {
  const clients = [
    { id: 'bambang', name: 'Bambang' },
    { id: 'ucok', name: 'Ucok' },
  ];

  return (
    <div>
      <h1>Clients List Page</h1>
      <ul>
        {clients.map((client, idx) => (
          <li key={idx}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: {
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
