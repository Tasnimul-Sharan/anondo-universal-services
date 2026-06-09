import { BiPlayCircle } from "react-icons/bi";

export default function VideoSection() {
  return (
    <section className="py-20 bg-off_white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold mb-5 border border-primary/20">
            <BiPlayCircle size={18} />
            Company Overview
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-soft_black mb-4">
            Experience the Strength of Anondo Universal Services
                  </h2>
                  
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Discover how Anondo Universal Services Limited delivers trusted
            security, professional training, and comprehensive protection
            solutions across Bangladesh.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-border_color bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10"></div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border_color bg-white">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/yar4mPlkr48?autoplay=1&mute=1&loop=1&playlist=yar4mPlkr48&controls=1&rel=0&modestbranding=1"
              title="Anondo Universal Services Limited"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-border_color">
            <h3 className="text-primary font-bold text-xl mb-2">
              Professional Security
            </h3>
            <p className="text-gray-600">
              Trained and experienced security personnel for every sector.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-border_color">
            <h3 className="text-secondary font-bold text-xl mb-2">
              Advanced Training
            </h3>
            <p className="text-gray-600">
              Modern security training academy with professional instructors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-border_color">
            <h3 className="text-tertiary font-bold text-xl mb-2">
              Nationwide Coverage
            </h3>
            <p className="text-gray-600">
              Reliable security solutions throughout Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
