import type { ModalT, ModalOptions, ModalContent } from "./types";

class Observer {
  observers: ((modal: ModalT) => void)[] = [];
  modals: ModalT[] = [];

  subscribe = (observer: (modal: ModalT) => void) => {
    this.observers.push(observer);
  };

  publish = (modal: ModalT) => {
    for (const observer of this.observers) {
      observer(modal);
    }
  };

  addModal = (modal: ModalT) => {
    this.publish(modal);
    this.modals = [...this.modals, modal];
  };
}

export const ModalState = new Observer();

const modalFunction = <T = unknown>(
  content: ModalContent<T>,
  options?: ModalOptions<T>
) => {
  const id = options?.modalId ?? crypto.randomUUID();

  ModalState.addModal({ jsx: content, id, options });

  return id;
};

const basicModal = modalFunction;

export const modal = Object.assign(basicModal, {});
