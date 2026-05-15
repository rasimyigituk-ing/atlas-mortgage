export default function Home() {
  return (
    <main className="min-h-screen bg-[#06182d] text-white">
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div>
          <h1 className="text-4xl font-bold tracking-[0.2em] text-[#d6a63a]">
            ATLAS
          </h1>
          <p className="text-sm tracking-[0.3em] uppercase text-white/70">
            Mortgage Solutions
          </p>
        </div>

        <button className="bg-[#d6a63a] text-[#06182d] px-6 py-3 rounded-xl font-bold">
          Free Consultation
        </button>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#d6a63a] uppercase tracking-[0.2em] mb-4">
            Whole of Market Advice
          </p>

          <h2 className="text-6xl font-black leading-tight mb-6">
            NO MORTGAGE,
            <br />
            <span className="text-[#d6a63a]">NO FEE.</span>
          </h2>

          <div className="bg-red-700 inline-block px-5 py-3 rounded-lg font-bold mb-6">
            You pay nothing unless we secure your mortgage
          </div>

          <p className="text-xl text-white/80 mb-8 max-w-xl">
            We search thousands of mortgage deals from over 90 lenders to
            help find the right solution for your needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#d6a63a] text-[#06182d] px-8 py-4 rounded-xl font-bold">
              Book Consultation
            </button>

            <button className="border border-[#d6a63a] px-8 py-4 rounded-xl font-bold">
              View Services
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="h-[500px] rounded-[30px] bg-gradient-to-br from-slate-700 to-black flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full border-4 border-[#d6a63a] flex flex-col items-center justify-center text-center p-8 bg-[#06182d] shadow-[0_0_40px_rgba(214,166,58,.4)]">
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

      <section className="bg-white text-[#06182d] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black mb-10">
            We Can Help If You Have...
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl shadow-lg border">
              <h3 className="font-bold text-2xl mb-3">Bad Credit</h3>
              <p>
                CCJs, defaults, missed payments or impaired credit history.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border">
              <h3 className="font-bold text-2xl mb-3">
                Self Employed
              </h3>
              <p>
                Sole trader, LTD company or contractor mortgages.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-lg border">
              <h3 className="font-bold text-2xl mb-3">
                Low Deposit
              </h3>
              <p>
                Flexible options for clients with smaller deposits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}