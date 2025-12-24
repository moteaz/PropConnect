import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptMC00YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Property?</h2>
        <p className="text-xl md:text-2xl mb-8 text-violet-100">Join thousands of satisfied customers and start your journey today</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/signup" className="bg-white text-violet-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            Get Started Free
          </Link>
          <Link href="/login" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all hover:scale-105">
            List Your Property
          </Link>
        </div>
      </div>
    </section>
  );
}
