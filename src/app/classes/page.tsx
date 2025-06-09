import React from 'react'

export default function Classes() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="container">
        <div>
          <h1 className="section-title text-center mb-12">Yoga Classes</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Group Class In-person</h2>
              <div className="space-y-4">
                <p className="text-xl text-gray-700">Sunday - 6:30 pm - 7:30 pm (PST)</p>
                <p className="text-gray-600">Join us for an invigorating in-person yoga session in a peaceful environment.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-primary mb-6">Group Class Hybrid (Online/In-person)</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xl text-gray-700">Morning Classes</p>
                  <p className="text-gray-600">Mon/Wed - 5:45 am - 6:45 am (PST)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xl text-gray-700">Evening Classes</p>
                  <p className="text-gray-600">Mon/Wed - 5:30 pm - 6:30 pm (PST)</p>
                </div>
                <p className="text-gray-600 mt-4">Choose to join us in person or virtually from the comfort of your home.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Pricing</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">1 month (4 class Package)</span>
                  <span className="font-bold text-primary">$100</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">1 month (8 class Package)</span>
                  <span className="font-bold text-primary">$160</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700">Drop in/private classes</span>
                  <a href="tel:4083068941" className="text-accent hover:text-primary transition-colors">408-306-8941</a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://forms.gle/your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Your Class Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 