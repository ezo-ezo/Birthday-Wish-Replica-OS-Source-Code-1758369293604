import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, Home, Mail, Calendar, Clock } from 'lucide-react';
import { useOS } from '../../context/OSContext';

// Update the component to receive props
const LoveLetters = ({ fromFileManager = false }) => {
  const { dispatch } = useOS();
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Enhanced letter data
  const letters = [
    {
      id: 1,
      title: "Why I Love You.txt",
      date: "2 days ago",
      size: "2.1 KB",
      emoji: "💌",
      preview: "My dearest love, every morning I wake up grateful for you...",
      content: `My dearest love,

I love you, not because you're perfect but because you're real.
Because you feel things deeply, care endlessly, and love with every part of your heart even when it's been hurt before. You're gentle and chaotic, soft and strong, and somehow you hold all of that inside one heartbeat that beats for me.

I love you for the way you laugh freely, like the world disappears for a second. I love how your eyes light up when you talk about something you love. I love the way you tease me, and the way you melt right after. I love that you don't try to be anything other than yourself that's what makes you so beautiful to me.

You make ordinary moments feel alive. A simple call, a shared silence, a random text they all become memories I can't stop replaying. You make me want to be better, softer, more patient, more me.

I love you because you've seen every side of me the proud, the broken, the quiet, the scared and never once stepped away. You stayed. You understood. You loved me harder.

And that's why I love you because you don't just exist in my world, you complete it.`
    },
    {
      id: 2,
      title: "Our First Date.txt",
      date: "1 week ago",
      size: "1.8 KB",
      emoji: "💘",
      preview: "I still remember every detail of our first date...",
      content: `My beautiful girl,

Our first date still feels like a dream I never wanted to wake up from.
Every second of that day is carved into my heart the nervous excitement, the smiles we couldn't hide, the small talks that turned into big feelings.

I still remember how you looked at me for the first time that day like you couldn't believe I was real. And honestly, neither could I. The world around us faded, and it felt like time slowed down just to let us exist in that one perfect moment.

When we laughed, I felt like I'd known you for lifetimes. When you spoke, it felt like every word had been waiting for me to hear it. And when you smiled that was it. That was the moment I knew I'd never be the same again.

Our first date wasn't about where we went or what we did it was about us. It was about feeling that spark that still hasn't faded. It was about realizing that this you and me was going to be something unforgettable.

That day started a story I'll spend my life writing with you.`
    },
    {
      id: 3,
      title: "Future Dreams.txt",
      date: "3 days ago",
      size: "2.5 KB",
      emoji: "💝",
      preview: "When I think about our future together...",
      content: `My forever love,

When I think about the future, I don't imagine fancy houses or perfect plans.
I imagine you.
Waking up next to you.
Cooking breakfast together.
Dancing in the kitchen when no one's watching.
Your laughter echoing through our home like sunlight pouring through windows.

I imagine us sitting on the floor, surrounded by half-eaten pizza and dreams that never stop growing. You wrapped in a blanket, your head on my shoulder, talking about everything and nothing at all. I imagine us taking drives with no destination just music, wind, and peace.

I dream of lazy Sundays.
Of nights where we fall asleep mid conversation.
Of hugs that last too long, of quiet mornings with coffee and comfort.
Of arguments that always end in love.

And most of all, I dream of forever not in a fairytale way, but in a real one.
Where love isn't perfect, but patient. Where life isn't easy, but worth it because we have each other.

You are in every version of my tomorrow.
And that's my favorite dream to keep chasing.`
    },
    {
      id: 4,
      title: "My Promise.txt",
      date: "Yesterday",
      size: "1.9 KB",
      emoji: "💞",
      preview: "I promise to always be there for you...",
      content: `My sweetest love,

I promise to love you in all your moods when you're happy, when you're tired, when you're quiet, when you're messy, when you don't even know how to love yourself.

I promise to stay through distance, through storms, through everything that tries to come between us.
I promise to listen when you need to talk, to hold you when words aren't enough, to understand when you don't know how to explain.

I promise to remind you every day that you are enough more than enough.
That you are beautiful, not because of how you look, but because of the heart that beats inside you.

I'll be your calm in chaos, your strength when you're tired, your warmth when the world feels cold.
I'll keep choosing you in every lifetime, in every version of us, even when time tries to pull us apart.

I promise to love you loudly, gently, endlessly.
Because loving you isn't a decision anymore it's who I am.`
    },
    {
      id: 5,
      title: "Moments I Cherish.txt",
      date: "5 days ago",
      size: "2.3 KB",
      emoji: "💗",
      preview: "There are so many little moments with you that I treasure...",
      content: `My darling,

It's funny how the smallest moments with you are the ones that stay the longest.
The way you laugh with your whole face. The way your hand fits perfectly in mine. The way you look at me before saying something you know will make me melt.

I cherish our late-night calls, the ones where time doesn't matter. The comfortable silences, the sleepy smiles, the shared playlists, the random confessions. I cherish the way you say my name like it's something soft, something only meant for you to hold.

I cherish every hug, every inside joke, every time we made each other laugh till we couldn't breathe. I cherish the tears too because they reminded me that love isn't always perfect, but it's real.

Every memory with you feels like a photograph I keep replaying in my head one that never fades, no matter how far we are.
And if I could freeze time, I'd freeze every moment that has you in it.

Because those moments you, us, everything are my favorite part of this entire life.`
    }
  ];

  // Function to return to FileManager when coming from there
  const returnToFileManager = () => {
    if (fromFileManager) {
      // Close the LoveLetters window
      dispatch({ type: 'CLOSE_ACTIVE_WINDOW' });
      
      // Open FileManager with the Love Letters folder open
      dispatch({
        type: 'OPEN_WINDOW',
        payload: {
          title: 'File Manager',
          component: 'FileManager',
          isMinimized: false,
          isMaximized: false,
          position: { x: 100 + Math.random() * 100, y: 100 + Math.random() * 100 },
          size: { width: 800, height: 600 },
          // You could add some state to have FileManager open at this path
          props: { initialPath: '/Love Letters' }
        },
      });
    } else {
      // Just go back to the letter list
      setSelectedLetter(null);
    }
  };

  // Modify the back button handler in the letter view
  if (selectedLetter !== null) {
    const letter = letters[selectedLetter];
    return (
      <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
        <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSelectedLetter(null)}
              className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </button>
            <h2 className="text-lg font-medium text-gray-800">{letter.title}</h2>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl mx-auto">
            {/* Letter header */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-pink-200 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center shadow-md text-white">
                  <span className="text-2xl">{letter.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-pink-800 mb-1">{letter.title.replace('.txt', '')}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 inline" /> {letter.date}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1 inline" /> {new Date().toLocaleDateString()}
                    </div>
                    <div>{letter.size}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter content */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-pink-200">
              <div className="prose prose-pink max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {letter.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main letter list view
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl">💌</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800">Love Letters</h1>
          </div>
          
          {/* View toggle buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-pink-100 text-pink-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {fromFileManager ? (
              <button
                onClick={returnToFileManager}
                className="px-3 py-1 bg-pink-100 hover:bg-pink-200 rounded-lg text-pink-800 transition-colors flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back to Files
              </button>
            ) : (
              <button
                className="p-2 rounded-lg text-gray-600 hover:bg-pink-100"
              >
                <Home className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Path breadcrumb */}
          <div className="flex-1 bg-pink-50 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-600">
              {fromFileManager ? '/File Manager/Love Letters' : '/Love Letters'}
            </span>
          </div>
        </div>
      </div>

      {/* Content - Grid and List views remain the same */}
      <div className="flex-1 overflow-auto p-6">
        {viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all duration-200 hover:bg-pink-50 hover:shadow-md"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 bg-gradient-to-br from-pink-300 to-rose-400 shadow-md">
                  <span className="text-3xl">{letter.emoji}</span>
                </div>
                <span className="text-sm font-medium text-gray-800 text-center max-w-full truncate">
                  {letter.title}
                </span>
                <span className="text-xs text-gray-500 mt-1">{letter.size}</span>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 gap-4 p-4 bg-pink-50 border-b text-sm font-medium text-gray-600">
              <div>Name</div>
              <div>Size</div>
              <div>Modified</div>
              <div>Type</div>
            </div>
            {letters.map((letter, index) => (
              <div
                key={letter.id}
                className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-pink-50"
                onClick={() => setSelectedLetter(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-300 to-rose-400">
                    <span className="text-lg">{letter.emoji}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{letter.title}</span>
                </div>
                <div className="text-sm text-gray-600">{letter.size}</div>
                <div className="text-sm text-gray-600">{letter.date}</div>
                <div className="text-sm text-gray-600">Text</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Status bar remains the same */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-pink-200 p-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{letters.length} items</span>
          <div className="flex items-center space-x-2">
            <span>Written with</span>
            <span className="text-red-500">❤️</span>
            <span>just for you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetters;