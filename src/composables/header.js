import logo from "@/assets/logos/logo.png"

export default function useHeader() {
    /*
     Name attributes could be added
     corresponding to defined ones in routes file.
    */
    const navLinks = [
        {
            title: 'Main',
            path: '/'
        },
        {
            title: 'English',
            path: '/' // Must be changed after localization is implemented at the backend.
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]

    return {
        logo,
        navLinks
    }
}