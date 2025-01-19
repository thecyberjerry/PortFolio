"use client"
import React from "react"
import Slider from "react-slick";

type Testimonial = {
    children?: React.ReactElement
}

export default function Testimonalslider({ children }: Testimonial) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return <div className="slider-container">
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
}