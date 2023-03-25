import NewsSection from "@/components/newssection"
import HomeContainer from "@/containers/home"
import { articles } from "@/mocks/articles"

// const apiKey = '52fca6be30704b03bc0b0f0cd9555a1c'
// const fetchData = async () => {
//   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
//   const data = await res.json()
//   console.log(data.articles)
// }


//dont forget to make this function async after fetching your shit

export default function Home() {
  // await fetchData()
  return (
    <main>
      {/* {articles.map((article)=>{
        return <h1>{article.author}</h1>
      })} */}
      <HomeContainer />
    </main>
  )
}