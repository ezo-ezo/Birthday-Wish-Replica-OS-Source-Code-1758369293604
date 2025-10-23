import React from 'react';
import { Clock, Heart, Star, Camera, Music, Gift } from 'lucide-react';

const Timeline = () => {
  const memories = [
    {
      id: 1,
      date: 'January 15, 2024',
      title: 'Our First Date',
      description: 'The day that changed everything. Coffee turned into hours of conversation, and I knew you were special.',
      icon: Heart,
      color: 'bg-rose-500',
      image: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      date: 'February 14, 2024',
      title: 'First Valentine\'s Day',
      description: 'You made my heart skip a beat with your homemade card and that beautiful smile.',
      icon: Gift,
      color: 'bg-red-500',
      image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      date: 'March 22, 2024',
      title: 'Your Birthday Surprise',
      description: 'The look on your face when you saw the surprise party was priceless. You deserve all the happiness in the world.',
      icon: Star,
      color: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      date: 'June 10, 2024',
      title: 'Our First Trip Together',
      description: 'Beach walks, sunset views, and endless laughter. This trip showed me how perfect we are together.',
      icon: Camera,
      color: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      date: 'August 5, 2024',
      title: 'Concert Under the Stars',
      description: 'Dancing to our favorite songs under the starlit sky. That night, I knew I wanted to spend forever with you.',
      icon: Music,
      color: 'bg-indigo-500',
      image: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      date: 'Today',
      title: 'Every Day With You',
      description: 'Each day brings new reasons to love you more. Here\'s to all the beautiful memories yet to come.',
      icon: Heart,
      color: 'bg-pink-500',
      image: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="p-6">
        <div className="text-center mb-8">
          <Clock className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Memory Lane</h1>
          <p className="text-indigo-600">Our journey together, one beautiful moment at a time</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200"></div>

            {memories.map((memory, index) => {
              const IconComponent = memory.icon;
              return (
                <div key={memory.id} className="relative flex items-start mb-12">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 ${memory.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={memory.image}
                          alt={memory.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-8 h-8 ${memory.color} rounded-full flex items-center justify-center`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{memory.title}</h3>
                            <p className="text-sm text-gray-600">{memory.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{memory.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;