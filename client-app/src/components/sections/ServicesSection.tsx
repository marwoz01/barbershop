export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gray-50 py-20 px-6 flex flex-col items-center"
    >
      {/* Section Header */}
      <h1 className="text-3xl font-semibold text-gray-900">Our Services</h1>
      <h2 className="mt-2 text-gray-500">
        Choose from our range of professional grooming services
      </h2>

      {/* Cards */}
      <div className="mt-10 grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {/* Haircut */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col hover:bg-gray-50">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700 mb-6">
            ✂
          </div>
          <h3 className="text-base font-medium text-gray-900">Haircut</h3>
          <p className="mt-3 text-sm text-gray-500">
            Professional haircut with consultation and styling.
          </p>
          <div className="mt-8 flex items-end justify-between text-sm text-gray-600">
            <span>45 min</span>
            <span className="text-gray-900 font-medium">$35</span>
          </div>
        </div>

        {/* Beard Trim */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col hover:bg-gray-50">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 mb-6">
            🪒
          </div>
          <h3 className="text-base font-medium text-gray-900">Beard Trim</h3>
          <p className="mt-3 text-sm text-gray-500">
            Precise beard shaping and grooming for a clean, sharp look.
          </p>
          <div className="mt-8 flex items-end justify-between text-sm text-gray-600">
            <span>30 min</span>
            <span className="text-gray-900 font-medium">$25</span>
          </div>
        </div>

        {/* Combo */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col hover:bg-gray-50">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 mb-6">
            ✨
          </div>
          <h3 className="text-base font-medium text-gray-900">Combo</h3>
          <p className="mt-3 text-sm text-gray-500">
            Haircut and beard trim package for a full refresh.
          </p>
          <div className="mt-8 flex items-end justify-between text-sm text-gray-600">
            <span>60 min</span>
            <span className="text-gray-900 font-medium">$50</span>
          </div>
        </div>
      </div>
    </section>
  );
}
