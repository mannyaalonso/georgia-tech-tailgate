import hero2 from "../assets/images/hero2.jpg"
import hero3 from "../assets/images/hero3.jpg"
import { useParams } from "react-router-dom"
import Hero from "../components/Hero"

const Result = () => {
  const { id } = useParams()

  return id === "success" ? (
    <div>
      <Hero title={"YOUR FORM WAS RECIEVED!"} image={hero2} />
    </div>
  ) : (
    <div>
      <Hero title={"Sorry, we ran into an error"} image={hero3} />
    </div>
  )
}

export default Result
