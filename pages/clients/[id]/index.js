import { useRouter } from 'next/router';

export default function ClientPageDetail() {
  const router = useRouter();

  const { id } = router.query;

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[projectId]',
      query: {
        id: id,
        projectId: 'Note-project',
      },
    });
  }

  return (
    <div>
      <h1>{`Client ${id} Detail Page`}</h1>
      <button onClick={loadProjectHandler}>Project 1</button>
    </div>
  );
}
