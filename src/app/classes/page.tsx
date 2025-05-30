import React from 'react'

export default function Classes() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="container">
        <h1 className="section-title text-center">Yoga Classes</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-primary mb-4">Group Class In-person</h2>
            <p className="text-gray-700">Sunday - 6:30 pm - 7:30 pm (PST)</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-primary mb-4">Group Class Hybrid (Online/In-person)</h2>
            <p className="text-gray-700">Mon/Wed - 5:45 am - 6:45 am (PST)</p>
            <p className="text-gray-700">Mon/Wed - 5:30 pm - 6:30 pm (PST)</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-bold text-primary mb-2">Pricing</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>1 month (4 class Package) - $100</li>
              <li>1 month (8 class Package) - $160</li>
              <li>Drop in/private classes: <a href="tel:4083068941" className="text-accent underline">408-306-8941</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 