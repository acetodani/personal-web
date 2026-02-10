import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/projects';
import textureRed from '../assets/backgrounds/redbackground.jpeg?url';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#640d14] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#ffb703]">Project Not Found</h1>
          <Link to="/" className="text-[#8ecae6] hover:text-[#ffb703] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Header */}
      <header className="relative bg-[#640d14] text-white py-12">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#8ecae6] hover:text-[#ffb703] transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl mb-4 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
            {project.title}
          </h1>
          <p className="text-xl text-white/90 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb703] text-[#250902] hover:bg-[#fb8500] transition-colors rounded-full"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8ecae6] text-[#8ecae6] hover:bg-[#8ecae6]/10 transition-colors rounded-full"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Project Image */}
      <section className="relative py-12 bg-gradient-to-br from-[#219ebc] to-[#023047]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-[#023047] border-4 border-[#ffb703] rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-[#219ebc] to-[#023047] flex items-center justify-center">
              <div className="text-[#8ecae6]/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl mb-6 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
            Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 bg-[#219ebc]">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundColor: '#1a7a96'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <h2 className="text-4xl mb-8 text-white" style={{ fontFamily: 'Georgia, serif' }}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-[#023047] p-6 border-4 border-[#ffb703] hover:border-[#fb8500] transition-colors"
              >
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#ffb703] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-2 text-[#8ecae6]" style={{ fontFamily: 'Georgia, serif' }}>
                      {feature.split(':')[0]}
                    </h3>
                    <p className="text-white/90">
                      {feature.split(':').slice(1).join(':').trim()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl mb-8 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(project.techStack).map(([category, technologies]) => (
              <div key={category} className="bg-white p-6 border-4 border-[#640d14] hover:border-[#fb8500] transition-colors">
                <h3 className="text-xl mb-4 text-[#640d14] capitalize" style={{ fontFamily: 'Georgia, serif' }}>
                  {category}
                </h3>
                <ul className="space-y-2">
                  {technologies.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#219ebc] rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="relative py-16 bg-[#ad2831]">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url(${textureRed})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <h2 className="text-4xl mb-8 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, idx) => (
              <div 
                key={idx}
                className="bg-[#250902] p-8 border-4 border-[#ffb703] hover:border-[#8ecae6] transition-colors"
              >
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-[#ffb703] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl mb-3 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
                      {challenge.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <section className="py-16 bg-[#f5f1e8]">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl mb-8 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
              Outcomes & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.outcomes.map((outcome, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border-4 border-[#219ebc] hover:border-[#640d14] transition-colors text-center"
              >
                <div className="text-4xl mb-3 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
                  {outcome.split(' ')[0]}
                </div>
                <p className="text-gray-700">
                  {outcome.split(' ').slice(1).join(' ')}
                </p>
              </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="relative bg-[#800e13] text-white py-16">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
          <h2 className="text-4xl mb-6 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
            Interested in this project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Check out the code on GitHub or see it in action with the live demo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffb703] text-[#250902] hover:bg-[#fb8500] transition-colors rounded-full text-lg"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#8ecae6] text-[#8ecae6] hover:bg-[#8ecae6]/10 transition-colors rounded-full text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#ffb703] text-[#ffb703] hover:bg-[#ffb703]/10 transition-colors rounded-full text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
