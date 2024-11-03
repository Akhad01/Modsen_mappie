import React from 'react';
import { IconButton } from '@mui/material';
import { BiSolidRightArrow } from 'react-icons/bi';
import { MdDelete } from "react-icons/md";

import { setPlaceIdAndShowSidebarPanel } from '../../store/slices/sidebar-slice';
import {
  CardActions,
  CardContainer,
  CardDescription,
  CardTitle,
  TitleBox,
} from './styled';
import { useAppDispatch } from '../../hooks/redux';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

interface Props {
  title: string;
  description: string;
  id: string;
}

const Card = ({ id, title, description }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    try {
      const q = query(collection(db, "favorites"), where("id", "==", id))

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (docSnapshot) => {
          // Удаляем каждый документ по его id
          console.log(docSnapshot.id);
          await deleteDoc(doc(db, "favorites", docSnapshot.id));
        });

        

        console.log(`Документы с именем ${id} успешно удалены.`);
      } else {
        console.log(`Документы с именем ${id} не найдены.`);
      }
    } catch (error) {
      console.error("Ошибка при удалении из избранного: ", error)
    }
  }

  const handleClick = () => {
    dispatch(setPlaceIdAndShowSidebarPanel(id));
  };

  return (
    <CardContainer>
      <TitleBox>
        <CardTitle variant="h6">{title}</CardTitle>
      </TitleBox>
      <CardDescription variant="body2">{description}</CardDescription>
      <CardActions>
        <IconButton onClick={handleDelete}>
          <MdDelete  />
        </IconButton>
        <IconButton onClick={handleClick}>
          <BiSolidRightArrow />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
