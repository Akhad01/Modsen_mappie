import axios from 'axios';

export const fetchPlaces = async (latitude, longitude, radius = 1000) => {
  try {
    // const response = await axios.get('https://search-maps.yandex.ru/v1/?', {
    //   params: {
    //     text: 'Шаршара',
    //     type: 'biz',
    //     ll: `${longitude},${latitude}`,
    //     spn: `${radius / 111320},${radius / 111320}`,
    //     rspn: 1,
    //     apikey: import.meta.env.VITE_REACT_REACT_APP_YANDEX_API,
    //   },
    // });

    const response = await axios.get(
      'https://search-maps.yandex.ru/v1/?lang=ru_RU&text=Шаршара&spn=1000&apikey=6a841818-678b-42fd-a91b-a48f00fef66d',
    );
    console.log('response', response);

    return response.data.features;
  } catch (error) {
    console.error('Error fetching places:', error);
    return [];
  }
};
