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
  disabled?: boolean;
}

interface CategoriesIcon {
  [key: string]: string;
}

export const categories: Category[] = [
  { type: 'nature', icon: nature, text: 'Природа' },
  { type: 'culture', icon: culture, text: 'Культура' },
  { type: 'monument', icon: monument, text: 'История' },
  { type: 'religion', icon: religion, text: 'Религия' },
  { type: 'architecture', icon: architecture, text: 'Архитектура' },
  {
    type: 'industrial',
    icon: industrial,
    text: 'Индустриальные объекты',
    disabled: true,
  },
  { type: 'other', icon: other, text: 'Разное' },
  { type: 'attraction', icon: attraction, text: 'Развлечения' },
  { type: 'sport', icon: sportFootball, text: 'Спорт' },
  { type: 'adult', icon: adult, text: 'Для взрослых', disabled: true },
  { type: 'bank', icon: bank, text: 'Банк', disabled: true },
  { type: 'hostel', icon: hostels, text: 'Хостел', disabled: true },
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
