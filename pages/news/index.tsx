export default function news({articles} : any) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <p>{article.id} - {article.title}</p>
        </div>
      ))}
    </div>
  );
}




export async function getServerSideProps() {

  // const { params ,req, res } = context

  const response = await fetch('http://localhost:3001/news')
  const data = await response.json()
  return {
    props: {
      articles : data
    },
  }
}