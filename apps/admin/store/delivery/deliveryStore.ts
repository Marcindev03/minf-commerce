import { create } from "zustand";

interface DeliveryStore {
  isEditModalOpen: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  isEditModalOpen: false,
  openEditModal: () => set({ isEditModalOpen: true }),
  closeEditModal: () => set({ isEditModalOpen: false }),
}));
