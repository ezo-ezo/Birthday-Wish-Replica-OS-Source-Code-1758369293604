import React, { useState } from 'react';
import { MessageSquare, Heart, RefreshCw, Star } from 'lucide-react';

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      id: 1,
      text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
      author: "Maya Angelou",
      category: "Love"
    },
    {
      id: 2,
      text: "You are my sun, my moon, and all my stars.",
      author: "E.E. Cummings",
      category: "Romance"
    },
    {
      id: 3,
      text: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Roy Croft",
      category: "Love"
    },
    {
      id: 4,
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu",
      category: "Wisdom"
    },
    {
      id: 5,
      text: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn",
      category: "Life"
    },
    {
      id: 6,
      text: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
      category: "Philosophy"
    },
    {
      id: 7,
      text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
      category: "Dreams"
    },
    {
      id: 8,
      text: "I have found the one whom my soul loves.",
      author: "Song of Solomon 3:4",
      category: "Soul"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(randomIndex);
  };

  const quote = quotes[currentQuote];

  return (
    <div className="h-full bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="p-6">
        <div className="text-center mb-8">
          <MessageSquare className="w-12 h-12 text-teal-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Love Quotes</h1>
          <p className="text-teal-600">Words that capture the essence of our love</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Quote Display */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6 text-center relative overflow-hidden">
            <div className="absolute top-4 left-6 text-6xl text-teal-100 font-serif">"</div>
            <div className="absolute bottom-4 right-6 text-6xl text-teal-100 font-serif">"</div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-6 italic">
                {quote.text}
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="w-4 h-4 text-yellow-500" />
                <p className="text-lg text-gray-600 font-medium">— {quote.author}</p>
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
              <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                {quote.category}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={prevQuote}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              ← Previous
            </button>
            <button
              onClick={randomQuote}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Random</span>
            </button>
            <button
              onClick={nextQuote}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Next →
            </button>
          </div>

          {/* Quote Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quotes.map((q, index) => (
              <div
                key={q.id}
                className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  index === currentQuote ? 'ring-2 ring-teal-500' : ''
                }`}
                onClick={() => setCurrentQuote(index)}
              >
                <div className="flex items-start space-x-2 mb-2">
                  <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    {q.text.length > 120 ? `${q.text.substring(0, 120)}...` : q.text}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">— {q.author}</p>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                    {q.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;