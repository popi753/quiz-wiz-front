import type { RefObject } from "react";

export default function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement, MouseEvent>, dialog: RefObject<HTMLDialogElement | null>) {
    if (!dialog) {
        return;
    }
    if (e.target === dialog.current) {
        dialog.current?.close();
    }
};