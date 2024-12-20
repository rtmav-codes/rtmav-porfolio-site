import { writable } from "svelte/store";

const modalQue = writable([]);

const render = (modal) => {
    const id = Math.floor(Math.random() * Date.now());

    modal.id = id;

    modalQue.update((existing) => [
        ...existing,
        modal,
    ]);

    return modal;
};

const close = (id) => modalQue.update((existing) => existing.filter(({ id : _id }) => id !== _id));

export default modalQue;

export {
    render,
    close,
};
