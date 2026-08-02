const variants = {
  primary:
    'bg-route-500 text-white hover:bg-route-600 shadow-[0_0_0_1px_rgba(76,126,255,0.4)]',
  secondary:
    'bg-base-800 text-ink-100 border border-base-600 hover:border-route-500/60 hover:bg-base-700',
  ghost: 'text-ink-300 hover:text-ink-100',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {children}
    </Tag>
  )
}
