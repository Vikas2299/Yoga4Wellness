import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container">
        <h1 className="section-title text-center">Testimonials</h1>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/gallery1.jpg"
              alt="Yoga class"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/gallery2.jpg"
              alt="Yoga class"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/gallery3.jpg"
              alt="Yoga class"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/gallery4.jpg"
              alt="Yoga class"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
} 