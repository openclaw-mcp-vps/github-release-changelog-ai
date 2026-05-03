export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          GitHub + OpenAI
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs from{' '}
          <span className="text-[#58a6ff]">GitHub commits &amp; PRs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          AI reads your commit messages and pull request descriptions, then produces clean,
          categorized release notes your users will actually understand.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get started — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['GitHub OAuth', 'OpenAI GPT-4o', 'Auto-categorization', 'Markdown export', 'Multi-repo support', 'Webhook triggers'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Connect GitHub', desc: 'Sign in with GitHub OAuth and select the repositories you want to track.' },
            { step: '02', title: 'AI processes commits', desc: 'OpenAI reads every commit and PR description, groups changes, and writes human-friendly summaries.' },
            { step: '03', title: 'Publish release notes', desc: 'Copy Markdown, push to your docs site, or trigger via webhook on every new release tag.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-3">{step}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited repositories',
              'AI-generated changelogs',
              'Commit &amp; PR categorization',
              'Markdown + JSON export',
              'Webhook integrations',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which GitHub plans are supported?',
              a: 'Any GitHub account — personal, organization, or enterprise — works via OAuth. Public and private repositories are both supported.',
            },
            {
              q: 'How does the AI categorize changes?',
              a: 'GPT-4o reads commit messages and PR titles/bodies, then groups them into sections like Features, Bug Fixes, Performance, and Breaking Changes based on conventional commit conventions and semantic analysis.',
            },
            {
              q: 'Can I customize the changelog format?',
              a: 'Yes. You can provide a custom prompt template, choose which categories to include, and export as Markdown, HTML, or JSON to fit your existing docs workflow.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="text-white font-medium cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  )
}
