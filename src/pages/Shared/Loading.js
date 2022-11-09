import React from 'react';
import { Bars } from 'react-loader-spinner';


const Loading = () => {
    return (
        <>
            <div>
                <div className='container mx-auto'>
                    <div className='h-[100vh] flex items-center justify-center'>
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
        </>

    );
};

export default Loading;