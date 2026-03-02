import { CheckCircle, AlertTriangle, XCircle, ArrowRight, ShieldCheck, CupSoda } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-zinc-800 selection:text-white">
      {/* Top Banner */}
      <div className="w-full bg-zinc-900 border-b border-zinc-800 py-2 px-4 text-center">
        <p className="text-zinc-400 text-xs uppercase tracking-widest font-mono">
          Trusted by Classic Car Owners Worldwide
        </p>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
          Your Classic Car Has 400 Horsepower.<br className="hidden md:block" />
          <span className="text-zinc-500">But You&apos;re Still Holding Your Coffee Between Your Legs.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
          The only classic car cup holder that doesn&apos;t ruin your interior, requires zero drilling, and actually holds a Yeti.
        </p>

        <Link href="https://rinashi.com/products/universal-classic-car-cup-holder-v2" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors duration-200">
          Get Instant Convenience <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="mt-4 text-zinc-500 text-sm font-mono uppercase tracking-widest">
          No Drilling Guarantee
        </p>
      </section>

      {/* The Problem */}
      <section className="bg-zinc-950 py-32 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            &quot;Where do I put my drink, dammit?&quot;
          </h2>

          <p className="text-xl text-zinc-400 leading-relaxed mb-16 max-w-3xl">
            Classic car owners don&apos;t describe the lack of a cup holder in abstract terms. They describe it with <span className="text-white font-medium">burned laps, soaked carpets, and stained work shirts</span>. The physical discomfort is the entry point for nearly every forum thread.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-zinc-400" />
                The Burn
              </h3>
              <p className="text-zinc-400 italic">
                &quot;I got rear ended with a fresh mega-cup of coffee between my legs. I flew out of the car dancing and cursing — burned the crap out of my boys.&quot;
              </p>
              <p className="text-zinc-600 text-sm mt-4">— Vintage Mustang Owner</p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <XCircle className="w-5 h-5 text-zinc-400" />
                The Spill
              </h3>
              <p className="text-zinc-400 italic">
                &quot;I have new carpet and I&apos;m NOT going to be happy if anything is spilled... Now, where did you put that round bottle of water that has a tendency to roll off the seat?&quot;
              </p>
              <p className="text-zinc-600 text-sm mt-4">— Restored Interior Owner</p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-zinc-400" />
                The Shifter
              </h3>
              <p className="text-zinc-400 italic">
                &quot;With a full manual reverse pattern valve body, I need both hands, no beverages allowed. I drive my 4 speed every day... Only stained a couple of work shirts lol.&quot;
              </p>
              <p className="text-zinc-600 text-sm mt-4">— Manual Transmission Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dilemma */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">The Purist&apos;s Trap</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            What If The Problem Isn&apos;t Finding A Cup Holder?<br />
            <span className="text-zinc-500">It&apos;s Finding One That Actually Belongs.</span>
          </h2>

          <div className="space-y-16 mt-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl text-zinc-800 font-bold font-mono">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">No Drilling Allowed. Ever.</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  You spend $50k+ restoring your car to original spec. The idea of taking a drill to a numbers-matching pristine center console is unthinkable. <span className="text-white italic">&quot;My wife wants cup holders... But I am NOT going to drill holes through my stock center console.&quot;</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl text-zinc-800 font-bold font-mono">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Yeti Sizing Crisis.</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Most aftermarket holders were designed for 12oz cans from 1995. They are shallow and dangerous. <span className="text-white italic">&quot;When they say that it only fits a can, they mean it. It won&apos;t fit even a regular cup from most places. I&apos;d buy the jumbo.&quot;</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl text-zinc-800 font-bold font-mono">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Cheap Plastic Hatred.</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Those $10 plastic things that hang off the door? They warp in the sun, wobble constantly, and look entirely out of place next to your polished trim. <span className="text-white italic">&quot;I don&apos;t care how crazy, but I just don&apos;t want some late model plastic tray.&quot;</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl text-zinc-800 font-bold font-mono">04</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">The Car Show Dilemma.</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Your car needs to be a comfortable cruiser on Friday and a pristine show piece on Saturday. You need a solution that hides away completely when the judges are walking by.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-zinc-950 py-32 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-6">Introducing Rinashi</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Precision Engineering.<br />
            No Permanent Alterations.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-16">
            Built with respect for vintage interiors. Modern function, classic looks—an upgrade that actually belongs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black p-8 rounded-2xl border border-zinc-800 text-left">
              <CheckCircle className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Bolts to Your Seat Rail</h3>
              <p className="text-zinc-400">
                Installs under 5 minutes. No drilling, no permanent modifications. Just bolt it to your existing seat rail and go. Works with 99% of classic cars.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-2xl border border-zinc-800 text-left">
              <CupSoda className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Holds Your Yeti</h3>
              <p className="text-zinc-400">
                Precision-engineered to be deep enough for modern insulated tumblers and wide enough for your morning coffee. No more tippy, shallow holders.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-zinc-800 text-left">
              <ShieldCheck className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Aluminum & Billet Vibes</h3>
              <p className="text-zinc-400">
                We use premium materials that match the tactile feel of your classic. <span className="text-white italic">&quot;That could have been factory&quot;</span> is the standard we design to.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-zinc-800 text-left">
              <XCircle className="w-8 h-8 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Slides Out for Shows</h3>
              <p className="text-zinc-400">
                Going to a cars and coffee? Remove the holder cup in seconds. Your interior goes back to 100% factory original when you need it to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Value */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The $59.99 Sweet Spot.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-12 text-left">
            The market is broken. You can buy a $15 plastic holder from Amazon that will snap off in the sun and spill your drink. Or you can spend $250 on a custom console that feels overpriced for what it is.
            <br /><br />
            We built Rinashi to sit exactly where it should: premium quality materials, guaranteed fitment, and a price that feels right for an accessory that will last as long as your car.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CupSoda className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10 text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Universal No-Drill Cup Holder</h3>
              <p className="text-zinc-400 text-lg mb-8">Built in North America. Built for Enthusiasts.</p>
              
              <div className="text-5xl font-bold text-white mb-8 flex items-end gap-4">
                $59.99
                <span className="text-xl text-zinc-500 line-through pb-1">$82.00</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-zinc-500" />
                  Fits 99% of classic car seat rails
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-zinc-500" />
                  Holds modern insulated tumblers
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-zinc-500" />
                  Zero permanent modifications required
                </li>
              </ul>

              <Link href="https://rinashi.com/products/universal-classic-car-cup-holder-v2" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors duration-200">
                Secure Yours Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-zinc-950 py-32 border-t border-zinc-900 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Stop Settling for &quot;Just Living With It&quot;.
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          It&apos;s time to enjoy your Sunday drive without risking a 3rd degree burn or a ruined carpet. 
        </p>
        <Link href="https://rinashi.com/products/universal-classic-car-cup-holder-v2" className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-700 transition-colors duration-200">
          Shop Rinashi Classic Cup Holder
        </Link>
      </section>
    </main>
  );
}
