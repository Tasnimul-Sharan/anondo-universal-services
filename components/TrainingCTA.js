export default function TrainingCTA() {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-sky-50 to-white rounded-2xl">
      <div>
        <h4 className="text-xl font-semibold">Ready to learn more?</h4>
        <p className="text-gray-700">Request a brochure or schedule a visit to the Training Academy.</p>
      </div>
      <div className="flex gap-3">
        <a href="/contact" className="px-5 py-2 rounded-lg border bg-white hover:shadow-sm">
          Contact Us
        </a>
        <a href="/brochure.pdf" className="px-5 py-2 rounded-lg bg-sky-600 text-white">
          Download Brochure
        </a>
      </div>
    </div>
  );
}