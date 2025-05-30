import React from 'react'

export default function Testimonials() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container">
        <h1 className="section-title text-center">Testimonials</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">“Seema's classes have transformed my life. Her teaching style is gentle yet powerful!”</p>
            <p className="text-primary font-bold">- Happy Student</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic mb-2">“I love the flexibility of online and in-person classes. Highly recommend Yoga4Wellness!”</p>
            <p className="text-primary font-bold">- Satisfied Client</p>
          </div>
        </div>
        <h2 className="section-title text-center mt-16">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {/* Replace with actual images in /public */}
          <div className="bg-gray-200 h-40 rounded-lg" />
          <div className="bg-gray-200 h-40 rounded-lg" />
          <div className="bg-gray-200 h-40 rounded-lg" />
          <div className="bg-gray-200 h-40 rounded-lg" />
        </div>
      </div>
    </main>
  )
} 