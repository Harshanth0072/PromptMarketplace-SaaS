import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { prompts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default async function PromptDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const prompt = prompts.find((p) => p.id === id) || prompts[0];

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-brand-500/20 text-brand-300">
              {prompt.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{prompt.title}</h1>

            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>by <strong className="text-white">{prompt.author}</strong></span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                {prompt.rating}
              </div>
              <span>{prompt.sales} sales</span>
            </div>

            <div className="glass rounded-2xl p-6 mb-8">
              <h2 className="font-semibold mb-3">Description</h2>
              <p className="text-gray-300 leading-relaxed">{prompt.description}</p>
              <p className="text-gray-300 leading-relaxed mt-4">
                This prompt has been battle-tested across multiple models (GPT-4o, Claude 3.5, Gemini). 
                Includes system message, few-shot examples, and output format instructions for maximum consistency.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-semibold mb-4">What you get</h2>
              <ul className="space-y-3">
                {["Full optimized prompt (system + user)", "Usage instructions & best practices", "Example outputs", "Lifetime-time purchase — lifetime access", "Free updates from the creator"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-brand-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buy Card */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24 border border-brand-500/20">
              <div className="text-3xl font-bold mb-1">{formatCurrency(prompt.price)}</div>
              <p className="text-sm text-gray-400 mb-6">One-time purchase</p>

              <button className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 font-semibold flex items-center justify-center gap-2 transition mb-3">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
              <p className="text-xs text-center text-gray-500">
                Instant delivery after payment • Stripe secured
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Platform fee</span>
                  <span>20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Creator earns</span>
                  <span className="text-emerald-400">{formatCurrency(prompt.price * 0.8)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
