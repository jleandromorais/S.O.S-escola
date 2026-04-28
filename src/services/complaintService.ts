import type { ApiResponse, Complaint, ComplaintFormData, DashboardStats } from '../types';

const BASE_URL = '/api/complaints';

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: 'Erro desconhecido' }));
    throw new Error((body as { message?: string }).message ?? `Erro ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const complaintService = {
  async create(data: ComplaintFormData): Promise<ApiResponse<Complaint>> {
    const payload = new FormData();
    payload.append('type', data.type);
    payload.append('description', data.description);
    payload.append('isAnonymous', String(data.isAnonymous));

    if (!data.isAnonymous) {
      payload.append('reporterName', data.reporter.name);
      payload.append('reporterEmail', data.reporter.email);
      payload.append('reporterPhone', data.reporter.phone);
    }

    if (data.evidenceFile) payload.append('evidence', data.evidenceFile);

    // Mock response until backend is ready
    return Promise.resolve({
      data: {
        id: crypto.randomUUID(),
        protocol: `SOS-2025-${Math.floor(10000 + Math.random() * 90000)}`,
        type: data.type as Complaint['type'],
        description: data.description,
        status: 'pending' as const,
        isAnonymous: data.isAnonymous,
        createdAt: new Date().toISOString(),
      },
      message: 'Denúncia criada com sucesso',
    });

    // Uncomment when backend is live:
    // const res = await fetch(BASE_URL, { method: 'POST', body: payload });
    // return handleResponse<ApiResponse<Complaint>>(res);
  },

  async findAll(): Promise<Complaint[]> {
    const res = await fetch(BASE_URL);
    return handleResponse<Complaint[]>(res);
  },

  async findByProtocol(protocol: string): Promise<Complaint> {
    const res = await fetch(`${BASE_URL}/protocol/${protocol}`);
    return handleResponse<Complaint>(res);
  },

  async findByStudent(): Promise<Complaint[]> {
    const res = await fetch(`${BASE_URL}/my`);
    return handleResponse<Complaint[]>(res);
  },

  async getStats(): Promise<DashboardStats> {
    const res = await fetch(`${BASE_URL}/stats`);
    return handleResponse<DashboardStats>(res);
  },
};
