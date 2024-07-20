export default function newsid({article} : any) {
  return (
   <>
   <h1>   newsid  </h1> 

   <p>{article.id} - {article.title}</p>

   
   </>
  );
}


export async function getServerSideProps(context : any) {
const {params} = context 
const {newsid} = params
const response = await fetch(`http://localhost:3001/news/${newsid}`)
const data = await response.json()

return {
  props: {
    article : data
  },
}
}