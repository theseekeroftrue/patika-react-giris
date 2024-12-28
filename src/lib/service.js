import axios from 'axios'

async function getData (userId){
  try {
   const user =  await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>res.data);
   const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res=>res.data);
   const result = {
      user,
      posts
   }
   return console.log(result);;
  } catch (error) {
   console.error('Error fetching data:', error);
  }
}

export default getData;