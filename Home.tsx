import { Github, Mail, Linkedin, ExternalLink, Star, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import textureRed from 'figma:asset/569ef15ea2ba0a0a10e3461c70abf5bf2ba23dd5.png';
import textureBlue from 'figma:asset/088a2ec58b47e979782cb6e0a50c3eb88271d15a.png';
import textureTeal from 'figma:asset/1250ad19e6ce82c4649c45f06fe1945ebdef3c06.png';
import { projectsData } from '../data/projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#640d14] text-white flex items-center justify-center overflow-hidden">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#ffb703] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ad2831] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <div className="relative">
                  {/* Empty Placeholder Frame */}
                  <div className="w-64 h-64 rounded-lg border-4 border-[#ffb703] shadow-2xl bg-[#250902] flex items-center justify-center">
                    <div className="text-center text-[#ffb703]/40">
                      <div className="w-24 h-24 rounded-full border-2 border-[#ffb703]/40 mx-auto mb-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-xs uppercase tracking-wider">Your Photo</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-[#ffb703]/60">
                    <Star className="w-16 h-16" strokeWidth={1} />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-6xl md:text-7xl mb-6 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  alex chen
                </h1>
                <p className="text-xl md:text-2xl text-[#8ecae6] mb-8 uppercase tracking-wider" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
                  Computer Science Student & Software Engineer
                </p>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
                  Building elegant solutions to complex problems. Passionate about full-stack development, 
                  machine learning, and creating impactful software that makes a difference.
                </p>
                
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="mailto:alex.chen@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb703] text-[#250902] hover:bg-[#fb8500] transition-colors rounded-full">
                    <Mail className="w-4 h-4" />
                    Get in touch
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8ecae6] text-[#8ecae6] hover:bg-[#8ecae6]/10 transition-colors rounded-full">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#ffb703]/60 text-sm">
          scroll to explore
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 bg-[#023047]">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureBlue})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-5xl mb-12 text-[#8ecae6]" style={{ fontFamily: 'Georgia, serif' }}>
            about me.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
             I am a first year Computer Science student at UW Madison interested in robotics and software that connects to the physical world. I first got into technology by repairing my own Nintendo 3DS, taking it apart to fix hardware issues and learning how software and electronics fit together. That curiosity grew into building websites, experimenting with automation, and working with real machines instead of only code.

            Outside of class, I work as a software developer at the Design Innovation Lab where I help build the operating system that manages 3D printing and fabrication workflows. I focus on queue management, order tracking, and tools used daily by students and researchers. I am especially interested in humanoid robotics, human robot interaction, and systems that combine perception, motion, and intelligent decision making.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl mb-4 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'PostgreSQL', 
                  'MongoDB', 'Docker', 'AWS', 'Git', 'Machine Learning', 'Data Structures'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-[#219ebc] border border-[#8ecae6]/30 rounded-full text-sm text-white hover:border-[#ffb703] hover:bg-[#219ebc]/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-24 bg-[#ad2831]">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-5xl mb-12 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
            experience.
          </h2>
          
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-[#250902] border-4 border-[#ffb703] p-8 hover:border-[#8ecae6] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#ffb703] mb-2" style={{ fontFamily: 'Georgia, serif' }}>Software Engineering Intern</h3>
                  <p className="text-xl text-[#8ecae6] mb-3">TechCorp Inc.</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-white/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Summer 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Developed and deployed microservices using Node.js and Docker, improving system scalability by 40%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Collaborated with cross-functional teams to implement new features for 50,000+ active users</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Optimized database queries resulting in 60% reduction in API response time</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Node.js', 'Docker', 'PostgreSQL', 'Redis', 'AWS'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#8ecae6] border border-[#8ecae6]/40 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-[#250902] border-4 border-[#ffb703] p-8 hover:border-[#8ecae6] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#ffb703] mb-2" style={{ fontFamily: 'Georgia, serif' }}>Full Stack Developer</h3>
                  <p className="text-xl text-[#8ecae6] mb-3">StartupXYZ</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-white/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2024 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Built responsive web applications using React and TypeScript for early-stage SaaS product</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Implemented RESTful APIs and integrated third-party services (Stripe, Auth0)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Led code reviews and mentored junior developers on best practices</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'TypeScript', 'Express', 'MongoDB', 'Stripe'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#8ecae6] border border-[#8ecae6]/40 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-[#250902] border-4 border-[#ffb703] p-8 hover:border-[#8ecae6] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#ffb703] mb-2" style={{ fontFamily: 'Georgia, serif' }}>Teaching Assistant</h3>
                  <p className="text-xl text-[#8ecae6] mb-3">UC Madison CS Department</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-white/80">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2023 - Dec 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Madison, WI</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Assisted in teaching CS 61B (Data Structures) to 1,200+ students per semester</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Held office hours, graded assignments, and created educational content</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Developed automated testing framework that reduced grading time by 70%</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Java', 'Python', 'Algorithms', 'Data Structures'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#8ecae6] border border-[#8ecae6]/40 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 bg-[#f5f1e8]">
        <div 
          className="absolute top-0 left-0 w-full h-64 opacity-10"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h2 className="text-5xl mb-12 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
            selected projects.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group border-4 border-[#640d14] rounded-lg overflow-hidden hover:shadow-2xl hover:border-[#fb8500] transition-all duration-300 bg-white"
              >
                {/* Empty Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-[#219ebc] to-[#023047] flex items-center justify-center border-b-4 border-[#640d14]">
                  <div className="text-[#8ecae6]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 right-4 text-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-[#640d14] group-hover:text-[#fb8500] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#023047] border border-[#219ebc] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-[#640d14] group-hover:text-[#fb8500] transition-colors flex items-center gap-2">
                    <span>Read more</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-24 bg-[#219ebc]">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureTeal})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-5xl mb-12 text-white" style={{ fontFamily: 'Georgia, serif' }}>
            recent articles.
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Building Scalable React Applications with TypeScript',
                date: 'February 3, 2026',
                excerpt: 'A deep dive into architectural patterns and best practices for building large-scale React applications with TypeScript.',
                readTime: '8 min read'
              },
              {
                title: 'Understanding Neural Networks: A Beginner\'s Guide',
                date: 'January 18, 2026',
                excerpt: 'An accessible introduction to neural networks, covering the fundamentals of how they work and their applications.',
                readTime: '12 min read'
              },
              {
                title: 'My Journey from CS Student to Software Engineer',
                date: 'December 29, 2025',
                excerpt: 'Reflections on my journey through computer science education, internships, and landing my first full-time role.',
                readTime: '6 min read'
              },
              {
                title: 'Optimizing Database Queries: Tips and Tricks',
                date: 'December 12, 2025',
                excerpt: 'Practical strategies for improving database performance through query optimization and proper indexing.',
                readTime: '10 min read'
              }
            ].map((article, idx) => (
              <article 
                key={idx}
                className="bg-[#023047] p-8 border-4 border-[#ffb703] hover:border-[#fb8500] hover:bg-[#023047]/90 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl text-[#8ecae6] group-hover:text-[#ffb703] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    {article.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-[#ffb703] group-hover:text-[#fb8500] transition-colors flex-shrink-0 ml-4" />
                </div>
                <p className="text-sm text-[#8ecae6]/70 mb-3">{article.date} · {article.readTime}</p>
                <p className="text-white/90">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-[#800e13] text-white py-24">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-5xl mb-12 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            let's connect.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just chatting about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:alex.chen@example.com"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  alex.chen@example.com
                </a>
                
                <a 
                  href="https://github.com/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  github.com/alexchen
                </a>
                
                <a 
                  href="https://linkedin.com/in/alexchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  linkedin.com/in/alexchen
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="absolute inset-0 opacity-30 rounded-lg"
                style={{
                  backgroundImage: `url(${textureTeal})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="relative p-8 border-4 border-[#ffb703] rounded-lg bg-[#250902]/80 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-[#ffb703]" strokeWidth={1} />
                  <span className="text-sm text-[#8ecae6] uppercase tracking-wider">Currently</span>
                </div>
                <p className="text-lg mb-6 text-white">
                  Seeking full-time Software Engineering opportunities for Summer 2026
                </p>
                <div className="text-sm text-white/80">
                  <p>Based in San Francisco Bay Area</p>
                  <p className="mt-1">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t-2 border-[#ffb703]/30 text-center text-[#8ecae6]/60 text-sm">
            <p>© 2026 Alex Chen. Designed and built with care.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
