import { Clusterer, Map, YMaps } from '@pbe/react-yandex-maps';

const Main = () => {
  return (
    <YMaps>
      <Map
        height='100vh'
        width='100%'
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        <Clusterer></Clusterer>
      </Map>
    </YMaps>
  );
};

export default Main;
