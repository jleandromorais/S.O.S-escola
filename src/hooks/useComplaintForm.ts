import { useState, FormEvent } from 'react';
import { ComplaintFormData, ComplaintType, INITIAL_COMPLAINT_FORM } from '../types';
import { complaintService } from '../services/complaintService';

interface UseComplaintFormReturn {
  formData: ComplaintFormData;
  isSubmitting: boolean;
  error: string | null;
  generatedProtocol: string | null;
  updateField: <K extends keyof ComplaintFormData>(field: K, value: ComplaintFormData[K]) => void;
  updateReporterField: (field: keyof ReporterInfo, value: string) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
}

interface ReporterInfo {
  name: string;
  email: string;
  phone: string;
}

export function useComplaintForm(): UseComplaintFormReturn {
  const [formData, setFormData] = useState<ComplaintFormData>(INITIAL_COMPLAINT_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedProtocol, setGeneratedProtocol] = useState<string | null>(null);

  const updateField = <K extends keyof ComplaintFormData>(field: K, value: ComplaintFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateReporterField = (field: keyof ReporterInfo, value: string) => {
    setFormData((prev) => ({ ...prev, reporter: { ...prev.reporter, [field]: value } }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.type) {
      setError('Selecione o tipo da denúncia.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await complaintService.create(formData);
      setGeneratedProtocol(response.data.protocol);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar denúncia.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_COMPLAINT_FORM);
    setGeneratedProtocol(null);
    setError(null);
  };

  return { formData, isSubmitting, error, generatedProtocol, updateField, updateReporterField, handleSubmit, resetForm };
}
