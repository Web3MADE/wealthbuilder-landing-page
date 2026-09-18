import Image from "next/image";

const stages = [
  {
    number: "01",
    title: "Grow",
    description: "Long-term crypto wealth management.",
    status: "Starting here",
    image: "WB_growGraphIcon.png",
    current: true,
  },
  {
    number: "02",
    title: "Borrow",
    description: "Access capital without selling.",
    status: "Coming later",
    image: "WB_coinStackIcon.png",
    current: false,
  },
  {
    number: "03",
    title: "Spend",
    description: "Cards & everyday payments.",
    status: "Coming later",
    image: "WB_cardIcon.png",
    current: false,
  },
] as const;

export function MoreThanInvesting({ growStatus = "Starting here" }: { growStatus?: string }) {
  return (
    <section className="more-section scenic-section" id="more-than-investing" aria-labelledby="more-title">
      <div className="container more-content reveal">
        <div className="more-heading">
          <h2 id="more-title">Built for <span>more</span> than investing</h2>
          <p>Starting with long-term crypto wealth building.</p>
        </div>

        <ol className="future-grid">
          {stages.map((stage) => (
            <li className={`future-card${stage.current ? " future-card-current" : " future-card-later"}`} key={stage.number}>
              <div className="future-card-copy">
                <span className="future-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <span className="future-status">{stage.current ? growStatus : stage.status}</span>
              </div>
              <Image
                src={`/assets/${stage.image}`}
                alt=""
                width={1254}
                height={1254}
                sizes="(max-width: 900px) 42vw, 15vw"
                className="future-art"
              />
            </li>
          ))}
        </ol>

        <p className="future-note">
          WealthBuilder begins with long-term wealth management,
          <br className="future-note-break" /> then expands into the rest of the user’s crypto financial life.
        </p>
      </div>
    </section>
  );
}
