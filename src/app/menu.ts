import { MenuItem } from './models/order';
import  { MenuCategory } from './models/order';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'espresso', label: 'Espresso', advertised: 'R5', realPrice: 42, category: 'coffee' },
  { id: 'cappuccino', label: 'Cappuccino', advertised: 'R5', realPrice: 67, category: 'coffee' },
  { id: 'flat-white', label: 'Flat White', advertised: 'R5', realPrice: 55, category: 'coffee' },
  { id: 'long-black', label: 'Long Black', advertised: 'R5', realPrice: 38, category: 'coffee' },

  { id: 'full-cream', label: 'Full Cream Milk', advertised: 'R5', realPrice: 20, category: 'milk' },
  { id: 'oat-milk', label: 'Oat Milk', advertised: 'R5', realPrice: 35, category: 'milk' },
  { id: 'skim-milk', label: 'Skim Milk', advertised: 'R5', realPrice: 18, category: 'milk' },
  { id: 'no-milk', label: 'No Milk', advertised: 'R5', realPrice: 7, category: 'milk' },

  { id: 'sugar-0', label: 'No Sugar', advertised: 'R5', realPrice: 8, category: 'sugar' },
  { id: 'sugar-1', label: '1 Teaspoon', advertised: 'R5', realPrice: 12, category: 'sugar' },
  { id: 'sugar-2', label: '2 Teaspoons', advertised: 'R5', realPrice: 19, category: 'sugar' },
  { id: 'sugar-3', label: '3 Teaspoons (good luck)', advertised: 'R5', realPrice: 31, category: 'sugar' },

  { id: 'vanilla', label: 'Vanilla Shot', advertised: 'R5', realPrice: 28, category: 'extras' },
  { id: 'caramel', label: 'Caramel Drizzle', advertised: 'R5', realPrice: 33, category: 'extras' },
  { id: 'extra-shot', label: 'Extra Espresso Shot', advertised: 'R5', realPrice: 45, category: 'extras' },
  { id: 'cinnamon', label: 'Cinnamon Sprinkle', advertised: 'R5', realPrice: 15, category: 'extras' },
  { id: 'crushed-hope', label: 'Crushed Hope™', advertised: 'R5', realPrice: 99, category: 'extras' },

  { id: 'small', label: 'Small (240ml)', advertised: 'R5', realPrice: 22, category: 'size' },
  { id: 'medium', label: 'Medium (340ml)', advertised: 'R5', realPrice: 38, category: 'size' },
  { id: 'large', label: 'Large (500ml)', advertised: 'R5', realPrice: 56, category: 'size' },

  { id: 'hot', label: 'Hot', advertised: 'R5', realPrice: 10, category: 'temperature' },
  { id: 'extra-hot', label: 'Extra Hot', advertised: 'R5', realPrice: 17, category: 'temperature' },
  { id: 'lukewarm', label: 'Lukewarm', advertised: 'R5', realPrice: 9, category: 'temperature' },
  { id: 'disappointment-temp', label: 'Room Temp (like a disappointment)', advertised: 'R5', realPrice: 3, category: 'temperature' },

  { id: 'emotional-unavailable', label: '😶 Emotionally unavailable', advertised: 'R5', realPrice: 89, category: 'chaos' },
  { id: 'emotional-barely', label: '😬 Barely holding it together', advertised: 'R5', realPrice: 47, category: 'chaos' },
  { id: 'emotional-positive', label: '🌈 Suspiciously positive', advertised: 'R5', realPrice: 112, category: 'chaos' },
  { id: 'garfield-today', label: 'Today (I never miss it)', advertised: 'R5', realPrice: 5, category: 'chaos' },
  { id: 'garfield-never', label: 'Never. What is Garfield?', advertised: 'R5', realPrice: 200, category: 'chaos' },
  { id: 'garfield-monday', label: 'Only on Mondays, for courage', advertised: 'R5', realPrice: 77, category: 'chaos' },
  { id: 'earth-yes', label: 'Yes, every single day', advertised: 'R5', realPrice: 150, category: 'chaos' },
  { id: 'earth-no', label: 'No, I have a life', advertised: 'R5', realPrice: 25, category: 'chaos' },
  { id: 'earth-circle', label: 'CircleThingie 1 is objectively better', advertised: 'R5', realPrice: 999, category: 'chaos' },
];

export const MENU_CATEGORIES: { key: MenuCategory; label: string }[] = [
  { key: 'coffee', label: 'Choose Your Coffee' },
  { key: 'milk', label: 'Milk Preference' },
  { key: 'sugar', label: 'Sugar Level' },
  { key: 'extras', label: 'Extras & Add-ons' },
  { key: 'size', label: 'Cup Size' },
  { key: 'temperature', label: 'Temperature' },
  { key: 'chaos', label: 'Important Questions (Required by Law)' },
];

