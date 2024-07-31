import axios from 'axios';

type Element = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    name?: string;
    description?: string;
    boundedBy?: [[number, number], [number, number]];
    uri?: string;
    CompanyMetaData?: {
      id?: string;
      name?: string;
      address?: string;
      Phones?: { type: string; formatted: string }[];
      Categories?: { class: string; name: string }[];
      Hours?: {
        text?: string;
        Availabilities?: {
          Intervals?: { from: string; to: string }[];
          Everyday?: boolean;
        }[];
      };
    };
  };
};

type ProcessedPlace = {
  id: string | undefined;
  name: string;
  description: string | undefined;
  hours: string | undefined;
  lat: number | undefined;
  lon: number | undefined;
  type: string;
};

export const fetchPlaces = async (
  latitude: number,
  longitude: number,
  radius: number,
  placeTypes: string[],
) => {
  const places: ProcessedPlace[] = [];

  const url = 'https://search-maps.yandex.ru/v1/';
  for (let i = 0; i < placeTypes.length; i++) {
    try {
      const response = await axios.get(
        `${url}?lang=ru_RU&text=${placeTypes[i]}&ll=${longitude},${latitude}&spn=${radius},${radius}&rspn=1&apikey=${import.meta.env.VITE_REACT_REACT_APP_YANDEX_API}
      `,
      );

      if (response.status === 200) {
        const data: Element[] = response.data.features;

        const filteredPlaces = processData(data, placeTypes[i]);
        places.push(...filteredPlaces);
      } else {
        throw new Error('Error while fetching places from Overpass API');
      }
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  }

  return places;
};

const processData = (data: Element[], type: string): ProcessedPlace[] => {
  const places: ProcessedPlace[] = [];

  for (const element of data) {
    if (
      element.properties?.name &&
      element.geometry?.coordinates.length === 2 &&
      element.properties.boundedBy
    ) {
      const place: ProcessedPlace = {
        id: element.properties.CompanyMetaData?.id,
        name: element.properties.name,
        description: element.properties.description,
        hours: element.properties.CompanyMetaData?.Hours?.text,
        lat: element.properties.boundedBy[0][1],
        lon: element.properties.boundedBy[0][0],
        type: type,
      };
      places.push(place);
    }
  }

  return places;
};
