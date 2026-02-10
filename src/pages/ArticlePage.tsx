import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f5f1e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#640d14] mb-4" style={{ fontFamily: 'Georgia, serif' }}>Article not found</h1>
          <p className="text-lg text-gray-600 mb-6">This article doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#640d14] text-white hover:bg-[#800e13] transition-colors rounded-full"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      {/* Header Navigation */}
      <div className="bg-[#640d14] text-white py-6">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#8ecae6] hover:text-[#ffb703] transition-colors mb-8"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 max-w-4xl py-16">
        {/* Article Header */}
        <header className="mb-12">
          <h1 
            className="text-5xl text-[#640d14] mb-4" 
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {article.title}
          </h1>
          <div className="flex gap-6 text-sm text-gray-600">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12 bg-white border-4 border-[#640d14] p-8 rounded-lg">
          <p className="text-lg text-[#250902] leading-relaxed">
            {article.content.intro}
          </p>
        </section>

        {/* Main Content */}
        <section className="bg-white border-4 border-[#640d14] p-8 rounded-lg mb-12">
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="mb-8 last:mb-0">
              <h2 
                className="text-3xl text-[#640d14] mb-4" 
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, pIdx) => (
                <p 
                  key={pIdx} 
                  className="text-[#250902] leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="bg-[#023047] text-white border-4 border-[#8ecae6] p-8 rounded-lg mb-12">
          <p className="text-lg leading-relaxed">
            {article.content.conclusion}
          </p>
        </section>

        {/* Back Navigation */}
        <div className="text-center pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#640d14] text-white hover:bg-[#800e13] transition-colors rounded-full"
          >
            Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
