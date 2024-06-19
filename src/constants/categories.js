import {
  major,
  nature,
  culture,
  history,
  religion,
  architecture,
  industry,
  other,
  ferrisWheel,
  sportFootball,
} from '../assets/filter-icon';

export const categories = [
  { icon: nature, text: 'Природа' },
  { icon: culture, text: 'Культура' },
  { icon: history, text: 'История' },
  { icon: religion, text: 'Религия' },
  { icon: architecture, text: 'Архитектура' },
  { icon: industry, text: 'Индустриальные объекты', disabled: true },
  { icon: other, text: 'Разное' },
  { icon: ferrisWheel, text: 'Развлечения' },
  { icon: sportFootball, text: 'Спорт' },
  { icon: major, text: 'Для взрослых', disabled: true },
];
