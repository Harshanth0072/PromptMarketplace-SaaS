"use client";

import Link from "next/link";
import { Sparkles, DollarSign, ShoppingBag, Star, Upload, ArrowLeft } from "lucide-react";
import { sellerStats, prompts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Mon", sales: 12 },
  { name: "Tue", sales: 19 },
  { name: "Wed", sales: 8 },
  { name: "Thu", sales: 15 },
  { name: "Fri", sales: 22 },
  { name: "Sat", sales: 28 },
  { name: "Sun", sales: 17 },
];

export default function SellerDashboard() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              Marketplace
            </Link>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-400" />
              <span className="font-semibold">Seller Dashboard</span>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-sm font-medium flex items-center gap-2 transition">
            <Upload className="w-4 h-4" />
            Upload New Prompt
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-8">Your Earnings Overview</h1>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Earnings", value: formatCurrency(sellerStats.totalEarnings), icon: DollarSign },
            { label: "This Month", value: formatCurrency(sellerStats.thisMonth), icon: TrendingIcon },
            { label: "Total Sales", value: sellerStats.totalSales.toString(), icon: ShoppingBag },
            { label: "Avg Rating", value: sellerStats.avgRating.toString(), icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-brand-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <h2 className="font-semibold mb-4">Sales This Week</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis dataKey="name" stroke="#71717a" fontSize={12} />
                  <YAxis stroke="#71717a" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "12px",
                    }}
                  />
                  <Bar dataKey="sales" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Your Prompts */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-semibold mb-4">Your Top Prompts</h2>
            <div className="space-y-4">
              {prompts.slice(0, 4).map((p) => (
                <div key={p.id} className="flex justify-between items-start gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{p.title}</p>
                    <p className="text-xs text-gray-500">{p.sales} sales</p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400 shrink-0">
                    {formatCurrency(p.price * p.sales * 0.8)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 glass rounded-2xl p-6 text-center">
          <p className="text-gray-400 text-sm">
            This is a fully functional demo dashboard. Connect Stripe Connect + a real database to start taking real payments and paying out creators.
          </p>
        </div>
      </main>
    </div>
  );
}

function TrendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
