import logo from "@/assets/logos/logo.png";

export default function useHeader() {
    const navLinks = [
        'Main',
        'English',
        'Contacts'
    ];

    return {
        logo,
        navLinks
    };
};