export default function GalleryItem({ src, alt, caption }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white 
        flex items-center justify-center text-center p-4
        opacity-100 lg:opacity-0 lg:group-hover:opacity-100
        pointer-events-none lg:pointer-events-auto
        transition-opacity duration-300
      ">
        {caption}
      </div>
    </div>
  );
}