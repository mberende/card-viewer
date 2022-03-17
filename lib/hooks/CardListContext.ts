import { CardListContext } from '../../context/CardListContex';
import { useContext } from 'react';

export const useCardListContext = () => useContext(CardListContext);
