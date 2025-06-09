import React from 'react'

export default function Ayurveda() {
  return (
    <main className="min-h-screen py-20 bg-white">
      <div className="container">
        <div>
          <h1 className="section-title text-center mb-12">Ayurveda Consultations</h1>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">What is Ayurveda?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ayurveda is an ancient holistic healing system that originated in India over 5,000 years ago. 
                It focuses on creating balance between the body, mind, and spirit through personalized lifestyle 
                recommendations, diet, and natural remedies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Consultation Services</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Initial Consultation</h3>
                  <p className="text-gray-600">
                    A comprehensive assessment of your current health status, including pulse diagnosis, 
                    body constitution analysis, and personalized recommendations for diet and lifestyle.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Follow-up Sessions</h3>
                  <p className="text-gray-600">
                    Regular check-ins to monitor progress and adjust recommendations based on your body's 
                    response and changing needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://forms.gle/your-google-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 