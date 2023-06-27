import React from 'react'
import { careness, hospital, ratingy } from '../assets'
import Button from '../components/UI/Button';

export default function SearchHospital() {

    const handleSearch = () => {
        window.location.href = "/search-hospital"
    };

    return (
        <div id='search-hospital' className="my-5 sm:my-10 flex flex-wrap items-center">
            <div className="mx-auto mt-1 sm:mt-24 flex w-full justify-center px-0 sm:px-4 md:w-5/12 lg:mt-0">
                <div>
                    <div className="relative">
                        <img
                            alt="CardImage"
                            src={hospital}
                            className="h-[19rem] sm:h-[31rem] w-full"
                        />
                    </div>
                    <div>
                        <div className='absolute -mt-32 mx-32 sm:-mt-44 sm:mx-80'>
                            <div className='bg-WHITE shadow-lg w-64 h-16 flex flex-row items-center content-center'>
                                <img src={careness} alt='help' className='mt-2' />
                                <div>
                                    <p className='text-TEXT_GREY font-medium text-base mb-1'>Quality over Quantity</p>
                                    <img alt="rating" src={ratingy} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto sm:-mt-8 w-full px-12 md:w-6/12">
                <p className="mb-8 font-medium text-3xl text-BLUE2">
                    Search the Nearest hospital  <br /> from you
                </p>
                <p className="mb-8 font-normal text-base text-TEXT_GREY">
                    Rumah sakit adalah bagian integral dari suatu organisasi sosial
                    dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
                </p>

                <Button
                    onClick={handleSearch}
                    text='Search'
                    bgColor='ORANGE'
                    textColor='WHITE'
                />
            </div>

        </div>
    )
}
