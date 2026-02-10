import { Github, Mail, Linkedin, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import textureRed from '../assets/backgrounds/redbackground.jpeg?url';
import { projectsData } from '../data/projects';
import { articles } from '../data/articles';

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
                  {/* Photo Frame */}
                  <img 
                    src="/assets/images/myPhoto.png" 
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
                  Dani Almalaki
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
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
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
           I am a first year CS student at UW Madison interested in robotics and software that connects to the physical world. </p>
              <p className="text-lg text-white/90 leading-relaxed">
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
                  <h3 className="text-2xl text-[#ffb703] mb-1" style={{ fontFamily: 'Georgia, serif' }}>Design and Innovation Lab SWE</h3>
                  <p className="text-sm text-[#ffb703] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Oct 2025 - Present</p>
                  <p className="text-xl text-[#8ecae6] mb-3">Software Engineer</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Built full stack dashboard for 3D print queue management using React and internal tooling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Translated user needs into software features and maintained Git based development workflow</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Full Stack', 'Git', 'Dashboard Development'].map((tech) => (
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
                  <h3 className="text-2xl text-[#ffb703] mb-1" style={{ fontFamily: 'Georgia, serif' }}>Amazon AWS Software Engineering Intern</h3>
                  <p className="text-sm text-[#ffb703] mb-3" style={{ fontFamily: 'Georgia, serif' }}>May - September 2026</p>
                  <p className="text-xl text-[#8ecae6] mb-3">Software Engineering Intern</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Developed scalable backend services on AWS with production code and automated testing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Designed secure APIs and improved system reliability through monitoring and performance tuning</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['AWS', 'Backend', 'API Design', 'Testing', 'Monitoring'].map((tech) => (
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
                  <h3 className="text-2xl text-[#ffb703] mb-1" style={{ fontFamily: 'Georgia, serif' }}>Wisconsin Humanoids</h3>
                  <p className="text-sm text-[#ffb703] mb-3" style={{ fontFamily: 'Georgia, serif' }}>Oct 2025 - Present</p>
                  <p className="text-xl text-[#8ecae6] mb-3">AlohaMini project</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Contribute to the AlohaMini humanoid project with work on teleoperation, data collection, and system integration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ffb703] mt-1">•</span>
                  <span>Present research and demonstrations at campus expos to showcase learning-based manipulation and motion control</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Python', 'ROS', 'Machine Learning', 'Robotics', 'Transformers'].map((tech) => (
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
            {projectsData.map((project, idx) => {
              const isActive = idx === 0;
              const cardClasses = isActive
                ? 'group border-4 border-[#640d14] rounded-lg overflow-hidden hover:shadow-2xl hover:border-[#fb8500] transition-all duration-300 bg-white'
                : 'border-4 border-[#640d14] rounded-lg overflow-hidden bg-white opacity-70';

              const cardContent = (
                <>
                  {/* Empty Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-[#219ebc] to-[#023047] flex items-center justify-center border-b-4 border-[#640d14]">
                    <div className="text-[#8ecae6]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {isActive && (
                      <div className="absolute top-4 right-4 text-[#ffb703] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-[#640d14] group-hover:text-[#fb8500] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                      {isActive ? project.title : 'Coming soon'}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {isActive ? project.description : 'More projects are on the way.'}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-[#8ecae6]/20 text-[#023047] border border-[#219ebc] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {isActive ? (
                      <div className="text-sm text-[#640d14] group-hover:text-[#fb8500] transition-colors flex items-center gap-2">
                        <span>Read more</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="text-sm text-[#640d14]">Not available yet</div>
                    )}
                  </div>
                </>
              );

              return isActive ? (
                <Link key={project.id} to={`/project/${project.id}`} className={cardClasses}>
                  {cardContent}
                </Link>
              ) : (
                <div key={project.id} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative py-24 bg-[#219ebc]">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
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
            {articles.map((article, idx) => {
              const isActive = idx === 0;
              const articleContent = (
                <>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl text-[#8ecae6] group-hover:text-[#ffb703] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                      {isActive ? article.title : 'Coming soon'}
                    </h3>
                    {isActive && (
                      <ExternalLink className="w-5 h-5 text-[#ffb703] group-hover:text-[#fb8500] transition-colors flex-shrink-0 ml-4" />
                    )}
                  </div>
                  <p className="text-sm text-[#8ecae6]/70 mb-3">{article.date} · {article.readTime}</p>
                  <p className="text-white/90">
                    {isActive ? article.excerpt : 'More articles are on the way.'}
                  </p>
                </>
              );

              return isActive ? (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className="bg-[#023047] p-8 border-4 border-[#ffb703] hover:border-[#fb8500] hover:bg-[#023047]/90 transition-all cursor-pointer group block"
                >
                  {articleContent}
                </Link>
              ) : (
                <article
                  key={article.id}
                  className="bg-[#023047] p-8 border-4 border-[#ffb703] opacity-70"
                >
                  {articleContent}
                </article>
              );
            })}
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
          
          <div className="grid md:grid-cols-2 gap-6">
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
              {/* Gradient Blur Shadow Glow - Darker */}
              <div className="absolute -inset-6 opacity-20 blur-3xl pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-black rounded-lg"></div>
              </div>
              
              {/* Textured Depth Layers */}
              <div 
                className="absolute inset-0 opacity-40 rounded-lg mix-blend-overlay"
                style={{
                  backgroundImage: `url(${textureRed})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              <div 
                className="absolute inset-0 opacity-30 rounded-lg mix-blend-overlay"
                style={{
                  backgroundColor: '#1a7a96'
                }}
              ></div>
              
              {/* Main Content Box with Darker Sharp Shadow */}
              <div 
                className="relative p-8 border-4 border-[#ffb703] rounded-lg bg-[#250902]/80 backdrop-blur-sm transition-all duration-300"
                style={{
                  boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-[#ffb703]" strokeWidth={1} />
                  <span className="text-sm text-[#8ecae6] uppercase tracking-wider">Currently</span>
                </div>
                <p className="text-lg mb-4 text-white">
                  Full time student at UW Madison
                </p>
                <div className="text-sm text-white/80">
                  <p className="mb-2">Current classes:</p>
                  <ul className="space-y-1">
                    <li>CS 300: Data Structures and Programming</li>
                    <li>CS 252: Computer Engineering I</li>
                    <li>STAT 240: Programming in R and Data Statistics</li>
                  </ul>
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
