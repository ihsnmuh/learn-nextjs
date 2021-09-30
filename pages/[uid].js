export default function UserIdpage(props) {
  return <h1>{props.id}</h1>;
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
