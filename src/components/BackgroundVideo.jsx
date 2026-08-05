export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover scale-105 filter blur-[2px] md:blur-[3px] brightness-[0.6] contrast-110 transition-all duration-300"
      >
        <source src="/bg-wallpaper.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
    </div>
  )
}
