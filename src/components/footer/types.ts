export type FooterListProps = {
    headerText: string;
    items: FooterListItemProps[];
}

export type FooterListItemProps = {
    text: string;
    link: string;
    blank?: boolean;
}