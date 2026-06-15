import heroBg from "../assets/construction-overview.jpg";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ flex: '3', minHeight: 0, background: 'var(--color-surface-dark)' }}
    >
      {/* Background photo */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, rgba(14,11,8,0.85) 0%, rgba(28,18,8,0.78) 40%, rgba(42,26,10,0.70) 60%, rgba(10,10,10,0.82) 100%)',
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Wireframe hexagon — right side */}
      <svg
        className="absolute hidden lg:block"
        style={{ right: '6%', top: '50%', transform: 'translateY(-50%)', opacity: 0.18 }}
        width="520" height="480" viewBox="0 0 520 480" fill="none"
      >
        <polygon points="260,24 472,132 472,348 260,456 48,348 48,132"
          stroke="white" strokeWidth="1" />
        <polygon points="260,70 426,160 426,320 260,410 94,320 94,160"
          stroke="white" strokeWidth="0.5" />
        <polygon points="260,116 380,188 380,292 260,364 140,292 140,188"
          stroke="white" strokeWidth="0.5" />
        {[[260,24,260,456],[48,132,472,348],[472,132,48,348]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.4" />
        ))}
        {[[260,24],[472,132],[472,348],[260,456],[48,348],[48,132]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="5" fill="white" opacity="0.6" />
        ))}
        <circle cx="260" cy="240" r="32" stroke="white" strokeWidth="0.8" />
        <circle cx="260" cy="240" r="6" fill="white" opacity="0.5" />
      </svg>

      {/* Red accent line — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{ width: '3px', background: 'var(--color-brand)' }}
      />

      {/* Text overlay — aligned to site container */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className="mx-auto max-w-7xl flex flex-col justify-end px-5 sm:px-8 lg:px-12"
          style={{ paddingBottom: '48px' }}
        >
          {/* Eyebrow */}
          <p
            className="text-white m-0 mb-4"
            style={{ fontSize: '11px', letterSpacing: '0.26em', textTransform: 'uppercase', opacity: 0.55 }}
          >
            Ideation · Integration · Initiation · Implementation
          </p>

          {/* Headline */}
          <h1
            className="m-0 text-white"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', fontWeight: 300, lineHeight: 1.15 }}
          >
            Building a |{' '}
            <strong style={{ fontWeight: 800 }}>Brighter Future</strong>
          </h1>

          {/* Rule + subtext */}
          <div className="flex items-center gap-8 mt-7">
            <div style={{ flexShrink: 0, width: '52px', height: '1px', background: 'var(--color-brand)' }} />
            <p
              className="m-0 text-white"
              style={{ fontSize: '14px', opacity: 0.65, fontWeight: 300, maxWidth: '540px', lineHeight: 1.8 }}
            >
              We owe our success to our ironworkers who risk their lives to make our dreams a reality.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 mt-10">
            {[['Est. 2004', 'Founded'], ['Global', 'Standards'], ['5', 'Specializations']].map(([val, label]) => (
              <div key={label} className="flex items-baseline gap-3">
                <span className="text-white font-bold" style={{ fontSize: '1.45rem' }}>{val}</span>
                <span
                  className="text-white"
                  style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
