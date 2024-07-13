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
} from '../assets/filter-icon';

interface Category {
  type: string;
  icon: string;
  text: string;
  isActive: boolean;
}

interface CategoriesIcon {
  [key: string]: string;
}

export const categories: Category[] = [
  { type: 'nature', icon: nature, text: 'Природа', isActive: true },
  { type: 'culture', icon: culture, text: 'Культура', isActive: true },
  { type: 'monument', icon: monument, text: 'История', isActive: true },
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
  { type: 'other', icon: other, text: 'Разное', isActive: true },
  { type: 'attraction', icon: attraction, text: 'Развлечения', isActive: true },
  { type: 'sport', icon: sportFootball, text: 'Спорт', isActive: true },
  { type: 'adult', icon: adult, text: 'Для взрослых', isActive: true },
  { type: 'bank', icon: bank, text: 'Банк', isActive: true },
  { type: 'hostel', icon: hostels, text: 'Хостел', isActive: true },
];

export const categoriesIcon: CategoriesIcon = {
  nature: nature,
  culture: culture,
  monument: monument,
  religion: religion,
  architecture: architecture,
  industrial: industrial,
  attraction: attraction,
  sport: sportFootball,
  adult: adult,
  bank: bank,
  hostel: hostels,
  other: other,
};

export const typeFilter = categories.map((item) => item.type);
