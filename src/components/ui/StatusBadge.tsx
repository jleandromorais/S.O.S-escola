import type { ComplaintStatus } from '../../types';

interface StatusBadgeProps {
  status: ComplaintStatus;
}

const STATUS_STYLES: Record<ComplaintStatus, { label: string; className: string }> = {
  pending:     { label: 'Pendente',    className: 'bg-red-100 text-red-700' },
  in_progress: { label: 'Em Análise', className: 'bg-amber-100 text-amber-700' },
  resolved:    { label: 'Resolvida',   className: 'bg-emerald-100 text-emerald-700' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = STATUS_STYLES[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
