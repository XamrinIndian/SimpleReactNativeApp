import axios from 'axios';

const parseResponse = (res: {data: {status: number; data: []}}) => {
  return res;
};
const callGetApi = async (endPoint: string) => {
  return axios({
    url: endPoint,
    method: 'GET',
  }).then(parseResponse);
};

const Api = {
  App: {
    postData: () => callGetApi('https://jsonplaceholder.typicode.com/posts'),
  },
};
export default Api;
