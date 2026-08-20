import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex items-center min-h-screen px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">
          Real-time weather for every moment
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Weather
          </span>
          {' '}at your{' '}
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            fingertips
          </span>
        </h1>

        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get accurate, real-time weather updates for any city in the world. Plan your day with confidence using our beautiful, intuitive interface.
        </p>

        <div className="flex gap-4 justify-center mb-20">
          <Link href="/weather" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition hover:shadow-lg hover:shadow-blue-500/50">
            Start Now
          </Link>
          <button className="px-8 py-4 border border-slate-700 hover:border-slate-600 rounded-full font-semibold text-lg transition hover:bg-slate-800/50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
