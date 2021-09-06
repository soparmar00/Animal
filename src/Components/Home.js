import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterData } from './Thunk';

const Home = () => {

const dispatch = useDispatch()
const data = useSelector(state => state.Animal.fetchData)

const [filter, setFilter] = useState({ record: '', img: '', category: '' })

useEffect(() => {
   dispatch(fetchData())
}, [dispatch])

const handleChange = (e) => {
const { name, value } = e.target;
setFilter({ ...filter, [name]: value })
}

const handleFilterSubmit = (e) => {
e.preventDefault()
    console.log(filter.record, filter.category, filter.img)
dispatch(filterData(filter))
}

const recordFields = data.map((fields) => {
    return(
        < div >
        <img src={fields} alt={fields} width="150" height="200" />
        </div >

    )
})

    return (
    <div>
    <h1>Hello Home</h1>
    <div>
    <center>
    <form onSubmit={handleFilterSubmit}>
    <input type='number' name='record' placeholder='Enter reord' onChange={handleChange} />&nbsp;&nbsp;&nbsp;&nbsp;

    <select name='img'  onChange={handleChange}>
    <option value="images">Images</option>
    <option value="url">Url</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <select name='category'  onChange={handleChange}>
    <option value="shibes">Dogs</option>
    <option value="cats">Cats</option>
    <option value="birds">Birds</option>
    </select>&nbsp;&nbsp;&nbsp;&nbsp;

    <button type="submit">Apply Filter</button>
    </form>
    </center>
    </div>
    <br />
    <br />
    <div >  
    {recordFields}
    </div>
    </div>
    )
}

export default Home
