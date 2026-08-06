import React from 'react'

const Education = () => {
  return (
    <section
  id="educations"
  className="py-24 px-[12vw] md:px-[7vw] lg:px-[4vw] font-sans bg-skills-gradient relative"
>
  <div className="container mx-auto max-w-7xl">
    <h2 className="text-white text-3xl md:text-6xl font-bold mb-4 text-center">
      Education
    </h2>

    <p className="text-gray-400 text-center mb-12 max-w-6xl mx-auto text-xl">
      The academic institutions and programs that have contributed to my knowledge and growth.
    </p>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      
      <div className="bg-[#111827] rounded-xl border border-gray-700 shadow-lg p-5 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-2">
          Bachelor of Computer Application
        </h3>
        

        <h1 className="text-gray-300 text-xl">
          Mahatma Gandhi Kashi Vidhyapeeth Varanasi
        </h1>

        <p className='text-gray-400'>
          Graduated with 68% marks in 2027 from MGKVP Varanasi. This degree provided a strong foundation in computer software and practices, enhancing my skill and tech knowledge.
        </p>
      </div>

      <div className="bg-[#111827] rounded-xl border border-gray-700 shadow-lg p-5 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-3xl font-bold text-white mb-2">
          Intermediate (XII)
        </h3>

        <h1 className='text-gray-300 text-2xl'>Board: UP, Alahabad</h1>

        <p className="text-gray-400">
          Completed with 80.00% marks in 20224 from Hathi barni inter collage, Varanasi. Focused on advanced Science subjects, preparing me for higher education and a career in IT.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}

export default Education
