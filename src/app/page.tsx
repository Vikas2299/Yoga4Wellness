'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:yoga4wellness21@gmail.com?subject=Yoga4Wellness Inquiry';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Yoga background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-gray-100/50" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
              Yoga4Wellness
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-8">
              By Seema Mangla
            </p>
            <a href="/classes" className="btn btn-primary">
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Hi, I am a Yoga & Wellness professional coach !

                Since my childhood, I have always been very active and loved staying fit.  I graduated as an engineer and started working in IT industry.
                I was not doing too much yoga until I injured my knees in my outdoor ventures- hiking/running. Because of bad postures while running/hiking, my injury gradually turned into knee arthritis.  To take care of my knees I started practicing Yoga regularly and it became part of my life. Yoga not only allowed me to pursue my passion for hiking, It also helped me to relax and calm my mind and handle many stressful situations in life.
                Realizing these benefits, both mentally and physically, I developed an immense passion for yoga and I decided to become a yoga teacher in 2018 and did my first 200H yoga teacher training. I  started teaching yoga to few of my friends.
                I enjoyed practicing and teaching yoga so much that I quit my engineering job and became a full time yoga teacher in 2020.  Since then I have been practicing and enhancing my yoga skill through different  yoga teacher trainings. 

                I feel fortunate to be able to find my passion and become an  instrument to spread this profound wisdom and help people experience the magic of Yoga like I experienced. 

                If you are looking for Physical/Mental wellness, I invite you to join me a journey to self with me!!
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary text-xl mb-4">Certifications & Experience</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>500H Certified Yoga Teacher by Yoga Alliance</li>
                  <li>Certified Prenatal Yoga Coach</li>
                  <li>Certified Postnatal Yoga Coach</li>
                  <li>Certified Meditation/Pranayama Teacher</li>
                  <li>Certified Pilate Instructor</li>
                  <li>Certified Kids Yoga instructor</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[500px] w-[500px] rounded-lg overflow-hidden mb-6">
                <Image
                  src="/yoga-teacher.jpg"
                  alt="Seema Mangla teaching yoga"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://www.facebook.com/people/Yoga4Wellness-With-Seema-Mangla/100063945394219/"
                  className="text-accent hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a 
                  href="https://www.instagram.com/seema_mangla/"
                  className="text-accent hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a 
                  href="https://www.youtube.com/@yoga4wellnessbyseemamangla"
                  className="text-accent hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-3xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/seema-mangla-05b4b83/"
                  className="text-accent hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="w-full space-y-4 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Yoga Experience</h4>
                  <p className="text-gray-600">Practicing since 2010 / Teaching since 2018</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-2">Yoga Styles</h4>
                  <p className="text-gray-600">Gentle, Vinyasa, Ashtanga, Power, Core, Hatha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-accent text-2xl" />
                  <div>
                    <h3 className="font-bold text-primary">Phone</h3>
                    <p className="text-gray-600">408-306-8941</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="mailto:yoga4wellness21@gmail.com"
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <FaEnvelope className="text-accent text-2xl group-hover:text-primary transition-colors" />
                    <div>
                      <h3 className="font-bold text-primary">Email</h3>
                      <p className="text-gray-600 group-hover:text-accent transition-colors">yoga4wellness21@gmail.com</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.facebook.com/people/Yoga4Wellness-With-Seema-Mangla/100063945394219/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <FaFacebook className="text-accent text-2xl group-hover:text-primary transition-colors" />
                    <div>
                      <h3 className="font-bold text-primary">Social</h3>
                      <p className="text-gray-600 group-hover:text-accent transition-colors">Find us on Facebook</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Location</h3>
                <p className="text-gray-600 mb-4">Cupertino, CA 95014, USA</p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101904.2931563776!2d-122.0936!3d37.323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sCupertino%2C%20CA%2095014!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 