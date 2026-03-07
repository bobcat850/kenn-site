export default function VegasCreatorHousePage() {
  const features = [
    {
      title: "Creator House",
      text: "A one-week private house in Las Vegas during Bitcoin Week 2026 for livestreams, interviews, podcasts, and creator collaboration.",
    },
    {
      title: "Small Gatherings",
      text: "An intimate rotating group of roughly 20 people max for quality conversations, builder energy, and strong on-camera moments.",
    },
    {
      title: "Shitcoin Meetup",
      text: "A side-event series at Sky High Lounge with fun crypto culture energy, networking, interviews, and memorable community moments.",
    },
  ];

  const budget = [
    { label: "House Rental", value: "$8k–$15k" },
    { label: "Production Setup", value: "$2k–$5k" },
    { label: "Shitcoin Meetup Events", value: "$3k–$10k" },
    { label: "Guest / Travel Support", value: "$5k–$10k" },
    { label: "Editing / Distribution", value: "$2k–$5k" },
  ];

  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      price: "$10k+",
      perks: ["Top billing on page", "Prime logo placement", "Featured livestream mention", "Integration into creator house content"],
    },
    {
      tier: "House Sponsor",
      price: "$5k+",
      perks: ["Logo placement", "On-site mention", "Included in recap content", "Access to creator house activation"],
    },
    {
      tier: "Meetup Sponsor",
      price: "$2k+",
      perks: ["Brand placement at side event", "Shoutout in meetup promotion", "Included in select clips and photos"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(34,197,94,0.2),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-300">
                Las Vegas • Bitcoin Week 2026 • Creator House
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                Vegas Creator House
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-300">
                A one-week content and community hub during Bitcoin Week 2026 in Las Vegas — built for interviews, livestreams, side events, and a small rotating circle of crypto creators and builders.
              </p>
              <p className="mt-4 max-w-2xl text-neutral-400">
                This is the first BRO-style activation in Vegas: a private rental house used to create content, host intimate gatherings, and anchor the week with the legendary <span className="font-semibold text-yellow-300">Shitcoin Meetup</span> at Sky High Lounge.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#support"
                  className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
                >
                  Support the House
                </a>
                <a
                  href="#sponsors"
                  className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-900"
                >
                  Become a Sponsor
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>🎥 Livestreams</span>
                <span>🎙 Podcasts</span>
                <span>🤝 Small Gatherings</span>
                <span>🔥 Shitcoin Meetup</span>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.2em] text-neutral-400">At a Glance</div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <div className="text-sm text-green-300">Format</div>
                  <div className="mt-1 text-xl font-bold">1 Week Rental House</div>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <div className="text-sm text-cyan-300">Capacity</div>
                  <div className="mt-1 text-xl font-bold">~20 People Max</div>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <div className="text-sm text-yellow-300">Special Event</div>
                  <div className="mt-1 text-xl font-bold">Sky High Lounge Meetup</div>
                </div>
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                  <div className="text-sm text-pink-300">Mission</div>
                  <div className="mt-1 text-xl font-bold">Content + Culture + Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">What We’re Building</h2>
          <p className="mt-3 text-neutral-400">
            This is not a giant public party. It is a focused content house and cultural gathering point with strong media output and a high-signal vibe.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div key={item.title} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Why It Matters</h2>
              <p className="mt-4 text-neutral-400">
                Conference floors are noisy and chaotic. The Vegas Creator House gives Kenn and collaborators a more controlled setting to produce quality interviews, host meaningful conversations, and create a memorable side presence during Bitcoin Week.
              </p>
              <p className="mt-4 text-neutral-400">
                It also gives sponsors and community partners a way to plug into real crypto culture instead of just buying generic booth visibility.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">Expected Output</div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-800 p-4">Founder interviews</div>
                <div className="rounded-2xl border border-neutral-800 p-4">Livestream segments</div>
                <div className="rounded-2xl border border-neutral-800 p-4">Podcast recordings</div>
                <div className="rounded-2xl border border-neutral-800 p-4">Clips for social media</div>
                <div className="rounded-2xl border border-neutral-800 p-4">Meetup photos / recaps</div>
                <div className="rounded-2xl border border-neutral-800 p-4">Sponsor shoutouts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Budget Snapshot</h2>
            <p className="mt-4 text-neutral-400">
              The goal is to keep the activation lean enough to execute quickly, while still producing quality content and making the side events memorable.
            </p>
            <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">Target Range</div>
              <div className="mt-2 text-4xl font-black text-yellow-300">$20k–$45k</div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {budget.map((item) => (
              <div key={item.label} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-5">
                <div className="text-sm text-neutral-400">{item.label}</div>
                <div className="mt-2 text-2xl font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="border-y border-neutral-800 bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Sponsor the House</h2>
            <p className="mt-3 text-neutral-400">
              Sponsors get a chance to support an authentic creator-led presence during Bitcoin Week, with a better vibe than generic conference sponsorship.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sponsorTiers.map((item) => (
              <div key={item.tier} className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">{item.tier}</div>
                <div className="mt-3 text-3xl font-black text-yellow-300">{item.price}</div>
                <ul className="mt-5 space-y-3 text-sm text-neutral-400">
                  {item.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Let’s Make Vegas Memorable</h2>
              <p className="mt-4 max-w-2xl text-neutral-400">
                The Vegas Creator House is about capturing the energy of Bitcoin Week with a more intimate, creator-first atmosphere. If you want to support the house, sponsor the meetup, or collaborate on content, now is the time.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href="#"
                className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
              >
                Back the Project
              </a>
              <a
                href="https://calendly.com/kennbosak"
                className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold transition hover:border-neutral-500 hover:bg-neutral-900"
              >
                Contact for Sponsorship
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}