import { useEffect } from 'react';

const useReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        const revealedElements = document.querySelectorAll('.reveal');
        revealedElements.forEach((el) => observer.observe(el));

        return () => {
            revealedElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useReveal;
