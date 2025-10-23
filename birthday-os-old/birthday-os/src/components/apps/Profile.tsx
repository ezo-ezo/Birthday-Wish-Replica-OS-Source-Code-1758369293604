import React from 'react';
import { Heart, Cake, Star, Music, Camera, Coffee } from 'lucide-react';

const Profile = () => {
  return (
    <div className="h-full bg-gradient-to-br from-pink-50 to-purple-50 overflow-auto">
      <div className="max-w-2xl mx-auto p-6">
        {/* Profile header */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* Avatar with decorative elements */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 mx-auto mb-4 flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-5xl">👑</span>
            </div>
            
            {/* Decorative hearts */}
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </div>
            <div className="absolute -bottom-1 -left-1 bg-white rounded-full p-1 shadow-md">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-purple-700 mb-1">Ishi Baby</h1>
          <p className="text-pink-500 text-sm">Birthday Princess 👸</p>
        </div>
        
        {/* Profile info card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-pink-200 overflow-hidden mb-6">
          <div className="p-5 border-b border-pink-100">
            <h2 className="text-lg font-semibold text-pink-600 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              About Me
            </h2>
          </div>
          
          <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center p-3 bg-pink-50 rounded-xl">
                <Cake className="w-5 h-5 text-pink-500 mr-3" />
                <div>
                  <div className="text-xs text-gray-500">Birthday</div>
                  <div className="font-medium text-gray-800">October 23</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-xl">
                <Music className="w-5 h-5 text-purple-500 mr-3" />
                <div>
                  <div className="text-xs text-gray-500">Favorite Song</div>
                  <div className="font-medium text-gray-800">Bade ache lagte hai</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-pink-50 rounded-xl">
                <Coffee className="w-5 h-5 text-pink-500 mr-3" />
                <div>
                  <div className="text-xs text-gray-500">Favorite Drink</div>
                  <div className="font-medium text-gray-800">Peach Ice Tea</div>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-xl">
                <Camera className="w-5 h-5 text-purple-500 mr-3" />
                <div>
                  <div className="text-xs text-gray-500">Memories Created</div>
                  <div className="font-medium text-gray-800">Countless ✨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mood board */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-pink-200 overflow-hidden mb-6">
          <div className="p-5 border-b border-pink-100">
            <h2 className="text-lg font-semibold text-pink-600">My Mood Today</h2>
          </div>
          
          <div className="p-5">
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="p-4 bg-pink-100 rounded-xl text-center">
                <div className="text-2xl mb-1">😊</div>
                <div className="text-xs font-medium text-pink-600">Happy</div>
              </div>
              <div className="p-4 bg-purple-100 rounded-xl text-center">
                <div className="text-2xl mb-1">💖</div>
                <div className="text-xs font-medium text-purple-600">Loved</div>
              </div>
              <div className="p-4 bg-pink-100 rounded-xl text-center">
                <div className="text-2xl mb-1">✨</div>
                <div className="text-xs font-medium text-pink-600">Magical</div>
              </div>
              <div className="p-4 bg-purple-100 rounded-xl text-center">
                <div className="text-2xl mb-1">🦋</div>
                <div className="text-xs font-medium text-purple-600">Free</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cute footer */}
        <div className="text-center mt-8 mb-4">
          <div className="inline-flex items-center bg-white/70 px-4 py-2 rounded-full shadow-md border border-pink-100">
            <span className="text-pink-600 text-sm">Made with 💖 just for you</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;