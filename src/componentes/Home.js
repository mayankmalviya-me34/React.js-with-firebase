import React from 'react';
import {Button} from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className='p-4 box mt-3 text-center'>Hello Welcome</div>
            <div className=' d-grid garp-2'>
                <Button variant='primary'>Log Out</Button>
            </div>
        </>
    )
};

export default Home;