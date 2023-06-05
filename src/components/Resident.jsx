import axios from "axios"
import { useEffect, useState } from "react"


const Resident = ({residentUrl}) => {
  const [residentInfo, setResidentInfo] = useState(null)

  const statusStyles = {
    "Alive" : "bg-green-500",
    "Dead" : "bg-red-500",
    "unknown" : "bg-gray-400"
  }

  useEffect(() => {
    axios.get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
  }, [])


  return (
    <article>
      <div className="relative border-green-700 border-2">
        <img src={residentInfo?.image}alt="" />
        <div className="flex items-center gap-2 bg-black  border-green-700 border-2 opacity-60 px-8 absolute bottom-3 left-1/2 -translate-x-[50%]"> 
          <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
          {residentInfo?.status}
        </div>
      </div>
      <section className=" border-green-700 border-2 p-5">
        <h2 className="text-3xl">{residentInfo?.name}</h2>
        <ul className="grid gap-4 mt-5">
          <li> Species<span className="ml-14">{residentInfo?.species}</span>
          </li>
          <li> Origin<span className="ml-16">{residentInfo?.origin.name}</span>
          </li>
          <li> Times apper<span className="ml-6">{residentInfo?.episode.length}  time</span>
          </li>
        </ul>
      </section>
    </article>
  )

}
export default Resident