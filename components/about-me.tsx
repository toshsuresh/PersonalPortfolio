"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About Me</span>
            <span className="ml-2"></span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pfplinkedin.PNG-8DFEwvy1CjGFwXheMAoHz8jJof3Te2.jpeg"
                  alt="Santosh Sureshkumar"
                  fill
                  className="rounded-lg object-cover object-top shadow-lg"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Hi, I'm Santosh! I'm pursuing a Computer Science degree with minors in Business and Advanced
                  Cybersecurity at UMD. I'm passionate about developing innovative software solutions and leveraging
                  data science to solve complex problems.
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    <strong>Hey, I'm Santosh Sureshkumar!</strong>
                  </p>
                  <p className="mb-4">
                    Hi, I'm Santosh! I'm pursuing a Computer Science degree with minors in Business and Advanced
                    Cybersecurity at the University of Maryland. I'm passionate about developing innovative software
                    solutions and leveraging data science to solve complex problems.
                  </p>
                  <p className="mb-4">
                    My experience spans from creating full-stack applications like FireSync for wildfire relief to
                    implementing SAP solutions at Pfizer that improved data management efficiency. I'm particularly
                    interested in the intersection of technology and social impact, as shown through my work with the
                    Geneva Censorship Team and the NPOConnect platform developed during the Code For Good hackathon.
                  </p>
                  <p>
                    When I'm not coding in Python, Java, or React.js, you can find me exploring new technologies and
                    collaborating on projects that make a meaningful difference. I believe in building technology that's
                    not just functional, but also creates positive change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Professional Experience
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 relative"
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src="/jpmorgan-logo.png"
                          alt="JPMorgan Chase & Co"
                          width={64}
                          height={64}
                          className="rounded-full object-cover scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">Software Engineer Intern</h3>
                        <h4 className="text-lg text-purple-400">JPMorgan Chase & Co</h4>
                        <div className="flex items-center justify-start gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">June 2025 - August 2025</span>
                        </div>
                        <div className="flex items-center justify-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Wilmington, DE</span>
                        </div>
                        <p className="mt-4 text-gray-300 text-left">
                          Part of the CIB Finance LOB, working with the Genie LLM in Databricks to optimize workflow
                          processes and enhance data-driven decision making across financial operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Point (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row-reverse gap-8 relative"
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/umdicon-89KaUCockpvMQBQTqGbg463XXfLUFL.webp"
                          alt="University of Maryland"
                          width={56}
                          height={56}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">Undergraduate Researcher</h3>
                        <h4 className="text-lg text-purple-400">University of Maryland</h4>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">January 2025 - Present</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">College Park, MD</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-center md:text-left">
                      Created the user interface of the server-side training website for the Geneva Censorship Team,
                      improving testing efficiency by 45% and supporting over 200 daily monitoring operations.
                    </p>
                  </div>

                  {/* Timeline Point (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 relative"
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pfizericon-Yf4N7NYQE28LBIHgG7RMF1ho8brCkb.png"
                          alt="Pfizer"
                          width={56}
                          height={56}
                          className="rounded-full object-contain bg-white"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">SAP Technical Developer</h3>
                        <h4 className="text-lg text-purple-400">Pfizer</h4>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">May 2024 - June 2025</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Collegeville, PA</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-center md:text-left">
                      Created and implemented SAP solutions to make business processes more efficient and improve data
                      management by 15% using ABAP and Python programming. Conducted in-depth testing and evaluation of
                      new SAP Data Intelligence Modeler features.
                    </p>
                  </div>

                  {/* Timeline Point (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row-reverse gap-8 relative"
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UTDicon-Y1S7OgF7zRp9pFb40DP0HGYKLvyG4A.png"
                          alt="UT Dallas"
                          width={56}
                          height={56}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">Big Data Analytics Intern</h3>
                        <h4 className="text-lg text-purple-400">UT-Dallas Internship Program</h4>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">June - August 2022</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Dallas, TX</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-center md:text-left">
                      Used data samples from Kaggle and leveraged statistical analysis and machine learning techniques
                      such as regression analysis, clustering, and neural networks with Dr. Khan.
                    </p>
                  </div>

                  {/* Timeline Point (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 relative"
                >
                  {/* Content */}
                  <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UTDicon-Y1S7OgF7zRp9pFb40DP0HGYKLvyG4A.png"
                          alt="UT Dallas"
                          width={56}
                          height={56}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">Concurrent Computing Intern</h3>
                        <h4 className="text-lg text-purple-400">UT-Dallas Internship Program</h4>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">June - August 2021</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">Dallas, TX</span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300 text-center md:text-left">
                      Applied concurrent computing concepts to complete Java projects with 40% more efficiency by
                      implementing threading. Leveraged multi-threading to optimize performance, reduce processing
                      times, and handle large datasets.
                    </p>
                  </div>

                  {/* Timeline Point (hidden on mobile) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
