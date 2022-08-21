// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [isLoaded, setIsLoaded]= useState(null)
    const [dogPic, setDogPic] = useState([])
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r=>r.json())
    .then(r=>{
        setDogPic(r.message)
        setIsLoaded(true)
})}, [])

    if (!isLoaded) return <p>Loading...</p>;
    return <img src={dogPic} alt="A Random Dog" />
}
export default App