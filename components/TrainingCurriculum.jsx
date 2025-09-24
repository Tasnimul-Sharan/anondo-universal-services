export default function TrainingCurriculum() {
  return (
    <section className="bg-white rounded-2xl py-12">
        <div className="custom-container mx-auto">
      <h3 className="text-2xl font-semibold mb-4">
        30-day Training Curriculum
      </h3>
      <p className="text-gray-600 mb-6">
        The program is structured around four major components — Field,
        Professional, Theoretical, and Personal Development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
          <h4 className="text-lg font-medium mb-3">A. Field Training</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Physical Fitness:</strong> Daily routines (running,
              push-ups, rope-climbing) and nutrition guidance.
            </li>
            <li>
              <strong>Parade & Drill:</strong> Marching, formations and
              ceremonial readiness.
            </li>
            <li>
              <strong>Discipline:</strong> Punctuality, responsibility and
              professional accountability.
            </li>
            <li>
              <strong>Self-Defence & Martial Arts:</strong> Safe restraint
              techniques and unarmed combat basics.
            </li>
          </ul>
        </article>

        <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
          <h4 className="text-lg font-medium mb-3">B. Professional Training</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <strong>Access Control & Visitor Checks</strong> — respectful
              frisking, screening and entry management.
            </li>
            <li>
              <strong>Object & Vehicle Screening</strong> — practical use of
              scanners and under-vehicle checks.
            </li>
            <li>
              <strong>Crowd Control & Event Security</strong> — safe crowd
              management and coordination with authorities.
            </li>
            <li>
              <strong>CCTV Surveillance</strong> — monitoring, detection and
              reporting workflows.
            </li>
          </ul>
        </article>

        <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
          <h4 className="text-lg font-medium mb-3">C. Theoretical Courses</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              Right of Private Defence & Property Rights (Bangladesh legal
              framework)
            </li>
            <li>
              Right of Arrest for Civil Persons & Suspect-handling protocols
            </li>
            <li>Police Rules, Reporting, and Liaison with law enforcement</li>
          </ul>
        </article>

        <article className="p-5 border rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 duration-700">
          <h4 className="text-lg font-medium mb-3">D. Personal Development</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Behaviour, Etiquette, and Communication skills</li>
            <li>Hygiene & Grooming, Uniform maintenance</li>
            <li>
              Training on basic household tools to support domestic/office
              assignments
            </li>
          </ul>
        </article>
      </div>

      <div className="mt-6 p-4 bg-slate-50 rounded-lg">
        <h5 className="font-semibold">Training Outcome</h5>
        <p className="text-gray-700 mt-2">
          Graduates emerge as physically fit, legally aware, professionally
          skilled, and ethically grounded guards — ready to inspire trust and
          confidence.
        </p>
        </div>
      </div>
    </section>
  );
}
