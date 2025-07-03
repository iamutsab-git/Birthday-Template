import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import { Heart, Gift, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="text-pink-400 w-8 h-8 mr-2 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 tracking-wide">
              Happy Birthday, My Love
            </h1>
            <Sparkles className="text-pink-400 w-8 h-8 ml-2 animate-pulse" />
          </div>
          <p className="text-2xl md:text-3xl text-pink-600 font-light mb-6">
            To the woman who makes my world magical
          </p>
          <div className="flex justify-center items-center space-x-2 text-gray-600">
            <Heart className="text-red-400 w-6 h-6 animate-pulse" />
            <p className="text-lg italic">
              "You're not just a year older today, but a year more wonderful"
            </p>
            <Heart className="text-red-400 w-6 h-6 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Footer */}
      <footer className="text-center py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              My Heart's Greatest Treasure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              On this special day, I want you to know that you're the most beautiful gift life has given me. 
              Your laughter is my favorite melody, your smile brightens my darkest days, and your love 
              has transformed my world in ways I never imagined possible. Today we celebrate you - 
              the incredible, radiant soul who makes every moment worth cherishing. 
              May this year bring you as much joy as you've brought into my life.
            </p>
            <div className="mt-6 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-5 h-5 text-red-400 fill-current"
                  style={{ animation: `pulse 1.5s infinite ${i * 0.2}s` }} 
                />
              ))}
            </div>
            <p className="mt-4 text-pink-500 font-medium">
              Forever yours, today and always
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;