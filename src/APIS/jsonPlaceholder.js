import axios from 'axios';

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// export default axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
//     return response.data
// })