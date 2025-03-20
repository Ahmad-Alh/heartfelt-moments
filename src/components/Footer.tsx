export default function Footer() {
  const whatsappNumber = "+971521433223";
  const message = encodeURIComponent("Hey, I would like to book!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <footer className="bg-gradient-to-b from-soft-beige to-blush-pink text-black py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Create Unforgettable Memories with Us! Contact Heartfelt Moments
          Today!
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-soft-rose hover:bg-rose-100 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          BOOK NOW
        </a>
      </div>
    </footer>
  );
}
