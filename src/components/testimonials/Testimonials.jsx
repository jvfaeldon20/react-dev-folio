import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: ' non fuga vel magnam doloribus quos? Necessitatibus rerum reprehenderit veritatis delectus ut, nisi sed saepe!',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: ' non fuga vel magnam doloribus quos? Necessitatibus rerum reprehenderit veritatis delectus ut, nisi sed saepe!',
  },
  {
    avatar: AVTR3,
    name: 'Nana Ama McBrown',
    review: ' non fuga vel magnam doloribus quos? Necessitatibus rerum reprehenderit veritatis delectus ut, nisi sed saepe!',
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: ' non fuga vel magnam doloribus quos? Necessitatibus rerum reprehenderit veritatis delectus ut, nisi sed saepe!',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container mySwiper"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials