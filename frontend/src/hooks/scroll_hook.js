import {useState, useRef} from 'react';

export const useScroll = () => {
    const [visibleElements, setVisibleElements] = useState([]);
    
    const elementsRef = useRef([]);

    const observer = new IntersectionObserver(entries => {
        const visibleElementsIds = entries
            .filter(entry => {
                const {width, height} = entry.intersectionRect;
                return entry.isIntersecting && height >= 300;
            })
            .map(entry => entry.target.id);
        setVisibleElements(visibleElementsIds);
    });

    const handleScroll = () => {
        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            elementsRef.current.forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    };

    const scrollToHandler = scrollDestination => {
        let destination;
        if (scrollDestination === "home") {
            destination = elementsRef.current[0];
        } else if (scrollDestination === "about") {
            destination = elementsRef.current[1];
        } else if (scrollDestination === "portfolio") {
            destination = elementsRef.current[2];
        } else if (scrollDestination === "testimonials") {
            destination = elementsRef.current[3];
        } else if (scrollDestination === "pricing") {
            destination = elementsRef.current[4];
        } else if (scrollDestination === "contact") {
            destination = elementsRef.current[5];
        }

        let navbarOffset;
        if (["about", "testimonials", "contact"].includes(scrollDestination)) {
            navbarOffset = 208;
        } else {
            navbarOffset = 80;
        }

        window.scrollTo({
            top: destination.offsetTop - navbarOffset,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", handleScroll, {passive: true});

    return {visibleElements, elementsRef, scrollToHandler};
};