import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from './Thunk';

const Home = () => {

const dispatch = useDispatch()
const data = useSelector(state => state.Animal.fetchData)
console.log(data)

useEffect(() => {
   dispatch(fetchData())
}, [dispatch])

const recordFields = data.map((fields) => {
    return(
        <div >
            <img src={fields} alt={fields} width="150" height="200" />
        </div>
    )
})
    return (
        <div>
        <h1>Hello Home</h1>

        <div >  
        {recordFields}
        </div>
        </div>
    )
}

export default Home
