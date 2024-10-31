export const ScrollToTop = () => {
    return () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};