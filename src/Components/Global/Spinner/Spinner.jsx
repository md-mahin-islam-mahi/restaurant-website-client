import { treadmill } from 'ldrs'

const Spinner = () => {

    treadmill.register()

    return (
        <>
            <div className='flex flex-col justify-center items-center mt-[300px]'>
                <l-treadmill
                    size="100"
                    speed="1.25"
                    color="#1E4481"
                ></l-treadmill>
                <h1 className='text-[30px] font-bold text-[#1E4481]'>Loading...</h1>
            </div>
        </>

    );
};

export default Spinner;