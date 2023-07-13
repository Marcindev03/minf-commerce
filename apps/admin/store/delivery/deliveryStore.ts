import { create } from "zustand";

type ModalTitle = "Add Delivery Option" | "Edit Delivery Option";

interface DeliveryStore {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalTitle: ModalTitle;
  setModalTitle: (title: ModalTitle) => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  modalTitle: "Add Delivery Option",
  setModalTitle: (title) => set({ modalTitle: title }),
}));
