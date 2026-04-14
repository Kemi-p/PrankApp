export interface Question {
  id: number;
  label: string;
  subtitle: string;
  options: { label: string; price: number }[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    label: 'What size is your cup?',
    subtitle: 'All sizes are R5.',
    options: [
      { label: 'Small (240ml)', price: 5 },
      { label: 'Medium (340ml)', price: 5 },
      { label: 'Large (500ml)', price: 5 },
    ],
  },
  {
    id: 2,
    label: 'Choose your base',
    subtitle: 'Every base is R5.',
    options: [
      { label: 'Espresso', price: 5 },
      { label: 'Filter Coffee', price: 5 },
      { label: 'Rooibos', price: 5 },
    ],
  },
  {
    id: 3,
    label: 'Pick your milk',
    subtitle: 'Milk options from R5.',
    options: [
      { label: 'Full Cream', price: 5 },
      { label: 'Oat Milk', price: 5 },
      { label: 'Boat Milk ', price: 5 },
      { label: 'Goat Milk (imported)', price: 5 },
    ],
  },
  {
    id: 4,
    label: 'Add a syrup',
    subtitle: 'Sweet additions. R5 each.',
    options: [
      { label: 'Vanilla', price: 5 },
      { label: 'Caramel', price: 5 },
      { label: 'Rice water', price: 5 },
      { label: 'Ink', price: 5 },
    ],
  },
  {
    id: 5,
    label: 'Choose a topping',
    subtitle: 'Elevate your drink cheap cheap',
    options: [
      { label: 'Cinnamon', price: 5 },
      { label: 'Crushed Hope™', price: 5 },
      { label: 'Sorrows with a dash of prayers', price: 5 },
      { label: 'Classic - tears', price: 5 },
    ],
  },
  {
    id: 6,
    label: 'Any dietary requirements?',
    subtitle: 'We take your health seriously.',
    options: [
      { label: 'Gluten-free', price: 5 },
      { label: 'Dairy-free', price: 5 },
      { label: 'Vibe-free', price: 5 },
      { label: 'Stress free', price: 5 },
    ],
  },
  {
    id: 7,
    label: 'Are you a morning person?',
    subtitle: 'This affects the brew temperature...',
    options: [
      { label: 'Yes, obviously', price: 5 },
      { label: 'No, leave me alone', price: 5 },
      { label: 'What does this have to do with coffee?', price: 5 },
    ],
  },
  {
    id: 8,
    label: 'Rate your emotional availability today',
    subtitle: 'Required for barista safety.',
    options: [
      { label: 'Emotionally available in theory', price: 5 },
      { label: 'working on it ... please hold', price: 5 },
      { label: 'Suspiciously positive', price: 5 },
    ],
  },
];

export const BONUS_ITEMS = [
  { label: 'Hint of Regret™', displayPrice: 'R5', realPrice: 47 },
  { label: 'Complimentary Anxiety (per sip)', displayPrice: 'R5', realPrice: 89 },
  { label: 'Crushed coffee (±2g)', displayPrice: 'R5', realPrice: 312 },
  { label: 'Barista Emotional Support Fee', displayPrice: 'R5', realPrice: 150 },
  { label: 'Banana syrup', displayPrice: 'R5', realPrice: 99 },
];