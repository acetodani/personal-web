import { Github, Mail, Linkedin, ExternalLink, Star } from 'lucide-react';
import textureRed from './assets/backgrounds/redbackground.jpeg?url';

export default function App() {
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
                  {/* Photo Frame */}
                  <img 
                    src="/assets/images/me.png" 
                    alt="Profile" 
                    className="w-64 h-64 rounded-lg border-4 border-[#ffb703] shadow-2xl object-cover object-center scale-110"
                  />
                  <div className="absolute -bottom-4 -right-4 text-[#ffb703]/60">
                    <Star className="w-16 h-16" strokeWidth={1} />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-6xl md:text-7xl mb-6 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Dani A.
                </h1>
                <p className="text-xl md:text-2xl text-[#8ecae6] mb-8 uppercase tracking-wider" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em' }}>
                  Computer Science Student & Data Science
                </p>
                <p className="text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
                  Building elegant solutions to complex problems. Passionate about full-stack development, 
                  machine learning, and creating impactful software that makes a difference.
                </p>
                
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="mailto:almalaki.dev@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb703] text-[#250902] hover:bg-[#fb8500] transition-colors rounded-full">
                    <Mail className="w-4 h-4" />
                    Get in touch
                  </a>
                  <a href="https://github.com/acetodani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8ecae6] text-[#8ecae6] hover:bg-[#8ecae6]/10 transition-colors rounded-full">
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
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundColor: '#022E46'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-5xl mb-12 text-[#8ecae6]" style={{ fontFamily: 'Georgia, serif' }}>
            about me.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
               I am a first year Computer Science student at UW Madison interested in humanoid robotics and software that connects code to the physical world.

                I work as a software developer at the Design Innovation Lab building an operating system for 3D printing workflows, similar to manufacturing platforms. I helped develop queue and job routing for 32 networked printers, order tracking tools used daily by staff and researchers, and features that support hundreds of jobs per week. The system is being scaled to roughly 10,000 orders per academic year with a focus on reliability and usability.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                I am passionate about robotics, automation, and creating practical systems that people actually rely on.

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
            {[
              {
                title: 'TaskFlow',
                description: 'A collaborative project management tool built with React, Node.js, and PostgreSQL. Features real-time updates and team collaboration.',
                tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
                github: 'https://github.com/alexchen/taskflow',
                demo: 'https://taskflow-demo.com'
              },
              {
                title: 'ML Image Classifier',
                description: 'Deep learning model for image classification using TensorFlow and Python. Achieved 94% accuracy on test dataset.',
                tags: ['Python', 'TensorFlow', 'Machine Learning'],
                github: 'https://github.com/alexchen/ml-classifier'
              },
              {
                title: 'CodeSnippet',
                description: 'A developer-focused snippet manager with syntax highlighting and cloud sync. Built for productivity.',
                tags: ['TypeScript', 'React', 'Firebase'],
                github: 'https://github.com/alexchen/codesnippet',
                demo: 'https://codesnippet-app.com'
              },
              {
                title: 'Algorithm Visualizer',
                description: 'Interactive web app for visualizing sorting and pathfinding algorithms. Educational tool for CS students.',
                tags: ['JavaScript', 'D3.js', 'Algorithms'],
                github: 'https://github.com/alexchen/algo-viz',
                demo: 'https://algo-visualizer.com'
              }
            ].map((project, idx) => (
              <div key={idx} className="group border-4 border-[#640d14] rounded-lg overflow-hidden hover:shadow-2xl hover:border-[#fb8500] transition-all duration-300 bg-white">
                {/* Empty Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-[#219ebc] to-[#023047] flex items-center justify-center border-b-4 border-[#640d14]">
                  <div className="text-[#8ecae6]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#023047] border border-[#219ebc] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#640d14] hover:text-[#fb8500] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#640d14] hover:text-[#fb8500] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-24 bg-[#219ebc]">
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundColor: '#1a7a96'
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
                  href="mailto:almalaki.dev@gmail.com"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  almalaki.dev@gmail.com
                </a>
                
                <a 
                  href="https://github.com/acetodani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  github.com/acetodani
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/daniahalmalaki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-[#8ecae6] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#ffb703] flex items-center justify-center group-hover:border-[#8ecae6] group-hover:bg-[#8ecae6]/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  linkedin.com/in/daniahalmalaki
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Color Overlay */}
              <div 
                className="absolute inset-0 opacity-30 rounded-lg"
                style={{
                  backgroundColor: '#1a7a96'
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
            <p>© 2026 Dani Almalaki. Designed and built with care.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
