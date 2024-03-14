"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "./modal";
import { ModalState } from "./observer";
import { ModalT } from "./types";

export function ModalContainer() {
  const [modals, setModals] = useState<ModalT[]>([]);

  useEffect(() => {
    ModalState.subscribe((modal) => {
      setModals((modals) => {
        const indexOfExistingToast = modals.findIndex((t) => t.id === modal.id);

        if (indexOfExistingToast !== -1) {
          return [
            ...modals.slice(0, indexOfExistingToast),
            { ...modals[indexOfExistingToast], ...modal },
            ...modals.slice(indexOfExistingToast + 1),
          ];
        }

        return [modal, ...modals];
      });
    });
  }, []);

  const closeModal = React.useCallback(
    (modal: ModalT) =>
      setModals((modals) => modals.filter(({ id }) => id !== modal.id)),
    []
  );

  return (
    <section className="">
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          modal={modal}
          closeModal={closeModal}
          {...modal.options}
        />
      ))}
    </section>
  );
}
