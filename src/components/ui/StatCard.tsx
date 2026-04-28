interface StatCardProps {
  label: string;
  value: string | number;
  icon: string;
  variant?: 'blue' | 'amber' | 'emerald' | 'red';
}

const VARIANT_STYLES: Record<string, { bg: string; iconBg: string; text: string }> = {
  blue:    { bg: 'bg-blue-50',    iconBg: 'bg-blue-100 text-blue-600',    text: 'text-blue-900' },
  amber:   { bg: 'bg-amber-50',   iconBg: 'bg-amber-100 text-amber-600',  text: 'text-amber-900' },
  emerald: { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100 text-emerald-600', text: 'text-emerald-900' },
  red:     { bg: 'bg-red-50',     iconBg: 'bg-red-100 text-red-600',      text: 'text-red-900' },
};

export function StatCard({ label, value, icon, variant = 'blue' }: StatCardProps) {
  const s = VARIANT_STYLES[variant];
  return (
    <div className={`${s.bg} rounded-xl p-5 transition-transform hover:-translate-y-0.5`}>
      <div className={`w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center text-lg mb-3`}>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${s.text}`}>{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}
