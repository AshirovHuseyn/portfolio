// Schematic diagram of the CCNA Enterprise Network Project topology,
// illustrating VLAN segmentation + router-on-a-stick as described in the CV.
// This is a diagram, not a screenshot — no project screenshot exists to show.
export default function TopologyDiagram() {
  return (
    <svg viewBox="0 0 480 260" className="w-full h-full" aria-labelledby="topo-title">
      <title id="topo-title">Simplified diagram of VLAN segmentation with router-on-a-stick</title>

      <rect x="0" y="0" width="480" height="260" rx="16" fill="#0C1017" />

      {/* router */}
      <rect x="210" y="24" width="60" height="34" rx="6" fill="#12171F" stroke="#4C7EFF" strokeWidth="1.5" />
      <text x="240" y="45" textAnchor="middle" fontSize="10" fill="#C7CED8" fontFamily="IBM Plex Mono, monospace">R1</text>

      {/* trunk line down to switch */}
      <line x1="240" y1="58" x2="240" y2="96" stroke="#2A3340" strokeWidth="1.5" />
      <text x="252" y="80" fontSize="8" fill="#8791A1" fontFamily="IBM Plex Mono, monospace">trunk</text>

      {/* switch */}
      <rect x="195" y="96" width="90" height="30" rx="6" fill="#12171F" stroke="#4C7EFF" strokeWidth="1.5" />
      <text x="240" y="115" textAnchor="middle" fontSize="10" fill="#C7CED8" fontFamily="IBM Plex Mono, monospace">SW1</text>

      {/* VLAN branches */}
      {[
        { x: 70, label: 'VLAN 10', sub: 'Staff' },
        { x: 190, label: 'VLAN 20', sub: 'Servers' },
        { x: 310, label: 'VLAN 30', sub: 'Guests' },
        { x: 410, label: 'VLAN 40', sub: 'Security' },
      ].map((v, i) => (
        <g key={i}>
          <line x1="240" y1="126" x2={v.x} y2="170" stroke="#2A3340" strokeWidth="1.3" />
          <rect x={v.x - 34} y="170" width="68" height="30" rx="6" fill="#12171F" stroke="#2A3340" strokeWidth="1.2" />
          <text x={v.x} y="187" textAnchor="middle" fontSize="9" fill="#7AA2FF" fontFamily="IBM Plex Mono, monospace">{v.label}</text>
          <text x={v.x} y="222" textAnchor="middle" fontSize="9" fill="#8791A1">{v.sub}</text>
          <circle cx={v.x} cy="185" r="2" fill="#4C7EFF" className="animate-pulseDot" style={{ animationDelay: `${i * 0.3}s` }} />
        </g>
      ))}
    </svg>
  )
}
