import React from 'react';
import { useRouter } from 'next/router';

export default function PortofolioProjectId() {
  const router = useRouter();
  const { projectId } = router.query;

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>{`Protofolio ${projectId}`}</h1>
    </div>
  );
}
