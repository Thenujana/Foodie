
import type React from "react"
import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"
import type { FoodItem } from "../types"
import "../App.css"
import Navbar from "./Navbar"
const Menu: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  const categories = ["All", "Burgers", "Rice", "Beverages", "Chinese"]

  useEffect(() => {
    fetchFoodItems()
  }, [])

  const fetchFoodItems = async () => {
    setIsLoading(true)
    const { data, error } = await supabase.from("food_items").select("*")
    if (error) {
      console.error("Error fetching food items:", error)
    } else {
      setFoodItems(data || [])
    }
    setIsLoading(false)
  }

  const filteredItems = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || item.category?.toLowerCase() === selectedCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
         <Navbar />
      {/* Hero Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-8 mb-12 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Our Menu</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Discover our carefully crafted selection of delicious dishes
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for your favorite dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 text-slate-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-600 border-t-transparent"></div>
          </div>
        ) : filteredItems.length > 0 ? (
          /* Food Items Grid */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-emerald-200 hover:-translate-y-2"
              >
                {/* Image Container */}
                {item.image_url && (
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.image_url || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                      {item.name}
                    </h3>
                    {item.category && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-2xl font-bold text-emerald-600">RS {item.price.toFixed(2)}</span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-200 active:scale-95 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 rounded-full mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">No items found</h3>
            <p className="text-slate-500 text-lg">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu