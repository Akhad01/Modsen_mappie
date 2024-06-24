import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import Sidebar from '../../components/Sidebar';
import { Container } from './styled';

const Main = () => {
  return (
    <YMaps>
      <Container>
        <Sidebar />
        <Map
          height='100vh'
          width='100%'
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        >
          <Placemark defaultGeometry={[55.751574, 37.573856]} />
        </Map>
      </Container>
    </YMaps>
  );
};

export default Main;
