const PopularDishes = () => {
  const dishes = [
    {
      name: "Gourmet Burger",
      price: "$12.99",
      image: "gourmet burger with melted cheese and fresh vegetables",
    },
    {
      name: "Signature Pasta",
      price: "$14.99",
      image: "creamy pasta with fresh herbs and parmesan",
    },
    {
      name: "Fresh Salad Bowl",
      price: "$9.99",
      image: "colorful fresh salad bowl with mixed greens",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Popular dishes</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our most loved creations, crafted with passion and served with love
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                {/* <img
                //   src={`/.jpg?height=400&width=400&query=${dish.image}`}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{dish.name}</h3>
                  <span className="text-2xl font-bold text-amber-600">{dish.price}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-200 transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDishes
