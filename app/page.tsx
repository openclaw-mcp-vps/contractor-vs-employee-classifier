export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Classify Workers.<br />
          <span className="text-[#58a6ff]">Avoid IRS Penalties.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Answer a short questionnaire about your worker relationships. Our tool applies IRS classification rules and instantly flags misclassification risks with actionable recommendations.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Get Started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚖️", title: "IRS Rule Engine", desc: "Covers behavioral, financial, and type-of-relationship factors per IRS guidelines." },
            { icon: "🚨", title: "Risk Flagging", desc: "Instantly highlights high-risk classifications before they become costly audits." },
            { icon: "📋", title: "Actionable Reports", desc: "Get a clear PDF-ready report with specific steps to remediate each risk." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited worker classifications",
              "Full IRS 20-factor analysis",
              "Risk score & detailed report",
              "Remediation recommendations",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What IRS rules does this tool use?",
              a: "We apply the IRS Common Law Rules covering behavioral control, financial control, and type-of-relationship factors — the same criteria the IRS uses during audits."
            },
            {
              q: "Who should use this tool?",
              a: "Startups hiring contractors, staffing agencies, and HR departments that want to proactively identify and fix worker misclassification before facing IRS penalties."
            },
            {
              q: "Is this a substitute for legal advice?",
              a: "No. This tool provides risk assessments based on IRS guidelines to help you prepare, but you should consult a qualified employment attorney for legal advice specific to your situation."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Contractor Classifier. Not legal advice.
      </footer>
    </main>
  );
}
