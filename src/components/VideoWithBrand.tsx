export default function VideoWithBrand() {
  return (
    <div className="yt-wrap">
      <iframe
        src="https://www.youtube.com/embed/4jY96QBv-H4?rel=0&modestbranding=1&playsinline=1"
        title="Depoimento ADPM"
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {/* Máscara/Watermark com logo (decorativa, sem interferir nos cliques) */}
      <div className="yt-brand" aria-hidden="true">
        <img src="/lovable-uploads/8765bf2b-bce1-4489-81ad-c884c6da7022.png" alt="" />
      </div>
    </div>
  );
}