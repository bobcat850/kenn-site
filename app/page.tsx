export default function KennBosakLandingPage() {
  const cards = [
    {
      title: "BCH BLISS Campaign",
      text: "Help send Kenn to BCH BLISS in Ljubljana, Slovenia (May 15–17). This community campaign covers travel, lodging, and boots-on-the-ground content so the BCH community gets livestreams, interviews, and real event coverage.",
      cta: "Support the Campaign",
      href: "https://fundme.cash/campaign/108",
    },
    {
      title: "BTC 2026 Creator House",
      text: "Support the idea of a Vegas creator house during Bitcoin Week 2026. A one-week hub for interviews, livestreams, builder conversations, and the legendary 'Shitcoin Meetup' side event.",
      cta: "Explore the Vision",
      href: "/vegas",
    },
    {
      title: "BROAP",
      text: "Blockchain Record Of Attendance Protocol for real Bro Bro's",
      cta: "It's proof you showed up, Bro Bro",
      href: "/broap",
    },
    {
      title: "Book Kenn / Partner Up",
      text: "Want to collaborate with Kenn, sponsor content, book an appearance, or host an interview? Let’s build something fun for the crypto community.",
      cta: "Get in Touch",
      href: "#contact",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_left,rgba(250,204,21,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-300">
                Bitcoin • BCH • Conferences • Livestreams
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                Kenn Bosak
              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-300">
                Crypto’s favorite conference troublemaker. Kenn travels the world livestreaming events, interviewing builders, stirring debate, and bringing the community along for the ride.
              </p>

              <p className="mt-4 max-w-2xl text-neutral-400">
                From Bitcoin and Bitcoin Cash conferences to legendary side events and spontaneous livestreams — if something interesting is happening in crypto, Kenn is probably there with a camera.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#campaigns"
                  className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
                >
                  Support Current Campaign
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-900"
                >
                  Book Kenn
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>🎥 Livestream Interviews</span>
                <span>🎤 Conference Coverage</span>
                <span>🍕 Community Meetups</span>
                <span>🔥 Shitcoin Debates</span>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">Live Focus</div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="text-sm text-green-300">Current Mission</div>
                  <div className="mt-1 text-xl font-bold">BCH BLISS 2026</div>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    The community is sending Kenn to Ljubljana to cover BCH BLISS with interviews, livestreams, and boots-on-the-ground content.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="text-sm text-yellow-300">Next Big Idea</div>
                  <div className="mt-1 text-xl font-bold">Vegas Creator House</div>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    A one-week creator house during Bitcoin Week in Las Vegas featuring livestreams, interviews, and the legendary Shitcoin Meetup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="campaigns" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Campaigns & Projects</h2>
          <p className="mt-3 text-neutral-400">
            Support Kenn’s appearances, follow current campaigns, and see what projects and events are coming next.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-6 transition hover:-translate-y-1 hover:border-green-500/40 hover:bg-neutral-900/90"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="mt-3 min-h-27.5 text-sm leading-6 text-neutral-400">{card.text}</p>
              <div className="mt-6 inline-flex items-center font-semibold text-green-300 transition group-hover:text-green-200">
                {card.cta} <span className="ml-2">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="text-3xl font-black text-green-300">Media</div>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Interviews, podcasts, livestreams, commentary, event coverage, and community storytelling.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="text-3xl font-black text-yellow-300">Events</div>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Conference activations, meetups, creator houses, and sponsor-friendly community experiences.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="text-3xl font-black text-cyan-300">Partnerships</div>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Collaborations with brands, protocols, creators, founders, and communities that want real engagement.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Work with Kenn</h2>
            <p className="mt-4 max-w-2xl text-neutral-400">
              If you want to collaborate with Kenn, sponsor content, host an interview, or bring him to your event, reach out here and let’s make it happen.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:epiconly@tuta.com"
                className="rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Email Kenn’s Team
              </a>
              <a
                href="https://calendly.com/kennbosak"
                className="rounded-2xl border border-neutral-700 px-5 py-3 font-semibold transition hover:border-neutral-500 hover:bg-neutral-900"
              >
                Sponsor Inquiry
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">Suggested Links</div>
            <div className="mt-5 space-y-4 text-sm">
              <a href="https://youtube.com/kennbosak" className="block rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:border-neutral-600">
                Latest videos & livestreams
              </a>
              <a href="#" className="block rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:border-neutral-600">
                Current campaigns
              </a>
              <a href="#" className="block rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:border-neutral-600">
                Event appearances
              </a>
              <a href="#" className="block rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:border-neutral-600">
                Sponsorship deck / media kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}