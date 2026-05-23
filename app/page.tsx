"use client";

import { useState } from "react";
import { Contact } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const [loading, setLoading] = useState(false);
const handleSubmit = async (e: any) => {
  e.preventDefault();
try {
  setLoading(true);
const res = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

await res.json();

alert("Thank you! We will contact you shortly.");
setLoading(false);
setForm({
  name: "",
  email: "",
  phone: "",
  message: "",
});
} catch (error) {
  console.error("Error submitting form:", error);
  alert("Sorry, something went wrong. Please try again.");
  setLoading(false);
}
}
  return (
    <main className="min-h-screen bg-[#06182d] text-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div>
          <h1 className="text-5xl font-black tracking-[0.22em] text-[#d6a63a]">
            ATLAS
          </h1>
          <p className="text-xs tracking-[0.35em] uppercase text-white/70">
            Mortgage Solutions
          </p>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <a className="border border-[#d6a63a]/50 px-5 py-3 rounded-xl">
            020 3488 0780
          </a>
          <button className="bg-[#d6a63a] text-[#06182d] px-6 py-3 rounded-xl font-bold">
            Get a Free Consultation
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#d6a63a] uppercase tracking-[0.2em] mb-5 font-bold">
            FCA Regulated • Whole of Market Advice
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
            NO MORTGAGE,
            <br />
            <span className="text-[#d6a63a]">NO FEE.</span>
          </h2>

          <div className="bg-red-700 inline-block px-6 py-4 rounded-lg font-black text-xl mb-6 uppercase">
            You pay nothing unless we secure your mortgage
          </div>

          <p className="text-xl text-white/80 mb-8 max-w-xl">
            We search thousands of mortgage deals from over 90 lenders to help
            find the right solution for your needs.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            <div>
              <h3 className="font-bold text-[#d6a63a]">No Mortgage, No Fee</h3>
              <p className="text-sm text-white/70">You pay nothing unless we win.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#d6a63a]">Expert Advice</h3>
              <p className="text-sm text-white/70">We work for you, not lenders.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#d6a63a]">90+ Lenders</h3>
              <p className="text-sm text-white/70">Access to a wide lender panel.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#d6a63a] text-[#06182d] px-8 py-4 rounded-xl font-black">
              Book Your Free Consultation
            </button>
            <button className="border border-[#d6a63a] px-8 py-4 rounded-xl font-bold">
              View Mortgage Services
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="h-[540px] rounded-[35px] bg-gradient-to-br from-slate-700 via-slate-900 to-black flex items-center justify-center shadow-2xl border border-[#d6a63a]/20">
            <div className="w-[340px] h-[340px] rounded-full border-4 border-[#d6a63a] flex flex-col items-center justify-center text-center p-8 bg-[#06182d] shadow-[0_0_60px_rgba(214,166,58,.45)]">
              <h3 className="text-4xl font-black leading-tight">
                BAD CREDIT
                <br />
                MORTGAGES
              </h3>
              <p className="text-[#d6a63a] text-3xl font-black mt-6">
                NO MORTGAGE,
                <br />
                NO FEE.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#06182d] py-8">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-5">
          {["First Time Buyer", "Home Mover", "Remortgage", "Buy to Let", "Protection"].map((item) => (
            <div key={item} className="p-5 rounded-2xl border shadow-sm">
              <h3 className="font-black">{item}</h3>
              <p className="text-sm text-slate-600 mt-2">
                Tailored mortgage support for your situation.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 text-[#06182d] py-16">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-black mb-8">
              We Can Help If You Have...
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ["Bad Credit", "CCJs, defaults, missed payments or arrears."],
                ["Self Employed", "Sole trader, limited company or contractor."],
                ["Impaired Credit", "Experian, Equifax or Callcredit issues."],
                ["Low Deposit", "High LTV deals and flexible deposit options."],
                ["Complex Income", "Overtime, bonuses, commission or multiple incomes."],
                ["Refused Before?", "Specialist lenders may still consider your case."],
              ].map(([title, text]) => (
                <div key={title} className="border-l-4 border-red-700 pl-4">
                  <h3 className="font-black text-lg">{title}</h3>
                  <p className="text-slate-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#06182d] text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-black mb-4">
              Let’s Find the Right Mortgage for You
            </h2>
            <p className="text-white/70 mb-8">
              Book your free, no-obligation consultation today.
            </p>

            <div className="space-y-4 text-lg mb-8">
              <p>📞 020 3488 0780</p>
              <p>✉️ info@atlasmortgagesolutions.co.uk</p>
              <p>📍 London, United Kingdom</p>
            </div>

            <button
  type="submit"
  disabled={loading}
  className="bg-[#d6a63a] text-[#06182d] px-8 py-4 rounded-xl font-black w-full disabled:opacity-50"
>
  {loading ? "Sending..." : "Request Free Consultation"}
</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#04111f] px-8 py-8 text-xs text-white/60">
        <div className="max-w-7xl mx-auto">
          Your home may be repossessed if you do not keep up repayments on your
          mortgage. Replace FCA details with your exact authorised firm details
          before going live.
        </div>
      </footer>
      <section className="bg-[#0b1220] px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl font-black text-white mb-6">
      Speak With a Mortgage Specialist
    </h2>

    <p className="text-white/70 mb-10 text-lg">
      Get expert mortgage advice tailored to your situation.
    </p>

    <form onSubmit={handleSubmit} className="grid gap-6">
      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
      />

      <textarea
        placeholder="Tell us about your mortgage needs..."
        rows={5}
        value={form.message}
onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none"
      />

      <button
        type="submit"
        className="bg-[#fda63a] text-[#06182d] py-5 rounded-2xl font-black text-lg hover:scale-105 transition"
      >
        Request Free Consultation
      </button>
    </form>
  </div>
</section>
</main>
  );
}

