import type { Complaint } from '../../types';
import { COMPLAINT_TYPE_LABELS } from '../../types';
import { StatusBadge } from '../ui/StatusBadge';

interface ComplaintCardProps {
  complaint: Complaint;
  onClick?: (complaint: Complaint) => void;
}

export function ComplaintCard({ complaint, onClick }: ComplaintCardProps) {
  const date = new Date(complaint.createdAt).toLocaleDateString('pt-BR');
  const typeLabel = COMPLAINT_TYPE_LABELS[complaint.type];

  return (
    <article
      className="bg-white rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
      onClick={() => onClick?.(complaint)}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(complaint); }}
      role="button"
      tabIndex={0}
    >
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">{complaint.protocol}</h3>
        <p className="text-gray-500 text-xs mt-1">{typeLabel} · {date}</p>
      </div>
      <StatusBadge status={complaint.status} />
    </article>
  );
}
