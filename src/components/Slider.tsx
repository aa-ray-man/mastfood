"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState, useCallback } from "react"

const data = [
  {
    id: 1,
    title: "Always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
]

export default function ImprovedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] relative overflow-hidden bg-background">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0">
            <div className="flex flex-col h-full lg:flex-row">
              {/* TEXT CONTAINER */}
              <div className="flex-1 flex items-center justify-center flex-col gap-8 text-primary p-8">
                <h1 className="text-3xl text-center uppercase md:text-4xl xl:text-5xl font-bold">
                  {slide.title}
                </h1>
                <Link href="/menu">
                <button className="bg-primary text-primary-foreground py-3 px-6 rounded-full hover:bg-primary/90 transition-colors">
                  Order Now
                </button>
                </Link>
              </div>
              {/* IMAGE CONTAINER */}
              <div className="w-full flex-1 relative">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        &#10095;
      </button>
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}