import axios from 'axios';

export const FetchAPI = async () => {
  try {
    const response = await axios.get('https://backend112.pythonanywhere.com/api/trip/');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};