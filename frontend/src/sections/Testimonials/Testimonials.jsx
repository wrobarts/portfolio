import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Heading from '../../UIElements/Heading';
import Testimonial from './components/Testimonial';
import testimonials from './util/testimonials';
import 'swiper/swiper.min.css';
import './Testimonials.css';

const Testimonials = props => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [numSlides, setNumSlides] = useState(2);

    const handleSlideChange = swiper => {
        setTestimonialIndex(swiper.realIndex);
    };

    const changeLayoutHandler = () => {
        if (window.innerWidth < 812) {
            setNumSlides(1);
        } else {
            setNumSlides(2);
        }
    };

    useEffect(() => {
        changeLayoutHandler();
    }, []);

    window.addEventListener("resize", changeLayoutHandler, true);

    return (
        <article id="testimonials" ref={props.innerRef}>
            <Heading title="What they say about us" subtitle="Testimonials" />
            <div className="testimonials-container">
                <Swiper
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={numSlides}
                    className="swiper-container testimonial-swiper"
                    spaceBetween={16}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    onSwiper={(swiper) => handleSlideChange(swiper)}
                >
                    {testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                            <Testimonial
                                img_src={testimonial.img_src}
                                name={testimonial.name}
                                company={testimonial.company}
                                body={testimonial.body}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="testimonial-selector-container">
                <div className={
                    `testimonial-selector ${
                        testimonialIndex === 0 && 'selected'
                    }`
                }></div>
                <div className={
                    `testimonial-selector ${
                        testimonialIndex > 0 && testimonialIndex < testimonials.length - 1 && 'selected'
                    } selector-middle`
                }></div>
                <div className={
                    `testimonial-selector ${
                        testimonialIndex === testimonials.length - 1 && 'selected'
                    }`
                }></div>
            </div>
        </article>
    );
};

export default Testimonials;