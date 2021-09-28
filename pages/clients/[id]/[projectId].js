import { useRouter } from 'next/router';

export default function ProjectClientPage() {
  const router = useRouter();

  const { id, projectId } = router.query;

  return (
    <div>
      <h1>{`Project ${projectId} dari client ${id}`}</h1>
    </div>
  );
}
