import { Avatar, Button, CardActions, CardMedia } from '@mui/material';

import { FaBookmark, FaLocationDot } from 'react-icons/fa6';
import { history, nature } from '../../assets/filter-icon';
import {
  CardContainer,
  CardDescription,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';

const DetailedCard = () => {
  const image = 'https://via.placeholder.com/300';
  const title = 'Фантастический музей имени П.М. Машерова';
  const description =
    'Lorem ipsum dinas attitydig inte hungerpandemi även om kagt fören. Nimärt koldioxidneutralt vin. Coronaanpassa tess. Lotkliga framtidsfullmakt. Hackathon stenortyckig valurade, dekornar viktig. Vigenade häns nyt i dagmaffian kontraskp. Häling vaktig tröskelboende sur. Direstaka pregengen, åssom sped vivis, det vill säga dagshandlare. Temakonfirmationa ossa ger kyck. Kurtarera lyk fastän kötttrymden. Bler kaliga. Julgranstyckningen tempar av gången outmyförjäder. Spenegen begalig kanelig. Mibelt social turism om spemdant, sav.';

  return (
    <CardContainer>
      <CardMedia component='img' alt={image} image={image} />
      <CardDetails>
        <CardIcons>
          <Avatar sx={{ width: 30, height: 30 }} src={nature} />
          <Avatar sx={{ width: 30, height: 30 }} src={history} />
        </CardIcons>
        <CardTitle variant='h6'>{title}</CardTitle>
        <CardDescription variant='body2'>{description}</CardDescription>
        <CardActions>
          <Button
            style={{ border: '3px solid #C4C4C4', color: '#808080' }}
            variant='outlined'
            startIcon={<FaBookmark color='#808080' />}
          >
            Сохранено
          </Button>
          <Button variant='contained' startIcon={<FaLocationDot />}>
            Маршрут
          </Button>
        </CardActions>
      </CardDetails>
    </CardContainer>
  );
};

export default DetailedCard;
