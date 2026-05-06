import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // On ajoute le middleware de persistance

interface CartStore {
  items: any[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => set((state) => ({ items: [...state.items, product] })),
      removeItem: (id) => set((state) => ({ 
        items: state.items.filter((i: any) => i.id !== id) 
      })),
    }),
    {
      name: 'phenoshop-storage', // C'est le nom du dossier dans ton navigateur
    }
  )
);

