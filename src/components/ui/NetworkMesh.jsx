// A restrained network-topology motif: nodes and links echoing routing/switching
// diagrams, rendered in the accent blue rather than a "hacker" neon-green style.
export default function NetworkMesh({ className = '' }) {
  const nodes = [
    { id: 'core', x: 300, y: 180, r: 7 },
    { id: 'a', x: 120, y: 70, r: 4.5 },
    { id: 'b', x: 480, y: 60, r: 4.5 },
    { id: 'c', x: 70, y: 260, r: 4.5 },
    { id: 'd', x: 520, y: 270, r: 4.5 },
    { id: 'e', x: 300, y: 330, r: 4.5 },
  ]

  const links = [
    ['core', 'a'],
    ['core', 'b'],
    ['core', 'c'],
    ['core', 'd'],
    ['core', 'e'],
  ]

  const find = (id) => nodes.find((n) => n.id === id)

  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {links.map(([from, to], i) => {
        const a = find(from)
        const b = find(to)
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#2A3340"
            strokeWidth="1"
          />
        )
      })}

      {links.map(([from, to], i) => {
        const a = find(from)
        const b = find(to)
        return (
          <circle
            key={`p-${i}`}
            r="2.6"
            fill="#7AA2FF"
            style={{
              offsetPath: `path('M${a.x} ${a.y} L${b.x} ${b.y}')`,
              animation: `travel 3.2s linear infinite`,
              animationDelay: `${i * 0.55}s`,
            }}
          />
        )
      })}

      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 6}
            fill="#4C7EFF"
            opacity="0.12"
            className="animate-pulseDot"
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#0C1017" stroke="#4C7EFF" strokeWidth="1.5" />
        </g>
      ))}

      <style>{`
        @keyframes travel {
          from { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { offset-distance: 100%; opacity: 0; }
        }
      `}</style>
    </svg>
  )
}
