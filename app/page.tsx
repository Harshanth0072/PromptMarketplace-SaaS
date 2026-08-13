import Link from "next/link";
import { Search, Star, ShoppingCart, Sparkles, TrendingUp } from "lucide-react";
import { prompts, categories } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function MarketplacePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-50 bg-dark-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">PromptForge</span>
          </Link>

          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search prompts, categories, authors..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-dark-700 border border-white/10 text-sm focus:outline-none focus:border-brand-500 transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/seller" className="text-sm text-gray-300 hover:text-white transition hidden sm:block">
              Seller Dashboard
            </Link>
            <Link
              href="/seller"
              className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-sm font-medium transition"
            >
              Sell Prompts
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              The Marketplace for <span className="text-brand-400">AI Prompts</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover battle-tested prompts that actually work. Creators earn money every time their prompt sells.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button className="px-4 py-1.5 rounded-full bg-brand-500 text-sm font-medium">All</button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full glass text-sm text-gray-300 hover:bg-white/10 transition"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Prompt Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {prompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/prompt/${prompt.id}`}
                className="glass rounded-2xl p-5 hover:border-brand-500/40 transition group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300">
                    {prompt.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-yellow-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {prompt.rating}
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-300 transition line-clamp-2">
                  {prompt.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">{prompt.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>by {prompt.author}</span>
                    <span>•</span>
                    <span>{prompt.sales} sales</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-bold text-brand-400">
                    <ShoppingCart className="w-4 h-4" />
                    {formatCurrency(prompt.price)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for sellers */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 text-center border border-brand-500/20">
          <TrendingUp className="w-10 h-10 text-brand-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Start earning from your prompts</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Upload your best prompts. We handle payments, delivery, and discovery. You keep most of the revenue.
          </p>
          <Link
            href="/seller"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 font-semibold transition"
          >
            Open Seller Dashboard
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
        PromptForge © 2026 • Built as a money-making SaaS project for Harshanth0072
      </footer>
    </div>
  );
}
