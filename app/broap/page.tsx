export default function BROAPPage() {
  // Replace this with real data later from your DB / JSON / contract
  const broap = {
    id: 1,
    title: "BROAP #001 — Kenn Daily Show",
    subtitle: "Proof you showed up, bro.",
    image: "/broaps/episode-001.png",
    maxSupply: 69,
    minted: 34,
    freeClaimStart: "2026-03-09T12:00:00-06:00",
    freeClaimEnd: "2026-03-09T13:00:00-06:00",
    archiveMintEnd: "2026-03-10T13:00:00-06:00",
    archiveMintLabel: "~$1 on Base",
    description:
      "Today’s BROAP is the live collectible for Kenn’s daily show. Mint it free during the live window, or grab it during archive mint if supply remains.",
  };

  const [now, setNow] = useState(new Date());
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const phase = useMemo<MintPhase>(() => {
    const current = now.getTime();
    const freeStart = new Date(broap.freeClaimStart).getTime();
    const freeEnd = new Date(broap.freeClaimEnd).getTime();
    const archiveEnd = new Date(broap.archiveMintEnd).getTime();

    if (current < freeStart) return "upcoming";
    if (current >= freeStart && current <= freeEnd) return "live";
    if (current > freeEnd && current <= archiveEnd) return "archive";
    return "closed";
  }, [now, broap.freeClaimStart, broap.freeClaimEnd, broap.archiveMintEnd]);

  const targetTime = useMemo(() => {
    if (phase === "upcoming") return new Date(broap.freeClaimStart).getTime();
    if (phase === "live") return new Date(broap.freeClaimEnd).getTime();
    if (phase === "archive") return new Date(broap.archiveMintEnd).getTime();
    return null;
  }, [phase, broap.freeClaimStart, broap.freeClaimEnd, broap.archiveMintEnd]);

  const remaining = Math.max(broap.maxSupply - broap.minted, 0);
  const progress = Math.min((broap.minted / broap.maxSupply) * 100, 100);

  const countdown = useMemo(() => {
    if (!targetTime) return null;

    const diff = Math.max(targetTime - now.getTime(), 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, [targetTime, now]);

  async function handleMint() {
    try {
      setMinting(true);

      // TODO:
      // 1. connect wallet
      // 2. call BROAP contract mint(tokenId, 1)
      // 3. if archive phase, send correct value
      // 4. refresh minted supply

      await new Promise((resolve) => setTimeout(resolve, 1200));
      alert("BROAP mint hook goes here.");
    } catch (error) {
      console.error(error);
      alert("Mint failed.");
    } finally {
      setMinting(false);
    }
  }

  function phaseBadge() {
    if (phase === "upcoming") {
      return (
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
          Upcoming
        </span>
      );
    }
    if (phase === "live") {
      return (
        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-300">
          Live Free Mint
        </span>
      );
    }
    if (phase === "archive") {
      return (
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-300">
          Archive Mint
        </span>
      );
    }
    return (
      <span className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
        Closed
      </span>
    );
  }

  function ctaLabel() {
    if (minting) return "Minting...";
    if (phase === "upcoming") return "Mint Opens Soon";
    if (phase === "live") return "Mint Free BROAP";
    if (phase === "archive") return `Archive Mint ${broap.archiveMintLabel}`;
    return "Mint Closed";
  }

  const mintDisabled = phase === "upcoming" || phase === "closed" || minting || remaining === 0;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(34,197,94,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm text-yellow-300">
                BROAP • Base • Daily Show Collectible
              </div>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                Today’s BROAP
              </h1>

              <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-300">
                {broap.title}
              </p>

              <p className="mt-4 max-w-2xl text-neutral-400">
                {broap.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {phaseBadge()}
                <span className="text-sm text-neutral-400">
                  Supply: <span className="font-semibold text-neutral-100">{broap.maxSupply}</span>
                </span>
                <span className="text-sm text-neutral-400">
                  Minted: <span className="font-semibold text-neutral-100">{broap.minted}</span>
                </span>
                <span className="text-sm text-neutral-400">
                  Remaining: <span className="font-semibold text-neutral-100">{remaining}</span>
                </span>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleMint}
                  disabled={mintDisabled}
                  className={`rounded-2xl px-6 py-3 font-semibold transition ${
                    mintDisabled
                      ? "cursor-not-allowed bg-neutral-800 text-neutral-500"
                      : phase === "archive"
                      ? "bg-yellow-400 text-black hover:scale-[1.03]"
                      : "bg-green-500 text-black hover:scale-[1.03]"
                  }`}
                >
                  {ctaLabel()}
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-400">
                <span>🟢 Free live mint</span>
                <span>🟡 Paid archive mint</span>
                <span>🔥 69 cap to start</span>
                <span>⛓ Base collectible</span>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                <img
                  src={broap.image}
                  alt={broap.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Countdown
                </div>

                {countdown ? (
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-center">
                      <div className="text-2xl font-black">{countdown.days}</div>
                      <div className="mt-1 text-xs uppercase text-neutral-500">Days</div>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-center">
                      <div className="text-2xl font-black">{countdown.hours}</div>
                      <div className="mt-1 text-xs uppercase text-neutral-500">Hours</div>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-center">
                      <div className="text-2xl font-black">{countdown.minutes}</div>
                      <div className="mt-1 text-xs uppercase text-neutral-500">Minutes</div>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-center">
                      <div className="text-2xl font-black">{countdown.seconds}</div>
                      <div className="mt-1 text-xs uppercase text-neutral-500">Seconds</div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-neutral-400">
                    This BROAP is no longer claimable from the primary mint page.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">How BROAP Works</h2>
            <p className="mt-4 text-neutral-400">
              BROAP is Kenn’s own on-chain attendance collectible on Base. If you show up live,
              you can mint for free during the claim window. If you miss the free window and supply
              remains, the mint moves to archive mode for a small price.
            </p>
            <p className="mt-4 text-neutral-400">
              It’s proof you showed up, bro — and over time it becomes a full collectible history
              of the show.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">Mint Lifecycle</div>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-sm text-green-300">Phase 1</div>
                <div className="mt-1 text-lg font-bold">Live Free Mint</div>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Mint free during the show or the limited live claim window.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-sm text-yellow-300">Phase 2</div>
                <div className="mt-1 text-lg font-bold">Archive Mint</div>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  If supply remains, unclaimed BROAPs move to archive mint for a small price.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <div className="text-sm text-pink-300">Phase 3</div>
                <div className="mt-1 text-lg font-bold">Secondary Only</div>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Once the mint closes or sells out, collectors can only get it on secondary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-800 bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Mint Progress</h2>
            <p className="mt-3 text-neutral-400">
              Starting cap is 69. Once daily viewership grows, later BROAPs can move to 420 max.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <span>{broap.minted} minted</span>
              <span>{broap.maxSupply} max</span>
            </div>
            <div className="mt-4 h-4 overflow-hidden rounded-full bg-neutral-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 text-sm text-neutral-500">
              {progress.toFixed(0)}% of supply minted
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Collect the Daily Show</h2>
              <p className="mt-4 max-w-2xl text-neutral-400">
                Every show can have its own BROAP using that day’s stream background as the art.
                Over time, collectors can build full sets, chase rare drops, and unlock special
                perks tied to live participation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href="/"
                className="rounded-2xl border border-neutral-700 px-6 py-3 font-semibold transition hover:border-neutral-500 hover:bg-neutral-900"
              >
                Back to Kenn’s Site
              </a>
              <a
                href="/vegas"
                className="rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
              >
                Vegas Creator House
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}