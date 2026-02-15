export default function handleClickOutside(event: MouseEvent, Ref: React.RefObject<HTMLDetailsElement | null>) {
    const details = Ref.current;
    if (details && details.open && !details.contains(event.target as Node)) {
        details.open = false;
    };
};