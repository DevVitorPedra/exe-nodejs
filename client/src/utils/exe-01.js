import axios from 'axios'



export default async function getInfo(url){

    let getData 
const options = {
    method: 'GET',
    url: `${url}`,
};

await axios.request(options).then( (response)=> {
getData = [response.data]
console.log(getData)
}).catch(function (error) {
    console.error(error);
});
return getData
}
