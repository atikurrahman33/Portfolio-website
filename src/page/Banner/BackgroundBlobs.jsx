export default function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 will-change-transform transition-transform duration-700">
      {/* Soft sky-blue blob */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-sky-300/30 to-sky-400/30 rounded-full blur-3xl motion-safe:animate-pulse" />
      
      {/* Another sky-colored blob */}
      <div
        className="absolute top-60 right-32 w-60 h-60 bg-gradient-to-br from-cyan-300/30 to-sky-400/30 rounded-full blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
