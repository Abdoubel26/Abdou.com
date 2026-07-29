export default function VideoPreview() {
  return (
    <section className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 to-blue-950 text-white px-4 py-16 border-t-2 border-dashed border-blue-500 overflow-hidden">
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md ">
          <span>One of my Videos</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold outfit tracking-tight text-white mb-4">
          The Black Hole Information Paradox
        </h2>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center px-2">
        <div className="w-full relative rounded-2xl shadow-2xl shadow-blue-950/80 hover:scale-[1.01] transition-all duration-300">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/80">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/4DcOrWyqUYs?si=bvvBsmX_0-BJahrP"
              title="The Black Hole Information Paradox"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

    </section>
  );
}