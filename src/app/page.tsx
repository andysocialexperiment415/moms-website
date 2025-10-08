// page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  const testimonials = [
    { text: "Lana's Preschool has been an incredible experience for my child. The nurturing environment and personalized attention have made all the difference.", author: "Parent A" },
    { text: "I can't thank Lana enough for her dedication and creativity in teaching. My child loves going to school every day!", author: "Parent B" },
    { text: "Seeing my child flourish in such a supportive setting is heartwarming. We couldn't have asked for a better start to their education.", author: "Parent C" },
    { text: "The staff at Lana's Preschool are incredibly warm and welcoming. They truly care about each child's development.", author: "Parent D" },
    { text: "A wonderful place for children to learn and grow. I highly recommend Lana's Preschool to any parent.", author: "Parent E" },
    { text: "My child's confidence has soared since attending Lana's Preschool. It's a magical place for little ones.", author: "Parent F" },
    { text: "Every day is a new adventure at Lana's Preschool, filled with learning and discovery.", author: "Parent G" },
    { text: "The curriculum at Lana's Preschool is both fun and educational. My child is always excited to go!", author: "Parent H" },
    { text: "Lana has a unique way of making every child feel special and heard. An amazing preschool!", author: "Parent I" }
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <>
      <Head>
        <title>Daycare in San Francisco | Lana's Preschool</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Playfair+Display&display=swap" rel="stylesheet" />
        <meta name="description" content="A warm, home-like preschool where children feel cherished, confident, and genuinely ready for kindergarten." />
      </Head>
      <main className="font-sans text-gray-900">

        {/* Hero Section - COPY STYLING FROM OTHER SECTIONS */}
        <section 
          className="relative min-h-[700px] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/hero-desktop9.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 p-8 text-center text-black max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold drop-shadow-md mb-4">Where Your Child Falls in Love with Learning</h1>
            <p className="text-xl md:text-2xl mb-6">30+ Years in the Sunset District</p>
            <p className="text-lg md:text-2xl mb-8">A warm, home-like preschool where children feel cherished, confident, and genuinely ready for kindergarten.</p>
            <Link href="#contact-form">
              <span className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer text-sm md:text-base">
                Contact Us Today
              </span>
            </Link>
          </div>
        </section>

        {/* About Lana Section - CSS BACKGROUND IMAGE */}
        <section 
          className="relative min-h-[600px] flex items-end justify-center"
          style={{
            backgroundImage: 'url(/about-desktop9.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 p-8 max-w-4xl mx-auto text-center text-gray-700">
            {/* Cloud overlay covering title and content */}
            <div 
              className="absolute z-5"
              style={{
                backgroundImage: 'url(/aboutmecloud3.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '143%',
                height: '572px',
                left: '-21.5%',
                top: '-8%'
              }}
            ></div>
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-center text-blue-700 mb-8">About Lana</h2>
            <div className="relative z-10 p-6 md:p-8">
              <p className="text-sm md:text-base leading-relaxed">
                Lana has been caring for children in the Sunset District for over 30 years, bringing both heart and expertise to early childhood education. A graduate of the Kishinev Pedagogical Institute with a Bachelor's degree in Psychology and Pedagogy of Early Childhood Education, she's also Pediatric First Aid and CPR certified.
                <br /><br />
                What makes Lana special is her unique "Learning Alphabet and Mathematics Through Arts and Crafts" technique - turning potentially scary subjects into creative adventures. Her background as a production director of children's theatrical groups brings imagination and storytelling into every day.
                <br /><br />
                <em>"What I love most is running into former students years later and seeing the confident, interesting people they&apos;ve become. That spark we nurture here never really goes away."</em>
                <br />
                <span className="block mt-3 font-semibold">- Lana</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Families Choose Our Preschool - CSS BACKGROUND IMAGE */}
        <section 
          className="relative min-h-[700px] py-16"
          style={{
            backgroundImage: 'url(/choose-desktop10.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">Why Families Choose Our Preschool</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconclean.png" alt="Safe Environment Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Safe, clean environment where parents feel completely confident leaving their most precious treasure.</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconteacher.png" alt="Small Groups Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Small groups mean your child gets individual attention while learning to collaborate and share with friends.</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconsfood.png" alt="Home-cooked Meals Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Delicious home-cooked meals made with love (no processed junk).</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconsplayground.png" alt="Playground Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Cozy rest time and joyful outdoor play every day.</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconmap.png" alt="Reading and Math Fun Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Reading and math become fun adventures, not scary subjects.</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconsocial2.png" alt="Social Skills Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Your child develops social skills and confidence through group play that makes kindergarten feel easy.</p>
              </li>
              <li className="p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center col-span-1 md:col-span-2 lg:col-span-3">
                <img src="/iconhero2.png" alt="Kindergarten Ready Icon" className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16" />
                <p className="text-sm md:text-base">Your child will be kindergarten-ready, both academically and socially prepared for their next big step.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Early Learning Investment - SHORTER SECTION */}
        <section 
          className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/early-desktop10.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-6">Early Learning Investment</h2>
            <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg">
              <ul className="space-y-2 text-sm md:text-base">
                <li className="text-gray-700">- Full-time loving care (8 AM - 6 PM, Monday-Friday)</li>
                <li className="text-gray-700">- Kindergarten readiness curriculum tailored to your child&apos;s pace</li>
                <li className="text-gray-700">- Comprehensive developmental program (math, literacy, science, arts, music)</li>
                <li className="text-gray-700">- Daily individual attention and emotional support</li>
                <li className="text-gray-700">- Five nutritious home-cooked meals daily (breakfast, lunch, dinner, 2 snacks)</li>
                <li className="text-gray-700">- Creative arts program including clay work, painting, and crafts</li>
                <li className="text-gray-700">- Musical development with instruments and theatrical performances</li>
                <li className="text-gray-700">- Fine and gross motor skill development plus writing preparation</li>
                <li className="text-gray-700">- All learning materials and creative supplies for your child&apos;s growth</li>
                <li className="text-gray-700">- A safe, nurturing environment where your child can truly thrive</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Child's Guaranteed Growth - CSS BACKGROUND IMAGE */}
        <section 
          className="relative min-h-[700px] py-16"
          style={{
            backgroundImage: 'url(/growth-desktop9.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-700 mb-12">Your Child&apos;s Guaranteed Growth</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconconfident.png" alt="Confident Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Feels confident in new situations and making friends</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/icongrouptalk.png" alt="Group Talk Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Speaks up confidently in groups and shares ideas without hesitation</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconemotion.png" alt="Emotion Management Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Develops healthy eating habits and learns to manage emotions like a pro</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconpuzzle.png" alt="Puzzle Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Navigates social situations with ease - sharing, taking turns, and resolving conflicts becomes second nature</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconsolve.png" alt="Solve Challenges Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Approaches new challenges with curiosity instead of fear</p>
              </li>
              <li className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <img src="/iconskill.png" alt="Skill Mastery Icon" className="mx-auto mb-4 w-10 h-10 md:w-12 md:h-12" />
                <p className="text-sm md:text-base">Masters foundational skills that make kindergarten feel exciting, not scary</p>
              </li>
              <li className="p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center col-span-1 md:col-span-2 lg:col-span-3">
                <img src="/iconschool.png" alt="School Ready Icon" className="mx-auto mb-4 w-12 h-12 md:w-16 md:h-16" />
                <p className="text-sm md:text-base">Walks into kindergarten feeling prepared, confident, and genuinely excited to learn</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials Carousel - SHORTER SECTION */}
        <section 
          className="relative min-h-[600px] md:min-h-[600px] py-16"
          style={{
            backgroundImage: 'url(/testimonials-desktop10.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-12">From Our Preschool Family</h2>
            <div className="relative flex items-center">
              {/* Navigation Arrows */}
              <button onClick={prevSlide} className="text-gray-700 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 absolute left-0 z-10">
                &#10094;
              </button>
              <div className="overflow-hidden w-full max-w-full flex justify-center py-4">
                <div className="flex transition-transform transform ease-in-out duration-300" style={{ transform: `translateX(-${current * 20}%)` }}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg text-center flex-shrink-0 w-full md:w-1/5 h-64 mx-1">
                      <p className="italic text-sm md:text-base">{testimonial.text}</p>
                      <span className="block mt-4 font-bold text-sm md:text-base">- {testimonial.author}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={nextSlide} className="text-gray-700 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 absolute right-0 z-10">
                &#10095;
              </button>
              {/* Dot Indicators */}
              <div className="flex justify-center mt-4 absolute left-0 right-0" style={{ bottom: '-16px' }}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mx-2 bg-blue-500 rounded-full cursor-pointer ${index === current ? "opacity-100" : "opacity-50"}`}
                    onClick={() => setCurrent(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form - CSS BACKGROUND IMAGE */}
        <section 
          id="contact-form" 
          className="relative min-h-[1130px] flex items-end justify-center"
          style={{
            backgroundImage: 'url(/contact-desktop10.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-700 mb-8">Get Your Free Kindergarten Readiness Checklist & Schedule A Visit</h2>
            <form className="space-y-4 bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="parent-name">
                    Parent Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="parent-name" type="text" placeholder="Jane Doe" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="[PHONE]" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="[EMAIL]" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="child-age">
                    Child's Age
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="child-age" type="number" placeholder="3" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="start-date">
                    Preferred Start Date
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="start-date" type="date" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message/Questions
                  </label>
                  <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" placeholder="Your message here..."></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between">
            <p className="mb-4 md:mb-0">License Number: [License Number]</p>
            <p className="mb-4 md:mb-0">Contact Info: xyz</p>
            <p>Social Links: [Links to Social Media]</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;



