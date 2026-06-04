export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ flex: '3', minHeight: 0, background: 'var(--color-surface-dark)' }}
    >
      {/* ── Geometric background texture ── */}

      {/* Large angled warm/dark panel — creates photo-like depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #0e0b08 0%, #1c1208 40%, #2a1a0a 60%, #0a0a0a 100%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Large wireframe hexagon — right side, ambient */}
      <svg
        className="absolute"
        style={{ right: '6%', top: '50%', transform: 'translateY(-50%)', opacity: 0.18 }}
        width="520" height="480" viewBox="0 0 520 480" fill="none"
      >
        <polygon points="260,24 472,132 472,348 260,456 48,348 48,132"
          stroke="white" strokeWidth="1" />
        <polygon points="260,70 426,160 426,320 260,410 94,320 94,160"
          stroke="white" strokeWidth="0.5" />
        <polygon points="260,116 380,188 380,292 260,364 140,292 140,188"
          stroke="white" strokeWidth="0.5" />
        {/* Spokes */}
        {[[260,24,260,456],[48,132,472,348],[472,132,48,348]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.4" />
        ))}
        {/* Vertex dots */}
        {[[260,24],[472,132],[472,348],[260,456],[48,348],[48,132]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="5" fill="white" opacity="0.6" />
        ))}
        <circle cx="260" cy="240" r="32" stroke="white" strokeWidth="0.8" />
        <circle cx="260" cy="240" r="6" fill="white" opacity="0.5" />
      </svg>

      {/* Thin red accent line — left edge vertical */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{ width: '3px', background: 'var(--color-brand)' }}
      />

      {/* ── AB-style text overlay — bottom-left ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
        style={{ padding: '0 52px 40px' }}
      >
        {/* 4 I's eyebrow — company mantra */}
        <p
          className="text-white m-0 mb-3"
          style={{ fontSize: '10px', letterSpacing: '0.26em', textTransform: 'uppercase', opacity: 0.5 }}
        >
          Ideation · Integration · Initiation · Implementation
        </p>

        {/* Main headline — AB style: light + bold in one line */}
        <h1 className="m-0 text-white leading-tight" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 3rem)', fontWeight: 300 }}>
          Building a |{' '}
          <strong style={{ fontWeight: 800 }}>Brighter Future</strong>
        </h1>

        {/* Thin rule + subtext row */}
        <div className="flex items-center gap-6 mt-5">
          <div style={{ width: '48px', height: '1px', background: 'var(--color-brand)' }} />
          <p className="m-0 text-white" style={{ fontSize: '13px', opacity: 0.6, fontWeight: 300, maxWidth: '520px', lineHeight: 1.7 }}>
            We owe our success to our ironworkers who risk their lives to make our dreams a reality.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-10 mt-7">
          {[['Est. 2004', 'Founded'], ['Global', 'Standards'], ['5', 'Specializations']].map(([val, label]) => (
            <div key={label} className="flex items-baseline gap-2">
              <span className="text-white font-bold" style={{ fontSize: '1.3rem' }}>{val}</span>
              <span className="text-white" style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.45 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
