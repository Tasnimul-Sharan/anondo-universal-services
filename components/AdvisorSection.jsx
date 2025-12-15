import Image from "next/image";

export default function AdvisorSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Advisor Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/advisor.jpg" // <-- image path
                alt="Advisor - Anondo Universal Services Limited"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Advisor Message */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message from Our Advisor
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
              “Security is not merely about protection—it is about trust,
              responsibility, and commitment. At Anondo Universal Services
              Limited, we dedicate ourselves to creating a safe and confident
              environment through professionalism, discipline, and integrity.”
            </p>

            <div className="border-l-4 border-primary pl-4">
              <p className="text-xl font-semibold text-gray-900">
                Brigadier General Md. Ashraful Islam (Retd.)
              </p>
              <p className="text-gray-600">
                Advisor, Anondo Universal Services Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
