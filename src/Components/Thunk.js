import axios from "axios"
import { showData } from "../Rdedux/action";

const proRequest = axios.create({
    baseURL: "http://shibe.online/api",
})

export const fetchData = () => async (dispatch) => {
    try {
        const response = await proRequest.get(`shibes?count=10`)
        dispatch(showData(response.data));
        console.log(response.data)
    }
    catch (err) {
        console.log(err);
    }

}