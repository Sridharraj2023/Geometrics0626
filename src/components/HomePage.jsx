import imgConstructionOverview from "../assets/construction-overview.jpg";
import imgTeam from "../assets/team.jpg";
import imgWorkerSite from "../assets/worker-site.jpg";
import imgEngineerVest from "../assets/engineer-vest.jpg";
import imgEngineerRooftop from "../assets/engineer-rooftop.jpg";
import imgEngineerBlueprints from "../assets/engineer-blueprints.jpg";
import imgAerialLift from "../assets/aerial-lift-worker.jpg";

const IMAGES = {
  hero: imgConstructionOverview,
  story: imgTeam,
  workers: imgTeam,
  spaceFrames: imgWorkerSite,
  architectural: imgEngineerBlueprints,
  peb: imgEngineerVest,
  multiStoreyed: imgEngineerRooftop,
  promise: imgAerialLift,
};

const MANTRA = ["Ideation", "Integration", "Initiation", "Implementation"];

const VALUES = [
  {
    title: "Our Vision",
    copy: "Innovation, Client. Our first priority in everything we do.",
  },
  {
    title: "Our Mission",
    copy: "Building Your Dreams with steel.",
  },
  {
    title: "Our Goal",
    copy: "Delivering projects On time, Every time.",
  },
  {
    title: "Our Philosophy",
    copy: "We don't do different things. We do things differently.",
  },
];

const SPECIALIZATIONS = [
  {
    title: "Space Frames",
    copy:
      "Our space frames are the ideal choice for a wide range of projects, offering unmatched flexibility, lightweight, durability, and superior rigidity.",
    image: IMAGES.spaceFrames,
  },
  {
    title: "Architectural Structures",
    copy:
      "At GEOMETRICS, architecture is at the heart of every project we design. Our approach blends creativity, innovation, and structural clarity.",
    image: IMAGES.architectural,
  },
  {
    title: "Pre Engineered Buildings",
    copy:
      "We are proud to be among the pioneers of Pre-Engineered Building (PEB) technology in South India since 2004.",
    image: IMAGES.peb,
  },
  {
    title: "Multi-Storeyed Buildings",
    copy:
      "As times change, there has been a slow and steady shift toward prefab and precast construction technologies.",
    image: IMAGES.multiStoreyed,
  },
];

const FOOTER_COL1 = ["Contact Us", "Our Story", "Projects", "Clientele", "Testimonials", "Blog"];
const FOOTER_COL2 = ["Space Frames", "Architectural Structures", "Pre-Engineered Buildings", "Multi-Storeyed Buildings", "Precast Homes", "Community"];

function ArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg viewBox="0 0 36 36" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="18" cy="18" r="10" />
      <circle cx="18" cy="18" r="4" />
      <path d="M18 4v4M18 28v4M4 18h4M28 18h4" strokeLinecap="round" />
    </svg>
  );
}

function StorySection() {
  return (
    <section id="story" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:items-start">
          <div>
            <h2 className="text-4xl font-light uppercase leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {MANTRA.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="flex items-start pt-2">
            <p className="max-w-3xl text-base leading-9 text-gray-700">
              Geometrics Space Structures Private Limited, founded in 2004, is committed to
              delivering projects that meet global standards. Specializing in Spaceframes,
              Architectural Structures, Pre-Engineered Steel Buildings, Multi-Storied Steel
              Buildings and Precast : Factory Built Homes, the company has steadily grown through
              teamwork and dedicated efforts.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:items-center">
          <img
            src={IMAGES.workers}
            alt="Geometrics team"
            className="h-[420px] w-full object-cover"
          />
          <div className="lg:pl-4">
            <p className="text-4xl font-light uppercase text-gray-900 leading-tight">
              Building a brighter future
            </p>
            <div style={{ width: '40px', height: '2px', background: 'var(--color-brand)', margin: '20px 0' }} />
            <p className="max-w-xl text-base leading-9 text-gray-700">
              We owe our success to our ironworkers who risk their lives to make our dreams a
              reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        {VALUES.map((value) => (
          <article key={value.title} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white">
              <ValueIcon />
            </div>
            <h3 className="mt-6 text-xl font-light uppercase text-brand">{value.title}</h3>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-gray-700">
              {value.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SpecializationsSection() {
  return (
    <section id="specializations" className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:items-start">
          <div>
            <h2 className="text-5xl font-light leading-none text-brand lg:text-6xl">
              Specializations
            </h2>
            <p className="mt-5 text-2xl font-light text-gray-900">
              Our focused portfolio
            </p>
          </div>
          <p className="max-w-4xl text-xl leading-10 text-gray-900">
            With disciplined engineering and dedicated execution, Geometrics delivers structural
            systems across space frames, architectural structures, pre-engineered buildings, and
            multi-storeyed buildings.
          </p>
        </div>

        <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALIZATIONS.map((item) => (
            <article key={item.title} className="group relative min-h-[560px] overflow-hidden bg-black">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.80)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white lg:p-10">
                <h3 className="text-3xl font-light leading-tight">{item.title}</h3>
                <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-white/80">
                  {item.copy}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-3 text-base text-white"
                >
                  Click to Read More
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPromise() {
  return (
    <section id="projects" className="relative min-h-[520px] overflow-hidden bg-gray-900">
      <img
        src={IMAGES.promise}
        alt="Completed Geometrics project"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center 35%' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.20)_60%,rgba(0,0,0,0.05)_100%)]" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center justify-end px-5 py-20 text-right text-white sm:px-8 lg:px-12">
        <div className="max-w-xl">
          <h2 className="text-5xl font-light uppercase leading-tight sm:text-6xl lg:text-7xl">
            We deliver on time
          </h2>
          <div style={{ width: '48px', height: '2px', background: 'var(--color-brand)', margin: '24px 0 24px auto' }} />
          <p className="text-base uppercase leading-8 text-white/80">
            Prosperity to the customers through our innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-brand text-white">
      {/* Photo strip */}
      <div className="h-36 overflow-hidden">
        <img src={IMAGES.story} alt="Geometrics team" className="h-full w-full object-cover object-top" />
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_1.4fr] lg:gap-16">

          {/* Column 1 */}
          <ul className="space-y-4">
            {FOOTER_COL1.map((item) => (
              <li key={item}>
                <a href="#top" className="text-sm text-white/85 transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-4">
            {FOOTER_COL2.map((item) => (
              <li key={item}>
                <a href="#top" className="text-sm text-white/85 transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Column 3 — social + newsletter */}
          <div>
            <div className="flex items-center gap-3">
              <SocialIcon label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </SocialIcon>
              <SocialIcon label="X / Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </SocialIcon>
              <SocialIcon label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </SocialIcon>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/80">
              Subscribe to our newsletter for the latest news straight to your inbox.
            </p>

            <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email ID to subscribe"
                className="w-full border border-white/50 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/45 outline-none focus:border-white"
              />
              <button
                type="submit"
                className="mt-3 border border-white px-6 py-2 text-xs font-medium tracking-widest text-white transition-colors hover:bg-white hover:text-brand"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <p className="text-xs text-white/75">
            © 2026 All Rights Reserved. Geometrics Space Structures Pvt. Ltd.
          </p>
          <a href="#" className="text-xs text-white/75 transition-colors hover:text-white">
            Cookie Preferences
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <StorySection />
      <ValuesSection />
      <SpecializationsSection />
      <ProjectPromise />
      <Footer />
    </div>
  );
}
