import type { ElementType } from "react";

export type Id = string | number;

export type ModalPosition =
  | "top-right"
  | "top-center"
  | "top-left"
  | "middle-right"
  | "middle-center"
  | "middle-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

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
  position?: ModalPosition;
}

export interface ModalT {
  jsx: ElementType;
  id: Id;
  options?: Omit<ModalOptions, "modalId">;
}
