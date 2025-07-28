export default function GalleryItem({ src, alt, caption }) {
  return (
    <div className="group overflow-hidden rounded-2xl shadow-lg">
      <div className="relative">
        <img src={src} alt={alt} className="w-full h-auto object-cover"/>
        
        {/* Desktop overlay (hidden on mobile/tablet) */}
        <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-60 text-white items-center justify-center text-center 
        p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {caption}
        </div>
      </div>
      
      {/* Mobile/tablet caption below image */}
      <div className="lg:hidden p-4 text-white bg-gray-800 rounded-b-2xl">
        <p className="text-sm leading-relaxed">{caption}</p>
      </div>
    </div>
  );
}