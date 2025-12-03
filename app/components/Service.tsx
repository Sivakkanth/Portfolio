import { Code, Edit, PenTool, Smartphone } from 'lucide-react'
import React from 'react'

export default function Service() {
    const services = [
        {
            title: 'Full Stack Web Development',
            description: 'I am a passionate full-stack web developer dedicated to creating stunning, responsive, and user-friendly websites. With a keen eye for design and a commitment to delivering exceptional user experiences, I transform ideas into digital reality.',
            icon: <Code className='text-[#0ef] h-16 w-16 font-extrabold mb-4'/>,
        },
        {
            title: 'Mobile App Development',
            description: 'I am a skilled mobile app developer with a passion for creating innovative and user-friendly applications. With extensive experience in both iOS and Android platforms, I bring your ideas to life through seamless and intuitive mobile experiences.',
            icon: <Smartphone className='text-[#0ef] h-16 w-16 mb-4'/>,
        },
        {
            title: 'UI/UX Design',
            description: 'I am a seasoned UI/UX designer with 2+ years of experience creating intuitive and engaging digital experiences. My mission is to transform complex ideas into user-friendly designs that drive engagement and satisfaction.',
            icon: <PenTool className='text-[#0ef] h-16 w-16 mb-4'/>,
        }
    ]
  return (
    <section id="service" className="py-20 text-white max-w-7xl mx-auto z-10">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                My <span className="text-[#0ef]">Services</span>
            </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, idx) => <div key={idx} className="bg-[#0b1a3a] p-8 rounded-lg shadow-lg shadow-[#0ef]/50 transition-transform transform hover:-translate-y-2 border border-[#0ef]/10">
                    {service.icon}
                    <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                    <p className="text-gray-200 mb-6">
                        {service.description}
                    </p>
                    <a href="#hire" className="inline-block bg-[#0ef] text-[#081b29] px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                        HireMe <i className='bx bx-right-arrow-alt ml-2'></i>
                    </a>
                </div>)}
            </div>
        </div>
    </section>
  )
}
