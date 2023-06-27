export type NavbarItem = {
    id: string;
    label: string;
};

export type InputProps = {
    label: string,
    id: string,
    name: string,
    placeholder: string,
    value?: string,
    multiline?: boolean,
    onChange?: (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void
};