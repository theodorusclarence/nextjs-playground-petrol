import Image from 'next/image';

export default function imageopt() {
    return (
        <div>
            <Image src='/img/stew.jpg' width={700} height={600} alt='stew' />
            <h1>Image Opt reserve space for lazy loaded item</h1>
            <div className='min-h-screen bg-gray-400'>
                <h2 className='text-green-200'>Lazy Loading Test</h2>
            </div>
            <Image src='/img/curry.jpg' width={700} height={600} alt='curry' />
        </div>
    );
}
