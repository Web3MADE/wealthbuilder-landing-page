import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EarlyAccessForm } from "@/components/early-access-form";
import { MotionObserver } from "@/components/motion-observer";
import { MoreThanInvesting } from "@/components/more-than-investing";

const asset = "/assets/";

const policy = [
  { label: "Goal", value: "Long-term crypto wealth", icon: "WB_icon_chart.png" },
  { label: "Risk", value: "Moderate", icon: "WB_icon_uptrend.png" },
  { label: "Preference", value: "BTC / ETH focused", icon: "WB_icon_piechart.png" },
  { label: "AI Autonomy", value: "Recommendations only", icon: "WB_icon_AIBrain.png" },
];

const steps = [
  { number: "01", title: "Define", description: "Set your goals, risk, and AI autonomy.", icon: "WB_icon_checklist.png" },
  { number: "02", title: "Fund", description: "Bring your crypto into your self-custodial WealthBuilder account.", icon: "WB_icon_wallet.png" },
  { number: "03", title: "Grow", description: "WealthBuilder monitors, recommends and, where permitted, executes within your rules.", icon: "WB_icon_uptrend.png" },
];

const security = [
  { title: "Self-custodial", description: "You control your assets.", icon: "WB_icon_lock.png" },
  { title: "Bounded AI autonomy", description: "The agent only acts within your permissions.", icon: "WB_icon_brain_2.png" },
  { title: "Security-aware decisions", description: "Risk and protocol exposure are considered alongside returns.", icon: "WB_icon_security.png" },
];

function Icon({ src, alt = "" }: { src: string; alt?: string }) {
  return <Image src={`${asset}${src}`} alt={alt} width={64} height={64} className="feature-icon" />;
}

export default function Home() {
  return (
    <>
      <MotionObserver />
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content">
          <section className="hero section-image" aria-labelledby="hero-title">
            <div className="hero-glow" aria-hidden="true" />
            <div className="container hero-layout">
              <div className="hero-copy">
                <h1 id="hero-title">Your Personal<br /><span>Crypto Bank</span></h1>
                <p className="hero-lead">Starting with long-term crypto wealth building.</p>
                <p className="hero-description">Keep your crypto in one place, define how you want to build wealth, and let WealthBuilder handle the complexity.</p>
                <a className="button button-hero" href="#early-access">Join Early Access <span aria-hidden="true">→</span></a>
                <p className="trust-line">Self-custodial <span>·</span> AI-assisted <span>·</span> Security-first</p>
              </div>
              <div className="hero-product">
                <Image src={`${asset}WB_product_rightFacing.png`} alt="WealthBuilder product interface shown on a phone" width={1086} height={1448} priority sizes="(max-width: 760px) 70vw, 45vw" />
              </div>
            </div>
          </section>

          <section className="wealth-section scenic-section" id="your-wealth" aria-labelledby="wealth-title">
            <div className="container wealth-layout reveal">
              <div className="section-intro">
                <p className="eyebrow">YOUR WEALTH. YOUR RULES.</p>
                <h2 id="wealth-title">Your wealth.<br /><span>Your rules.</span></h2>
                <p>WealthBuilder manages your crypto around the strategy you define — not by constantly chasing the highest APY.</p>
              </div>
              <div className="policy-panel glass-panel" aria-label="Personal Wealth Policy">
                <div className="policy-heading"><Icon src="WB_icon_checklist.png" /><h3>Personal Wealth Policy</h3></div>
                <div className="policy-grid">
                  {policy.map((item) => (
                    <div className="policy-item" key={item.label}>
                      <Icon src={item.icon} />
                      <div><p className="item-label">{item.label}</p><p className="item-value">{item.value}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="steps-section scenic-section" id="how-it-works" aria-labelledby="steps-title">
            <div className="container reveal">
              <p className="eyebrow">HOW IT WORKS</p>
              <h2 id="steps-title">How it works</h2>
              <p className="section-subtitle">Three simple steps to a smarter crypto future.</p>
              <ol className="steps-grid">
                {steps.map((step) => (
                  <li className="step-card glass-panel" key={step.number}>
                    <span className="step-number">{step.number}</span>
                    <Icon src={step.icon} />
                    <div className="step-text"><h3>{step.title}</h3><p>{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="security-section scenic-section" id="security" aria-labelledby="security-title">
            <div className="container reveal">
              <h2 id="security-title">Your money <span>stays yours.</span></h2>
              <div className="security-grid">
                {security.map((item) => (
                  <article className="security-card glass-panel" key={item.title}>
                    <Icon src={item.icon} />
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <MoreThanInvesting />

          <section className="early-section scenic-section" id="early-access" aria-labelledby="early-title">
            <div className="container early-layout reveal">
              <div><h2 id="early-title">Build your crypto wealth <span>differently.</span></h2><p>WealthBuilder is being built for people who already believe crypto should be their financial home.</p></div>
              <EarlyAccessForm />
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
