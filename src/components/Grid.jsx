const CARDS = [
  {
    id: 1,
    tag: 'Spaceframes',
    title: 'Our space frames offer unmatched flexibility, lightweight durability, and superior rigidity',
    bg: 'linear-gradient(160deg, #1e0d06 0%, #2e1508 60%, #1a0d05 100%)',
    pattern: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <polygon points="200,20 360,260 40,260" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <polygon points="200,60 320,240 80,240" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <polygon points="200,100 280,220 120,220" fill="rgba(200,16,46,0.08)" stroke="rgba(200,16,46,0.15)" strokeWidth="1" />
        <line x1="200" y1="20" x2="200" y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="200" cy="150" r="20" stroke="rgba(200,16,46,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'Architectural Structures',
    title: 'Architecture at the heart of every project — blending creativity with precision',
    bg: 'linear-gradient(160deg, #05101e 0%, #081826 60%, #040c18 100%)',
    pattern: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <polygon points="200,30 280,75 280,165 200,210 120,165 120,75" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
        <polygon points="200,65 255,95 255,155 200,185 145,155 145,95" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <polygon points="200,100 235,118 235,154 200,172 165,154 165,118" fill="rgba(29,78,216,0.1)" stroke="rgba(29,78,216,0.2)" strokeWidth="1" />
        {[[-100,-60],[100,-60],[180,40],[-180,40]].map(([dx,dy],i)=>(
          <polygon key={i}
            points={`${200+dx},${120+dy-30} ${200+dx+26},${120+dy-15} ${200+dx+26},${120+dy+15} ${200+dx},${120+dy+30} ${200+dx-26},${120+dy+15} ${200+dx-26},${120+dy-15}`}
            stroke="rgba(255,255,255,0.04)" strokeWidth="0.75"
          />
        ))}
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'Pre-Engineered Steel Buildings',
    title: 'Steel buildings engineered for precision assembly, speed, and structural performance',
    bg: 'linear-gradient(160deg, #0d0814 0%, #150d1e 60%, #0a0610 100%)',
    pattern: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        {[0,1,2,3,4,5].map(i=>(
          <line key={`v${i}`} x1={60+i*56} y1="40" x2={60+i*56} y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
        ))}
        {[0,1,2,3].map(i=>(
          <line key={`h${i}`} x1="40" y1={75+i*50} x2="360" y2={75+i*50} stroke="rgba(255,255,255,0.05)" strokeWidth="0.75"/>
        ))}
        <rect x="172" y="100" width="56" height="50" fill="rgba(124,58,237,0.12)" stroke="rgba(124,58,237,0.25)" strokeWidth="1"/>
        <circle cx="200" cy="125" r="5" fill="rgba(124,58,237,0.4)" />
        {[[116,75],[228,75],[116,175],[228,175]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(255,255,255,0.12)" />
        ))}
      </svg>
    ),
  },
]

export default function Grid() {
  return (
    <section
      className="flex border-t border-gray-200 bg-gray-50"
      style={{ flex: '2', minHeight: 0 }}
    >
      {/* Left label column */}
      <div
        className="shrink-0 flex flex-col justify-center border-r border-gray-200 bg-white"
        style={{ width: '220px', padding: '32px 28px' }}
      >
        <p
          className="m-0 font-bold text-brand leading-tight"
          style={{ fontSize: '1.45rem' }}
        >
          What<br />We Build
        </p>
        <div style={{ width: '36px', height: '2px', background: 'var(--color-brand)', margin: '14px 0' }} />
        <p
          className="m-0 text-gray-400"
          style={{ fontSize: '12px', lineHeight: 1.8 }}
        >
          Delivering projects to global standards since 2004 through teamwork and dedicated efforts.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-1 divide-x divide-gray-200">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="relative flex-1 overflow-hidden cursor-pointer group"
            style={{ background: card.bg }}
          >
            {card.pattern}

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            />

            {/* Text overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 flex flex-col justify-end"
              style={{
                padding: '28px 28px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)',
              }}
            >
              <p
                className="m-0 text-white mb-3"
                style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55 }}
              >
                {card.tag}
              </p>
              <p
                className="m-0 text-white font-medium leading-snug mb-5"
                style={{ fontSize: '15px' }}
              >
                {card.title}
              </p>
              <button
                className="flex items-center gap-2 text-white bg-transparent border-none p-0 cursor-pointer group-hover:gap-3 transition-all duration-200"
                style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75 }}
              >
                Click to Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="0" />
                  <path d="M9 12h6M13 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
