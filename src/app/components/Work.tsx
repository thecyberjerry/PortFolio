import { MyWorkProps } from '@/slices/MyWork'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import React, { JSX } from 'react'
import Slider from "react-slick";
export type Work = Pick<MyWorkProps, "slice">

export default function Work({ slice }: Work): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  return (
    <React.Fragment>
      <div className="mx-auto"><PrismicRichText field={slice.primary.heading} /></div>
      {/* <div className={`grid mx-auto md:grid-cols-3 gap-2 `}> */}
      <div className="slider-container">
        <Slider {...settings}>
          {slice.primary.work_card.map((item, index: number) => (
            <div className={`${slice.primary.font_color_onhover} ${slice.primary.blog_card_background_color} ${slice.primary.blog_card_background_color_static} ${slice.primary.font_color_static} flex flex-col gap-14 md:w-[auto] md:min-h-[350px] p-10 w-auto min-h-auto `} key={index}>
              <div className="flex flex-col gap-4">
                <PrismicRichText field={item.card_title} />
                <span>{item.work_sub_description}</span>
              </div>
              <div className="flex mt-32 justify-between">{item.read_more_button}<PrismicNextImage field={item.redirect_icon} /></div>
              {/* <PrismicNextLink field={item.blog_link} /> */}
            </div>
          ))}
        </Slider>
      </div>
      {/* </div> */}
    </React.Fragment>
  )
}
