import gsap, { Power3 } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Cards() {
    const sec3 = useRef(null);
    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.sec3',
                start: 'top center',
            },
        }).from(
            '.box',
            {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: Power3.easeOut,
            },
            '+=1'
        );
    }, []);

    return (
        <section
            ref={sec3}
            className='sec3 min-h-screen bg-red-300 grid grid-cols-3 items-center p-4 text-white text-center gap-2'
        >
            <div className='box bg-gray-700 h-28'>Hello</div>
            <div className='box bg-gray-700 h-28'>Hello</div>
            <div className='box bg-gray-700 h-28'>Hello</div>
            <div className='box bg-gray-700 h-28'>Hello</div>
            <div className='box bg-gray-700 h-28'>Hello</div>
            <div className='box bg-gray-700 h-28'>Hello</div>
        </section>
    );
}
