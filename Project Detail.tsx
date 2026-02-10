import { useParams, Link } from 'react-router';
import { Github, ExternalLink, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import textureRed from 'figma:asset/569ef15ea2ba0a0a10e3461c70abf5bf2ba23dd5.png';
import textureBlue from 'figma:asset/088a2ec58b47e979782cb6e0a50c3eb88271d15a.png';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#023047] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-[#ffb703]">Project Not Found</h1>
          <Link to="/" className="text-[#8ecae6] hover:text-[#ffb703] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Header */}
      <header className="relative bg-[#640d14] text-white py-24">
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#8ecae6] hover:text-[#ffb703] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
            {project.title}
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-2 bg-[#219ebc] border border-[#8ecae6]/30 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb703] text-[#250902] hover:bg-[#fb8500] transition-colors rounded-full"
            >
              <Github className="w-4 h-4" />
              View Code
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

      {/* Project Image Placeholder */}
      <section className="relative -mt-12 mb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative h-96 bg-gradient-to-br from-[#219ebc] to-[#023047] rounded-lg border-4 border-[#640d14] shadow-2xl flex items-center justify-center">
            <div className="text-[#8ecae6]/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 text-white/60 text-sm">
              Project Screenshot Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl mb-8 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
            Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl mb-8 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex gap-3 p-4 border-2 border-[#219ebc] rounded-lg hover:border-[#fb8500] hover:bg-[#8ecae6]/5 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-[#219ebc] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16 bg-[#023047]">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureBlue})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="text-4xl mb-8 text-[#8ecae6]" style={{ fontFamily: 'Georgia, serif' }}>
            Technology Stack
          </h2>
          
          <div className="space-y-6">
            {Object.entries(project.techStack).map(([category, technologies]) => (
              <div key={category}>
                <h3 className="text-xl mb-3 text-[#ffb703] capitalize" style={{ fontFamily: 'Georgia, serif' }}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(technologies as string[]).map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-[#219ebc] border border-[#8ecae6]/30 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      {project.challenges && (
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl mb-8 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="bg-white border-4 border-[#640d14] p-6 rounded-lg"
                >
                  <div className="flex gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-[#fb8500] flex-shrink-0 mt-0.5" />
                    <h3 className="text-2xl text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg ml-9">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes */}
      {project.outcomes && (
        <section className="relative py-16 bg-[#219ebc]">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl mb-8 text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, idx) => (
                <div 
                  key={idx}
                  className="bg-[#023047] border-4 border-[#ffb703] p-6 rounded-lg"
                >
                  <p className="text-white text-lg">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#640d14] text-[#ffb703] hover:bg-[#800e13] transition-colors rounded-full text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
