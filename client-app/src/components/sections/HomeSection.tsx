export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[url('/images/barbershop.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* przyciemnienie tła */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-4xl font-medium text-white">
          Look Sharp. Feel Confident.
        </h1>
        <h2 className="mt-2 text-lg text-gray-200">
          Premium barbershop services crafted by professionals.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 py-8 justify-center items-center">
          <button className="bg-indigo-700 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-indigo-600">
            Book a Visit
          </button>
          <button className="px-6 py-2 rounded-2xl border border-gray-200 text-gray-100 cursor-pointer hover:bg-white/10">
            See Services
          </button>
        </div>
      </div>
    </section>
  );
}
