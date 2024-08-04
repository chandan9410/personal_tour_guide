
import axios from "axios";
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {

  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': 'dd5d186b88msh8a6e451f0d67f50p1165cbjsnf6610636cd81',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(URL, options = {

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': 'dd5d186b88msh8a6e451f0d67f50p1165cbjsnf6610636cd81',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.log(error);

  }
}