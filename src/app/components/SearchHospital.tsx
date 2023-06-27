import React from 'react'
import { careness, hospital, ratingy } from '../assets'

export default function SearchHospital() {

    const handleSearch = () => {
        window.location.href = "/search-hospital"
    };

    return (
        <div id='search-hospital' className="my-10 flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                <div className="">
                    <div className="relative">
                        <img
                            alt="CardImage"
                            src={hospital}
                            className="sm:h-[31rem] h-full w-full"
                        />
                    </div>
                    <div>
                        <div className='absolute -mt-44 mx-80'>
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

            <div className="mx-auto -mt-8 w-full px-12 md:w-6/12">
                <p className="mb-8 font-medium text-3xl text-BLUE2">
                    Search the Nearest hospital  <br /> from you
                </p>
                <p className="mb-8 font-normal text-base text-TEXT_GREY">
                    Rumah sakit adalah bagian integral dari suatu organisasi sosial
                    dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).
                </p>
                <button
                    onClick={handleSearch}
                    className="rounded-none bg-ORANGE hover:bg-ORANGE-700 text-WHITE py-2 px-8">
                    Search
                </button>

            </div>

        </div>
    )
}
