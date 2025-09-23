import SectionHeader from "./SectionHeader";

export default function ClientFocusSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
         <SectionHeader
          subtitle="Client Focus"
          title="Tailored Protection for Every Need"
          details="From residential homes to corporate offices, factories, and special events, we design security solutions that match each client’s unique requirements."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Residential Clients</h3>
            <p className="text-gray-600">
              Houses, apartments, and gated communities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Corporate Clients</h3>
            <p className="text-gray-600">
              Banks, offices, IT parks, and business centers.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Industrial Clients</h3>
            <p className="text-gray-600">
              Factories, warehouses, and production facilities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Event Clients</h3>
            <p className="text-gray-600">
              Sports arenas, festivals, rallies, and conferences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">VIP & High-Risk</h3>
            <p className="text-gray-600">
              Executives, diplomats, celebrities, and politicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
