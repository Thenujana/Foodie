import{Link} from "react-router-dom"

const Footer = () => {
  const socialIcons = [
    "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
  ]

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Foodie</span>
            </div>
            <p className="text-slate-400">Bringing delicious food to your doorstep since 2024</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialIcons.map((path, i) => (
                <button
                  key={i}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>2024 Foodie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
