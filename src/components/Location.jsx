import axios from "axios"

const Location = ({ location, setLocation }) => { 
    
    const handleSumit = (e) => {
        e.preventDefault()
        const newLocation = e.target.newLocation.value

        const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
  
        axios.get(URL)
          .then(({data}) => setLocation(data))
          .catch((err) => console.log(err))
    }

    return (
        <section>
            <div className="relative">
                <div className="grid gap-8 grid-cols justify-center max-w mx-auto  ">
                  <img className="animate-ping" src="./images/portal.png" alt="" />
                  <img className="absolute top-1/3 left-1/2 -translate-x-[50%]" src="./images/logo.png" alt="" />
                </div>
            </div>

            <form className="p-12 flex justify-center " onSubmit={handleSumit}>
                <input id="newLocation" className="  border-green-700 border-2 bg-black text-white flex" placeholder="type a location Id ..." type="text" />
                <button className=" border-green-700 border-2 bg-green-500 p-2">Search<i className='bx bx-search'></i></button>
            </form>

            <section className="bg-black opacity-70 ml-3 mr-3 text-center text-lg p-10 ">
                <h2>{location?.name}</h2>
                <ul className="grid gap-2 grid-cols-3 justify-center max-w mx-auto py-6">
                    <li>type: {location?.type}</li>
                    <li>dimension: {location?.dimension}</li>
                    <li>poputation: {location?.residents.length}</li>
                </ul>
            </section>
        </section>
    )
}
export default Location