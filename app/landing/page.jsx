import { Cloud, CloudRain, Sun, Wind, Eye, Zap, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WeatherPro
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#how-it-works" className="hover:text-blue-400 transition">How it works</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
            <Link href="/" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">
            ✨ Real-time weather for every moment
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Weather
            </span>
            {' '}at your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              fingertips
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get accurate, real-time weather updates for any city in the world. Plan your day with confidence using our beautiful, intuitive interface.
          </p>

          <div className="flex gap-4 justify-center mb-20">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition hover:shadow-lg hover:shadow-blue-500/50">
              Start Now
            </Link>
            <button className="px-8 py-4 border border-slate-700 hover:border-slate-600 rounded-full font-semibold text-lg transition hover:bg-slate-800/50">
              Learn More
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-8 overflow-hidden">
              <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Sun className="w-24 h-24 mx-auto text-yellow-400 animate-bounce" />
                  <p className="text-slate-400">Beautiful Weather Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg">Everything you need to stay weather-aware</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-blue-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Updates</h3>
              <p className="text-slate-400">Get instant weather updates with minute-by-minute accuracy for any location worldwide.</p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-cyan-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-400">Optimized performance ensures you get weather data instantly, no delays, no waiting.</p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-blue-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
              <p className="text-slate-400">Access weather information for millions of cities across the entire planet.</p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-cyan-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition">
                <CloudRain className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hourly Forecast</h3>
              <p className="text-slate-400">Plan your next 24 hours with detailed hourly forecasts and weather predictions.</p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-blue-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
                <Wind className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Metrics</h3>
              <p className="text-slate-400">Track wind speed, humidity, UV index, and more with comprehensive weather data.</p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 hover:border-cyan-500/50 transition">
              <div className="mb-4 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Friendly</h3>
              <p className="text-slate-400">Beautifully responsive design works perfectly on phones, tablets, and desktops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg">Three simple steps to get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-400">1</span>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 pt-20 text-center">
                <h3 className="text-xl font-bold mb-3">Search Your City</h3>
                <p className="text-slate-400">Simply enter any city name in the search bar to get started instantly.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-400">2</span>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 pt-20 text-center">
                <h3 className="text-xl font-bold mb-3">Get Instant Data</h3>
                <p className="text-slate-400">Receive real-time weather information in seconds with all the details you need.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-400">3</span>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8 pt-20 text-center">
                <h3 className="text-xl font-bold mb-3">Plan Your Day</h3>
                <p className="text-slate-400">Use forecasts and detailed metrics to make informed decisions about your activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">Choose the plan that&apos;s right for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-slate-400 mb-6">Get started with basic weather data</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <button className="w-full px-6 py-3 border border-slate-700 hover:border-slate-600 rounded-lg font-semibold transition hover:bg-slate-800/50 mb-8">
                Get Started
              </button>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">✓ Current weather</li>
                <li className="flex gap-3">✓ 5 favorite cities</li>
                <li className="flex gap-3">✓ 7-day forecast</li>
              </ul>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-md rounded-2xl border border-blue-500/50 p-8 pt-12 transform md:scale-105">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-slate-400 mb-6">For weather enthusiasts</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition hover:shadow-lg hover:shadow-blue-500/50 mb-8">
                  Upgrade Now
                </button>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex gap-3">✓ Everything in Free</li>
                  <li className="flex gap-3">✓ Hourly forecasts</li>
                  <li className="flex gap-3">✓ 50 favorite cities</li>
                  <li className="flex gap-3">✓ Advanced alerts</li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400 mb-6">For organizations and APIs</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <button className="w-full px-6 py-3 border border-slate-700 hover:border-slate-600 rounded-lg font-semibold transition hover:bg-slate-800/50 mb-8">
                Contact Sales
              </button>
              <ul className="space-y-4 text-slate-300">
                <li className="flex gap-3">✓ Everything in Pro</li>
                <li className="flex gap-3">✓ API access</li>
                <li className="flex gap-3">✓ Custom integrations</li>
                <li className="flex gap-3">✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/30 p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Join thousands of users who trust WeatherPro for accurate, real-time weather information.
              </p>
              <Link href="/" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition hover:shadow-lg hover:shadow-blue-500/50">
                Launch the App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-12 px-4 md:px-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-6 h-6 text-blue-400" />
                <span className="font-bold">WeatherPro</span>
              </div>
              <p className="text-slate-400">Real-time weather for everyone.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800/50 pt-8 text-center text-slate-500">
            <p>&copy; 2024 WeatherPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
