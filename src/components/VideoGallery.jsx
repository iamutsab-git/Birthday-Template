
import { Play, Video, Heart } from 'lucide-react';

// Sample videos - replace these with your actual video thumbnails and sources
const sampleVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
    title: "Our First Date",
    description: "That magical evening we'll never forget",
    videoUrl: "#" // Replace with actual video URL
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    title: "Dancing Together",
    description: "When we danced in the living room",
    videoUrl: "#" // Replace with actual video URL
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    title: "Weekend Adventures",
    description: "Exploring new places hand in hand",
    videoUrl: "#" // Replace with actual video URL
  }
];

const VideoGallery = () => {
  const handleVideoClick = (video) => {
    // For now, just show an alert. You can replace this with actual video playback
    alert(`Playing: ${video.title}\n\nReplace the videoUrl with your actual video source and implement video playback here.`);
  };

  return (
    <div className="py-16 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <Video className="text-purple-400 w-8 h-8 mr-3" />
            <h2 className="text-4xl font-light text-gray-800">
              Our Video Memories
            </h2>
            <Heart className="text-purple-400 w-8 h-8 ml-3 animate-pulse" />
          </div>
          <p className="text-gray-600 text-lg">
            Moments that come alive
          </p>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleVideos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 bg-white"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-medium mb-2">{video.title}</h3>
                  <p className="text-white/80 text-sm">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default VideoGallery;
