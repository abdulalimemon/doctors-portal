import React from 'react';
import { Bars } from 'react-loader-spinner';
import Footer from './Footer';
import Navbar from './Navbar';


const Loading = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className='container mx-auto'>
                    <div className='h-[70vh] flex items-center justify-center'>
                        <Bars
                            height="80"
                            width="80"
                            color="#570DF8"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
};

export default Loading;