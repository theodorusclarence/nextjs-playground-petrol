export default function FormPage() {
    return (
        <div className='font-body bg-gray-500 text-center min-h-screen py-4'>
            <h1 className='font-black'>Embed Google Form Here</h1>

            <iframe
                className='mx-auto  w-11/12 lg:w-7/12 min-h-screen'
                src='https://docs.google.com/forms/d/e/1FAIpQLScxvh-18Y0Hf6C5V8BTF7Ez82I-_Q9NQAXf9AEHUNIP7dg8Ew/viewform?embedded=true'
                // width='100%'
                height='100%'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
            >
                Loading…
            </iframe>
        </div>
    );
}
