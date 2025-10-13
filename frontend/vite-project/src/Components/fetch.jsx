import axios from 'axios';
import { Innerflight } from '../Pages/bookingpage/innerflight';

export const FetchAPI = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/trip/');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};