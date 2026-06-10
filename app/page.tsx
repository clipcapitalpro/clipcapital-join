import Image from "next/image";
import Reveals from "./components/Reveals";
import SmoothAnchors from "./components/SmoothAnchors";
import TallyLoader from "./components/TallyLoader";

export default function Home() {
  return (
    <>
      <Reveals />
      <SmoothAnchors />
      <TallyLoader />

      {/* SVG icon defs */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <g id="ic-mic">
            <rect x="9" y="2" width="6" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M5 10a7 7 0 0 0 14 0M12 17v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g id="ic-vid">
            <rect x="2" y="6" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M16 10l6-3v10l-6-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </g>
          <g id="ic-phone">
            <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.4.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .55 3.4 1 1 0 0 1-.24 1z" fill="currentColor" />
          </g>
        </defs>
      </svg>

      {/* Topbar */}
      <div className="topbar">
        <div className="brand">
          <Image className="logo-tile" src="/cc-logo-cyan.png" alt="Clip Capital" width={30} height={30} />
          {" "}Clip Capital
        </div>
        <a href="#apply" className="btn">Apply</a>
      </div>

      {/* Hero */}
      <header className="hero">
        <div className="hero-glow"></div>
        <Image className="hero-logo" src="/cc-logo-cyan.png" alt="Clip Capital" width={74} height={74} />
        <span className="kick"><span className="d"></span>Invite only · By application</span>
        <h1>Get your shot at the #1 clipping <span className="accent">powerhouse</span> on the internet.</h1>
        <p>We don&apos;t hire openly. Every application is read by hand, and only a few make it inside - the most disciplined, creative, and hungry people in the game.</p>
        <div className="hero-cta"><a href="#apply" className="btn">Apply{"\u00A0"}→</a></div>
      </header>

      {/* Scarcity stats */}
      <div className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat reveal"><div className="n">Only a few</div><div className="c">get in. Most who apply don&apos;t.</div></div>
            <div className="stat reveal"><div className="n accent">10,000+</div><div className="c">clippers you&apos;d work alongside from day one.</div></div>
            <div className="stat reveal"><div className="n accent">Millions</div><div className="c">of views generated every month.</div></div>
            <div className="stat reveal"><div className="n">Every day</div><div className="c">direct access to the Clip Capital team.</div></div>
          </div>
        </div>
      </div>

      {/* Who we accept */}
      <section className="block" id="circle">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Who we accept</span>
            <h2>Seats at the table, not <span className="accent">roles to fill</span>.</h2>
            <p className="lead">Inside, you&apos;re part of a small circle building what&apos;s next in media. We move fast, play to win, and reward the ones who deliver. These are the seats we&apos;re filling right now.</p>
          </div>
          <div className="roles">
            <a href="#apply" className="role reveal"><div className="ic">SM</div><h4>Submissions Manager</h4><span>if you can review hundreds of clips and never pass a weak one</span></a>
            <a href="#apply" className="role reveal"><div className="ic">LM</div><h4>Launch Manager</h4><span>if you can take a signed client live and running in days</span></a>
            <a href="#apply" className="role reveal"><div className="ic">CS</div><h4>Clipper Success Director</h4><span>if you can turn a network of clippers into a machine</span></a>
            <a href="#apply" className="role reveal"><div className="ic">EC</div><h4>Elite Clipper</h4><span>if your clips already pull millions and you want a seat on retainer</span></a>
          </div>
          <div className="also reveal">
            <span className="also-lbl">Also building out</span>
            <a href="#apply" className="chip">Content</a>
            <a href="#apply" className="chip">Engineering</a>
            <a href="#apply" className="chip">Operations</a>
            <a href="#apply" className="chip">Design</a>
            <a href="#apply" className="chip">Elite at something else? Tell us</a>
          </div>
          <div className="section-cta"><a href="#apply" className="btn">Apply →</a></div>
        </div>
      </section>

      {/* Why inside beats outside */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Why inside beats outside</span>
            <h2>The opportunities you can&apos;t reach from where you&apos;re <span className="accent">standing</span>.</h2>
          </div>
          <div className="benefits">
            <div className="benefit reveal"><h4>Deals at scale</h4><p>The reach you&apos;ll never get freelancing alone.</p></div>
            <div className="benefit reveal"><h4>Real payouts</h4><p>Long-term positions and real money. Not one-off gigs. But only for those who deliver.</p></div>
            <div className="benefit reveal"><h4>A room full of killers</h4><p>Surrounded by people as hungry as you are. Everyone here pushes everyone forward.</p></div>
          </div>
          <div className="section-cta"><a href="#apply" className="btn">Apply →</a></div>
        </div>
      </section>

      {/* Track record */}
      <section className="block track4">
        <div className="wrap">
          <div className="grid">
            <div className="reveal">
              <span className="eyebrow">Track record</span>
              <h2>The machine only <span className="accent">gets bigger</span>.</h2>
              <p className="sub">We could fill this page with numbers - but they&apos;d be out of date by next month. The reach, the network, the views: all climbing.</p>
              <p className="close">Already built. You&apos;d be <span className="accent">stepping into it</span>.</p>
            </div>
            <div className="chart reveal">
              <div className="ctag"><span className="dot"></span>Live · always climbing</div>
              <svg viewBox="0 0 400 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#00A3C4" />
                    <stop offset="1" stopColor="#A8EEFF" />
                  </linearGradient>
                  <linearGradient id="cf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="rgba(0,226,255,.28)" />
                    <stop offset="1" stopColor="rgba(0,226,255,0)" />
                  </linearGradient>
                </defs>
                <path d="M0,158 L45,148 L95,135 L145,124 L195,100 L245,84 L295,55 L345,36 L400,12 L400,180 L0,180 Z" fill="url(#cf)" />
                <path className="line" d="M0,158 L45,148 L95,135 L145,124 L195,100 L245,84 L295,55 L345,36 L400,12" />
              </svg>
            </div>
          </div>
          <div className="section-cta"><a href="#apply" className="btn">Apply →</a></div>
        </div>
      </section>

      {/* Direct line to leadership */}
      <section className="block teamsec">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Your support system</span>
            <h2>A direct line to <span className="accent">leadership</span>.</h2>
            <p className="lead">You&apos;re never building alone. Daily contact with the people running Clip Capital - feedback, coaching, and real-time problem solving.</p>
          </div>
          <div className="stage">
            <div className="appwin reveal">
              <div className="appbar">
                <span className="pdot"></span><span className="pdot"></span><span className="pdot"></span>
                <span className="url">clip-capital-family · private channel</span>
              </div>
              <div className="appbody">
                <div className="msg"><div className="av avlogo"></div><div><div className="who">Lara</div><div className="tx">Just reviewed today&apos;s submissions - feedback incoming.</div></div></div>
                <div className="msg"><div className="av avlogo"></div><div><div className="who">Hassan</div><div className="tx">Approval rate&apos;s up this week. Keep the quality high.</div></div></div>
                <div className="msg"><div className="av avlogo"></div><div><div className="who">Jaidev</div><div className="tx">Great momentum. Let&apos;s get the new campaign live today.</div></div></div>
                <div className="msg"><div className="av avlogo"></div><div><div className="who">Luka</div><div className="tx">On it - pulling the assets now.</div></div></div>
                <div className="typing"><i></i><i></i><i></i>{"\u00A0"}Jaidev is typing…</div>
              </div>
            </div>
            <div className="floatcall reveal">
              <span className="live"><span className="d"></span>LIVE · DAILY STANDUP</span>
              <div className="vgrid">
                <div className="vtile jpfp"><span className="vname">Jaidev Bhogal</span></div>
                <div className="vtile kpfp"><span className="vname">Luka Filipovic</span></div>
              </div>
              <div className="calls">
                <div className="cbtn"><svg viewBox="0 0 24 24"><use href="#ic-mic" /></svg></div>
                <div className="cbtn"><svg viewBox="0 0 24 24"><use href="#ic-vid" /></svg></div>
                <div className="cbtn end"><svg viewBox="0 0 24 24"><use href="#ic-phone" /></svg></div>
              </div>
            </div>
          </div>
          <div className="titledesc reveal">
            <div className="td"><h4>Your own channel</h4><p>Direct access to Lara, Hassan and the core team inside #clip-capital-family. Daily communication, no gatekeeping.</p></div>
            <div className="td"><h4>Daily standups</h4><p>Every day the team gets on a call with Jaidev and Luka - performance, planning, problem solving.</p></div>
          </div>
          <div className="section-cta"><a href="#apply" className="btn">Apply →</a></div>
        </div>
      </section>

      {/* Be honest with yourself */}
      <section className="block fit">
        <div className="wrap">
          <div className="top reveal">
            <h2>Be honest with <span className="accent">yourself</span>.</h2>
            <p>This role isn&apos;t for everyone - and that&apos;s the point. Read both columns. If you can&apos;t say yes to every line on the left, this isn&apos;t the right fit.</p>
          </div>
          <div className="cols">
            <div className="reveal">
              <div className="colhead"><span className="accent">Yes —</span> this is for you</div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You&apos;re a killer in your lane and you want to run it, not just work in it</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You&apos;ve got real hunger - the kind that doesn&apos;t need motivating every morning</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You move fast and take ownership - you don&apos;t wait to be told</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You communicate sharp and can lead</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You&apos;d rather be paid on results than clock hours (base + performance)</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You&apos;re all in - ready to go from operator to director as we scale</p></div>
              <div className="fitrow"><span className="mk yes">✓</span><p>You can give 8+ hours a day (full-time preferred - school + hunger can work)</p></div>
            </div>
            <div className="reveal">
              <div className="colhead no">No — not for you if</div>
              <div className="fitrow no"><span className="mk no">×</span><p>You need someone lighting a fire under you</p></div>
              <div className="fitrow no"><span className="mk no">×</span><p>You want a guaranteed salary with no performance attached</p></div>
              <div className="fitrow no"><span className="mk no">×</span><p>You wait to be led instead of leading</p></div>
              <div className="fitrow no"><span className="mk no">×</span><p>You just want to &quot;try it and see&quot;</p></div>
              <div className="fitrow no"><span className="mk no">×</span><p>You disappear when things get hard</p></div>
              <div className="fitrow no"><span className="mk no">×</span><p>You&apos;re looking for a side gig, not something to dominate</p></div>
            </div>
          </div>
          <div className="section-cta"><a href="#apply" className="btn">Apply →</a></div>
        </div>
      </section>

      {/* Apply */}
      <section className="block apply" id="apply">
        <div className="apply-glow"></div>
        <div className="wrap">
          <span className="eyebrow" style={{ justifyContent: "center", display: "flex", position: "relative", zIndex: 2 }}>Apply below</span>
          <h2 style={{ marginTop: "20px" }}>Think you&apos;ve got what it <span className="accent">takes?</span></h2>
          <p className="lead">Only a few get in. Every application is read by hand. Answer honestly, answer sharp - low-effort applications get deleted, and we can tell in one line. If you&apos;re a fit, you&apos;ll hear from us.</p>
          <div className="form-embed">
            <iframe
              data-tally-src="https://tally.so/embed/1ARGJg?alignLeft=1&hideTitle=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height={800}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Clip Capital Application"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>© Clip Capital - Admission by application only. We move fast on the ones that fit.</footer>
    </>
  );
}
