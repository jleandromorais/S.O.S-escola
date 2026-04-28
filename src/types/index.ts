// ─── Enums ──────────────────────────────────────────────────────────────────

export type ComplaintType =
  | 'moral_harassment'
  | 'verbal_abuse'
  | 'physical_violence'
  | 'discrimination'
  | 'other';

export type ComplaintStatus = 'pending' | 'in_progress' | 'resolved';

export type ReferralStatus = 'pending' | 'in_progress' | 'completed';

// ─── Label Maps ─────────────────────────────────────────────────────────────

export const COMPLAINT_TYPE_LABELS: Record<ComplaintType, string> = {
  moral_harassment: 'Assédio Moral',
  verbal_abuse: 'Xingamento',
  physical_violence: 'Violência',
  discrimination: 'Discriminação',
  other: 'Outro',
};

export const COMPLAINT_STATUS_LABELS: Record<ComplaintStatus, string> = {
  pending: 'Pendente',
  in_progress: 'Em Análise',
  resolved: 'Resolvida',
};

// ─── Entities ────────────────────────────────────────────────────────────────

export interface ReporterInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Complaint {
  id: string;
  protocol: string;
  type: ComplaintType;
  description: string;
  status: ComplaintStatus;
  isAnonymous: boolean;
  createdAt: string;
  reporter?: ReporterInfo;
  evidenceFileName?: string;
}

export interface Referral {
  id: string;
  protocol: string;
  type: string;
  date: string;
  referredTo: string;
  specialistName: string;
  status: ReferralStatus;
}

export interface Psychologist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  registrationCode: string;
  isOnline: boolean;
  gender: 'male' | 'female';
}

export interface DashboardStats {
  total: number;
  pending: number;
  inProgress: number;
  resolved: number;
  resolutionRate: number;
  avgResolutionDays: number;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}

// ─── Form ────────────────────────────────────────────────────────────────────

export interface ComplaintFormData {
  type: ComplaintType | '';
  description: string;
  isAnonymous: boolean;
  reporter: ReporterInfo;
  includeEvidence: boolean;
  evidenceFile: File | null;
  acceptedTerms: boolean;
}

export const INITIAL_COMPLAINT_FORM: ComplaintFormData = {
  type: '',
  description: '',
  isAnonymous: true,
  reporter: { name: '', email: '', phone: '' },
  includeEvidence: false,
  evidenceFile: null,
  acceptedTerms: false,
};

// ─── API ─────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message: string;
}
