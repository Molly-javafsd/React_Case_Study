import axios from "axios"
const api =`https://simple-grocery-store-api.glitch.me/products`
let data = null
export const getGrocery = async () => {

        await axios.get(api)
        .then(res=>{
            console.log(res)
            data = res.data
        })
        .catch(err=>{
            console.log(err)
        })
    return data 
}