/**
 * @overview Modal actions.
 */

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(customer) {
  return {
    type: OPEN_MODAL,
    customer,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
