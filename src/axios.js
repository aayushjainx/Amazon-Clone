import axios from 'axios';
//cd function >>> firebase emulators:start
const instance = axios.create({
  baseURL: 'http://localhost:5001/amazo-nclone7/us-central1/api',
  //host this baseURL >>> 'firebase deploy --only functions' and copy link from firebase functions
  //ALSO UPGRADE PLAN TO BLAZE
});

export default instance;
