import axios from 'axios';

export default axios.create({
  baseURL: "https://www.googlepapis.com/youtube/v3",
  params:{
      part:'snippet',
      maxResults: 5,
      key: 'AIzaSyDBSf5oCyIZPwLZjAqfEh_h1iYJoeG1h4s'
  }
});