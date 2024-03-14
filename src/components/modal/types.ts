import type { ElementType } from "react";

export type Id = string | number;

export type ModalProps<T = unknown> = {
  closeModal: () => void;
} & T;

export interface ModalOptions<Data = unknown> {
  modalId?: Id;
  classNames?: {
    modal?: string;
    overlay?: string;
  };
  onOpen?: () => void;
  onClose?: () => void;
  data?: Data;
}

export interface ModalT {
  jsx: ElementType;
  id: Id;
  options?: Omit<ModalOptions, "modalId">;
}
