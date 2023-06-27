import React from 'react'
import { next, previous } from '../../assets'
import Slider from "react-slick";
import { feedbacks } from '../../data/feedbacks';

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img
            alt="next"
            src={next}
            className={className}
            onClick={onClick}
            style={{ ...style, marginTop: "-5rem" }}
        />
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <img
            alt="previous"
            src={previous}
            className={className}
            onClick={onClick}
            style={{ ...style, marginTop: "-5rem" }}
        />
    );
}

export default function Carousel() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='mx-7 sm:mx-20 my-0'>
            <Slider {...settings}>
                {
                    feedbacks.map((item, index) => (
                        <div key={item.id}>
                            <figcaption className='sm:mt-10'>
                                <p className="text-TEXT_GREY font-normal text-sm sm:text-base text-center mx:8 sm:mx-16 my-10">
                                    {item.content}
                                </p>

                                <img
                                    className="mx-auto h-14 w-14 rounded-full"
                                    src={item.avatarImg}
                                    alt=""
                                />
                                <div className="mt-9 flex-col flex items-center justify-center space-x-3 text-base">
                                    <p className="font-semibold text-base text-TEXT_GREY">
                                        {item.username}
                                    </p>
                                    <p className="text-TEXT_GREY font-normal text-sm">
                                        {item.role}
                                    </p>
                                </div>
                            </figcaption>
                        </div>
                    ))
                }


            </Slider>
        </div>
    );
}
