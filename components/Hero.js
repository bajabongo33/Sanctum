export default function Hero({ image, mobileImage, title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
      <picture>
        <source srcSet={mobileImage} media="(max-width: 768px)" />
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover z-0" />
      </picture>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 py-24">
        <h1 className="text-4xl md:text-6xl font-display mb-4 drop-shadow">{title}</h1>
        {subtitle && <p className="mb-8 text-lg md:text-2xl font-light">{subtitle}</p>}
        {ctaText && (
          <a href={ctaLink} className="inline-block px-8 py-3 bg-teal-500 text-white rounded-full text-xl shadow-md hover:bg-teal-400 transition">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
