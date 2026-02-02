export const changeVisibility = (e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => {
    const input = (e.currentTarget as HTMLElement).previousElementSibling as HTMLInputElement;
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    };
}
