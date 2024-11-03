import {
  adult,
  attraction,
  nature,
  culture,
  monument,
  religion,
  architecture,
  industrial,
  other,
  sportFootball,
  bank,
  hostels,
  cafe,
} from '../assets/filter-icon';
import { Category } from '../types/category';

interface CategoriesIcon {
  [key: string]: string;
}

export const categories: Category[] = [
  { type: 'nature', icon: nature, text: 'Природа', isActive: true },
  { type: 'culture', icon: culture, text: 'Культура', isActive: true },
  { type: 'historic', icon: monument, text: 'История', isActive: true },
  { type: 'religion', icon: religion, text: 'Религия', isActive: true },
  {
    type: 'architecture',
    icon: architecture,
    text: 'Архитектура',
    isActive: true,
  },
  {
    type: 'industrial',
    icon: industrial,
    text: 'Индустриальные объекты',
    isActive: true,
  },
  {
    type: "cafe",
    icon: cafe, 
    text: "Еда", 
    isActive: true
  },
  { type: 'unknown', icon: other, text: 'Разное', isActive: true },
  { type: 'avocation', icon: attraction, text: 'Развлечения', isActive: true },
  { type: 'sport', icon: sportFootball, text: 'Спорт', isActive: true },
  { type: 'adult', icon: adult, text: 'Для взрослых', isActive: true },
  { type: 'bank', icon: bank, text: 'Банк', isActive: true },
  { type: 'sleep', icon: hostels, text: 'Хостел', isActive: true },
];

export const categoriesIcon: CategoriesIcon = {
  nature: nature,
  culture: culture,
  historic: monument,
  religion: religion,
  architecture: architecture,
  industrial: industrial,
  attraction: attraction,
  sport: sportFootball,
  adult: adult,
  bank: bank,
  sleep: hostels,
  unknown: other,
  cafe: cafe
};
