import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import textureRed from '../assets/backgrounds/redbackground.jpeg?url';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#023047] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#ffb703] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Article not found
          </h1>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#8ecae6] hover:text-[#ffb703] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8] relative">
      {/* Background texture for content area */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${textureRed})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Hero Header */}
      <header className="relative bg-[#640d14] text-white py-20 overflow-hidden">
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
          <div className="absolute top-10 right-20 w-96 h-96 bg-[#ffb703] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#ad2831] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#8ecae6] hover:text-[#ffb703] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-[#ffb703]" style={{ fontFamily: 'Georgia, serif' }}>
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-[#8ecae6]/80">
            <span>{article.date}</span>
            <span className="text-[#ffb703]">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="relative py-16">
        {/* Background texture */}
        <div 
          className="absolute inset-0 opacity-15 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          {/* Introduction */}
          <div className="bg-white border-4 border-[#640d14] p-8 md:p-12 mb-12 shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 first-letter:text-7xl first-letter:font-bold first-letter:text-[#640d14] first-letter:mr-3 first-letter:float-left" style={{ fontFamily: 'Georgia, serif' }}>
              {article.content.intro}
            </p>
          </div>

          {/* Main Content - Single Container */}
          <div className="bg-white border-4 border-[#640d14] p-8 md:p-12 shadow-2xl">
            <div className="space-y-8">
              {article.content.sections.map((section, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl md:text-4xl mb-4 text-[#640d14]" style={{ fontFamily: 'Georgia, serif' }}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4 mb-8">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-lg leading-relaxed text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Conclusion within same container */}
              <div className="pt-8 border-t-2 border-[#640d14]/20">
                <h2 className="text-3xl md:text-4xl mb-4 text-[#640d14]" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Final Thoughts
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {article.content.conclusion}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center">
            <div className="w-16 h-1 bg-[#640d14]"></div>
            <div className="w-3 h-3 mx-4 bg-[#ffb703] rotate-45"></div>
            <div className="w-16 h-1 bg-[#640d14]"></div>
          </div>

          {/* Back to Articles */}
          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-lg text-[#640d14] hover:text-[#fb8500] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="relative bg-[#800e13] text-white py-12 overflow-hidden">
        {/* Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${textureRed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-[#8ecae6]/60 text-sm">
            © 2026 Dani Almalaki. Designed and built with care.
          </p>
        </div>
      </footer>
    </div>
  );
}