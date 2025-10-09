const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                Fresh & Delicious
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight">
              Taste the joy of{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                authentic flavors
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients,
              delivered fresh to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-amber-200 transition-all duration-200 hover:scale-105">
                Explore Menu
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-200">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div>
                <div className="text-3xl font-bold text-slate-900">4.9</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  )
}

export default Hero
