'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Testimonials() {
  const galleryImages = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg", // Assuming you have more gallery images
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerPage = 4;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (Math.ceil(galleryImages.length / imagesPerPage)));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + (Math.ceil(galleryImages.length / imagesPerPage))) % (Math.ceil(galleryImages.length / imagesPerPage)));
  };

  const startIndex = currentSlide * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayedImages = galleryImages.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen py-32 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"Seema's classes have transformed my life. Her teaching style is gentle yet powerful!"</p>
            <p className="text-primary font-bold">- Happy Student</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"I love the flexibility of online and in-person classes. Highly recommend Yoga4Wellness!"</p>
            <p className="text-primary font-bold">- Satisfied Client</p>
          </div>
        </div>

        <div className="relative mt-16 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {displayedImages.map((imageSrc, index) => (
              <div key={index} className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc}
                  alt={`Gallery image ${startIndex + index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {galleryImages.length > imagesPerPage && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
              >
                <FaChevronLeft className="text-gray-700 text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
              >
                <FaChevronRight className="text-gray-700 text-xl" />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Image Testimonial 1 - Highlighted */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"Seema is an amazing yoga instructor, she is very patient in explaining asanas and designs classes to your need. Her passion towards yoga and Ayurveda are absolutely amazing."</p>
            <div className="relative w-full h-auto mt-4">
              <Image
                src="/testimonial1.jpg"
                alt="Client Testimonial"
                width={500}
                height={350}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Image Testimonial 2 - Highlighted */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"I have been taking Prenatal Yoga classes from Seema since the beginning of my third trimester. The pregnancy-friendly stretching and yoga poses have improved my strength and flexibility especially the pelvic floor, hips and legs."</p>
            <div className="relative w-full h-auto mt-4">
              <Image
                src="/testimonial2.jpg"
                alt="Client Testimonial"
                width={500}
                height={350}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Image Testimonial 3 - Highlighted */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">"I have thoroughly enjoyed Seema's yoga classes, she is very patient and attentive teacher. Her commitment and passion for yoga, meditation, Ayurveda and wellness and zest for spreading it to others is remarkable and inspiring. Knowing her for long time and witnessing her personal transformation and that of her students is amazing. I highly recommend her studio for yoga practice."</p>
            <div className="relative w-full h-auto mt-4">
              <Image
                src="/testimonial3.jpg"
                alt="Client Testimonial"
                width={500}
                height={350}
                layout="responsive"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Other Image Testimonials - as images */}
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial4.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial5.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial6.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial7.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial8.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial9.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial10.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src="/testimonial11.jpg"
              alt="Client Testimonial"
              width={500}
              height={350}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </main>
  )
} 