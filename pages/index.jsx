import Head from 'next/head';
import Link from 'next/link';
import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Cards from '../components/Cards';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const sec = useRef(null);
    const sec2 = useRef(null);

    useEffect(() => {
        gsap.from('.sec1', {
            duration: 1,
            x: -1500,
            ease: Power3.easeOut,
        });

        // gsap.from('.sec2', {
        //     duration: 1,
        //     x: 1500,
        //     ease: Power3.easeOut,
        //     scrollTrigger: {
        //         trigger: '.sec2',
        //         start: 'top center',
        //     },
        // });

        gsap.from(sec2.current.querySelector('.left'), {
            duration: 1,
            x: -700,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.sec2',
                start: 'top 80%',
            },
        });
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <section ref={sec} className='sec1 min-h-screen bg-red-200'>
                <h1>page 1</h1>
                <Link href='/form'>
                    <a className='btn'>form</a>
                </Link>
                <Link href='/imageopt'>
                    <a className='btn'>image</a>
                </Link>
            </section>
            <section
                ref={sec2}
                className='sec2 min-h-screen bg-red-300 grid grid-cols-2 items-center p-4'
            >
                <div className='left'>
                    <h2>What is Petrolida</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, enim iure?
                        Necessitatibus possimus, repellendus veniam eaque iusto consequatur amet
                        rerum commodi modi, animi nesciunt, mollitia nobis soluta vero ea hic!
                    </p>
                </div>
                <img className='right' src='https://unsplash.it/600/400' alt='this' />
            </section>

            <Cards />

            <div className='text-gray-600 font-body grid md:grid-cols-3'>
                <div className='md:flex md:justify-end'>
                    <nav className='text-right '>
                        <div>
                            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                                <a href='/' className='hover:text-gray-700'>
                                    Food Ninja
                                </a>
                            </h1>
                        </div>
                        <ul className='text-sm mt-6'>
                            <li className='text-gray-700 font-bold py-1'>
                                <a
                                    className='px-4 flex justify-end border-r-4 border-primary'
                                    href='#'
                                >
                                    <span>Home</span>
                                    <svg
                                        className='w-5 ml-2'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className='py-1'>
                                <a
                                    className='px-4 flex justify-end  border-r-4 border-white'
                                    href='#'
                                >
                                    <span>About</span>
                                    <svg
                                        className='w-5 ml-2'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className='py-1'>
                                <a
                                    className='px-4 flex justify-end border-r-4 border-white'
                                    href='#'
                                >
                                    <span>Contact</span>
                                    <svg
                                        className='w-5 ml-2'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
                    <div className='flex justify-center md:justify-end'>
                        <a
                            href='#'
                            className='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
                        >
                            Log in
                        </a>
                        <a
                            href='#'
                            className='text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
                        >
                            Sign up
                        </a>
                    </div>

                    <header>
                        <h2 className='text-gray-700 text-6xl font-semibold '>Recipes</h2>
                        <h3 className='text-2xl font-semibold'>For Ninjas</h3>
                    </header>

                    <div>
                        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
                            Latest Recipes
                        </h4>

                        <div className='mt-8 grid lg:grid-cols-3 gap-10'>
                            {/* <!-- cards go here --> */}
                            <div className='card hover:shadow-lg transition-shadow'>
                                <img
                                    className='w-full h-32 sm:h-48 object-cover'
                                    src='img/stew.jpg'
                                    alt='stew'
                                />
                                <div className='m-4'>
                                    <span className='font-bold'>5 Bean Chili Stew</span>
                                    <span className='block text-gray-500 text-sm'>
                                        Recipe by Mario
                                    </span>
                                </div>
                                <div className='badge'>
                                    <svg
                                        className='w-5 inline-block'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                            <div className='card hover:shadow-lg transition-shadow'>
                                <img
                                    className='w-full h-32 sm:h-48 object-cover'
                                    src='img/noodles.jpg'
                                    alt='noodles'
                                />
                                <div className='m-4'>
                                    <span className='font-bold'>Veg Noodles</span>
                                    <span className='block text-gray-500 text-sm'>
                                        Recipe by Mario
                                    </span>
                                </div>
                                <div className='badge'>
                                    <svg
                                        className='w-5 inline-block'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                            <div className='card hover:shadow-lg transition-shadow'>
                                <img
                                    className='w-full h-32 sm:h-48 object-cover'
                                    src='img/curry.jpg'
                                    alt='curry'
                                />
                                <div className='m-4'>
                                    <span className='font-bold'>Tofu Curry</span>
                                    <span className='block text-gray-500 text-sm'>
                                        Recipe by Mario
                                    </span>
                                </div>
                                <div className='badge'>
                                    <svg
                                        className='w-5 inline-block'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                                        />
                                    </svg>
                                    <span>25 mins</span>
                                </div>
                            </div>
                        </div>

                        <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
                            Most Popular
                        </h4>

                        <div className='mt-8'>{/* <!-- cards go here --> */}</div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
                            Load more
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
