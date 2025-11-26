export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-30"
    >
      <h1 className="text-4xl font-medium py-2">Look Sharp. Feel Confident.</h1>
      <h2 className="text-xl text-gray-500 py-2">
        Premium barbershop services crafted by professionals.
      </h2>
      <div className="flex gap-4 py-8">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-2xl cursor-pointer hover:bg-indigo-500">
          Book a Visit
        </button>
        <button className="px-6 py-2 rounded-2xl border border-gray-300 cursor-pointer hover:border-gray-400">
          See Services
        </button>
      </div>
    </section>
  );
}
