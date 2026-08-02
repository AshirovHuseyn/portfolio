// All content on this site is transcribed directly from Huseyn's CV.
// Nothing in this file should be invented — if a fact isn't here, it isn't on the CV.
import photo from "../assets/profil_image.jpeg";
export const profile = {
  name: 'Huseyn Ashirov',
  roles: ['Junior Network Engineer', 'Junior System Administrator', 'Technical Support'],
  location: 'Baku, Azerbaijan',
  phone: '+994 (55) 344-0456',
  email: 'huseynasirov305@gmail.com',
  linkedin: 'https://www.linkedin.com/in/huseyn-asirov',
  photo: photo,
  resumeUrl: '/Huseyn_Ashirov_CV.pdf',
  summary:
    "Junior Network Engineer / System Administrator with hands-on experience supporting enterprise network and server infrastructure, including Cisco switching and access points, and Windows Server (AD, GPO, DNS, DHCP). Solid foundation in TCP/IP, routing and switching (OSPF, EIGRP, BGP, VLAN, STP), NAT/DHCP/DNS, and Linux (Red Hat) system administration, reinforced by CCNA-level lab work and industry certifications. Security-first troubleshooter with exposure to SIEM monitoring and log analysis (Splunk, Wazuh XDR), firewall policy administration, and security hardening on both Linux and Windows platforms.",
  objective:
    'Currently completing a B.Sc. in Computer Engineering, combining academic grounding with practical lab and on-the-job experience, and actively expanding skills toward CCNA and RHCSA certification.',
}

export const strengths = [
  {
    title: 'Enterprise networking',
    detail: 'Cisco switching, VLAN segmentation, routing protocols, and structured troubleshooting.',
  },
  {
    title: 'Windows Server administration',
    detail: 'AD DS, GPO, DNS, DHCP, and WDS for centralized identity and policy management.',
  },
  {
    title: 'Linux administration',
    detail: 'Red Hat Enterprise Linux system administration, scripting, and log management.',
  },
  {
    title: 'Security-first mindset',
    detail: 'Firewall policy, SIEM log analysis, and system hardening across platforms.',
  },
]

export const interests = [
  'Network security',
  'System administration',
  'SIEM & log analysis',
  'Red team fundamentals',
]

export const skillCategories = [
  {
    title: 'Operating Systems',
    items: ['Windows Server 2016/2019/2022', 'Windows 7 / 8 / 10 / 11', 'Red Hat Enterprise Linux (RHEL)'],
  },
  {
    title: 'Networking',
    items: [
      'TCP/IP',
      'Routing & Switching',
      'VLAN & Trunking',
      'Router-on-a-Stick',
      'STP',
      'OSPF',
      'EIGRP',
      'BGP',
      'RIP',
      'NAT',
      'DHCP',
      'DNS',
      'Wireless / SOHO Networks',
      'Network Troubleshooting',
    ],
  },
  {
    title: 'System Administration',
    items: [
      'Active Directory Domain Services (AD DS)',
      'Group Policy Objects (GPO)',
      'WDS',
      'WSUS',
      'IIS',
      'AD CS',
      'SMB/NTFS & Share Permissions',
      'PowerShell Scripting',
      'LVM & Partitioning',
      'Autofs / Automount',
      'Rsyslog',
      'Logrotate',
      'Bash Scripting',
      'Cron Scheduling',
    ],
  },
  {
    title: 'Security',
    items: [
      'Firewall Policy Administration',
      'Cisco Switch Security',
      'Splunk',
      'Wazuh XDR',
      'Log Analysis',
      'Security Hardening',
      'VPN Concepts',
      'Red Team Fundamentals',
    ],
  },
  {
    title: 'Virtualization & Containers',
    items: ['Docker (containers, images, Swarm)', 'Podman', 'Apache', 'Nginx'],
  },
  {
    title: 'Programming / Scripting',
    items: ['Bash', 'PowerShell'],
  },
]

export const experience = [
  {
    role: 'Information Technology Specialist',
    company: 'Rockvell Tech',
    location: 'Baku, Azerbaijan',
    achievements: [
      'Administered and troubleshot Cisco switches, maintaining secure and reliable network operations across the organization with minimal unplanned downtime.',
      'Configured and maintained Windows Server infrastructure — including AD DS, GPO, DNS, DHCP, and WDS — to support centralized identity management, policy enforcement, and OS deployment.',
      'Performed proactive system administration and security hardening on Linux and Windows systems, improving overall performance, stability, and security posture.',
      'Diagnosed and resolved hardware and software issues using structured troubleshooting methodology, reducing downtime and maintaining system integrity for end users.',
    ],
  },
]

export const projects = [
  {
    title: 'CCNA Enterprise Network Project',
    description:
      'A simulated enterprise network designed, configured, and secured in Cisco Packet Tracer, built to demonstrate practical readiness for real-world enterprise network support.',
    stack: ['Cisco Packet Tracer', 'VLAN', 'OSPF', 'EIGRP', 'Router-on-a-Stick', 'Port Security'],
    features: [
      'VLAN segmentation across departments',
      'Inter-VLAN routing via Router-on-a-Stick',
      'Switch port security configuration',
    ],
    challenges:
      'Implemented and validated OSPF/EIGRP routing scenarios alongside end-to-end troubleshooting workflows to confirm the topology behaved correctly under both protocols.',
    link: 'https://tinyurl.com/yr3xmn7e',
    linkLabel: 'View project',
  },
]

export const certifications = [
  { name: 'Certified Network Security Practitioner (CNSP)' },
  { name: 'Red Hat System Administration I (RH124)', detail: 'Ver. 9.3', issuer: 'Red Hat' },
  { name: 'Certified Red Team Analyst (CRTA)' },
  { name: 'Certified Social Engineering Defense Practitioner (CSEDP)' },
]

export const education = [
  {
    degree: 'B.Sc. Computer Engineering',
    institution: 'Azerbaijan Technical University',
    status: 'In progress',
  },
  {
    degree: 'Network and System Administration',
    institution: 'Code Academy, Baku',
    status: 'Completed',
  },
]

export const currentlyLearning = [
  { name: 'CCNA', note: 'Advancing from CCNA-level lab work toward certification.' },
  { name: 'RHCSA', note: 'Building on existing Red Hat Enterprise Linux administration experience.' },
]

export const languages = [
  { name: 'Azerbaijani', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency — technical documentation' },
]

export const targetRoles = [
  'Junior Network Engineer',
  'Junior System Administrator',
  'IT Support',
  'SOC Analyst (Junior)',
  'Infrastructure Support',
]
