export default function Footer() {
  const whatsappNumber = "+971501661646"
  const message = encodeURIComponent("Hey, I would like to book!")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <footer className="bg-rose-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Create Unforgettable Memories with Us! Contact Heartfelt Moments Today!
        </h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-rose-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-rose-100 transition duration-300"
        >
          BOOK NOW
        </a>
      </div>
    </footer>
  )
}

