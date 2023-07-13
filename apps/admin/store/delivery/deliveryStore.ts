import { DeliveryOption, ModalTitle } from "@/types";
import { create } from "zustand";

interface DeliveryStore {
  deliveryOptions: DeliveryOption[];
  addDeliveryOption: (deliveryOption: DeliveryOption) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalTitle: ModalTitle;
  setModalTitle: (title: ModalTitle) => void;
}

const mockDeliveyOptions = [
  { id: Math.random().toString(), name: "InPost Kurier", price: 14.55 },
  { id: Math.random().toString(), name: "InPost Paczkomaty", price: 12.55 },
  { id: Math.random().toString(), name: "Kurier DPD", price: 18.55 },
  { id: Math.random().toString(), name: "Kurier Pocztex", price: 17.55 },
];

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  deliveryOptions: mockDeliveyOptions,
  addDeliveryOption: (deliveryOption: DeliveryOption) =>
    set((state) => ({
      deliveryOptions: [...state.deliveryOptions, deliveryOption],
    })),
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  modalTitle: "Add Delivery Option",
  setModalTitle: (title) => set({ modalTitle: title }),
}));
