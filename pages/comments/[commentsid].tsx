import { comments } from "@/data/comments";
export default function commentsid({ comment }: any) {
  return (
    <>
      <h1>{comment.id} </h1>
      <h1>{comment.name}</h1>
      <h1>{comment.comment}</h1>
    </>
  );
}

export async function getStaticPaths() {
  const paths = comments.map((comment) => ({
    params: { commentsid: comment.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { commentsid } = params;
  const comment = comments.find((comment) => comment.id === Number(commentsid));
  return {
    props: {
      comment,
    },
  };
}
