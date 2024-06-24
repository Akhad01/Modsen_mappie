import { Box, Typography } from '@mui/material';
import Card from '../Card';

const FavoriteList = () => {
  const items = [
    {
      title: 'Фантастический музей им. П.М. Машерова',
      description: 'Lorem ipsum jere. Intrabel peraktiv pävufäsk läslov pide.',
    },
    {
      title: 'Городской парк',
      description: 'Lorem ipsum jere. Intrabel peraktiv pävufäsk läslov pide.',
    },
    {
      title: 'Фантастический музей им. П.М. Машерова',
      description: 'Lorem ipsum jere. Intrabel peraktiv pävufäsk läslov pide.',
    },
  ];

  return (
    <Box>
      <Typography variant='h5'>Избранное:</Typography>
      {items.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </Box>
  );
};

export default FavoriteList;
