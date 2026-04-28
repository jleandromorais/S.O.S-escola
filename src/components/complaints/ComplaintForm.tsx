import { useComplaintForm } from '../../hooks/useComplaintForm';
import { ToggleSwitch } from '../ui/ToggleSwitch';
import type { ComplaintType } from '../../types';

const TYPE_OPTIONS: { value: ComplaintType; label: string }[] = [
  { value: 'moral_harassment',  label: 'Assédio moral' },
  { value: 'verbal_abuse',      label: 'Xingamento' },
  { value: 'physical_violence', label: 'Violência' },
  { value: 'discrimination',    label: 'Discriminação' },
  { value: 'other',             label: 'Outro' },
];

interface ComplaintFormProps {
  onProtocolGenerated: (protocol: string) => void;
}

export function ComplaintForm({ onProtocolGenerated }: ComplaintFormProps) {
  const { formData, isSubmitting, error, generatedProtocol, updateField, updateReporterField, handleSubmit } = useComplaintForm();

  if (generatedProtocol) {
    onProtocolGenerated(generatedProtocol);
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>
      )}

      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de Denúncia</label>
        <select
          value={formData.type}
          onChange={(e) => updateField('type', e.target.value as ComplaintType)}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="" disabled>Selecione o tipo</option>
          {TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Anonymity */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm font-medium text-gray-700">
            {formData.isAnonymous ? 'Denúncia Anônima' : 'Denúncia Identificada'}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {formData.isAnonymous ? 'Sua identidade será protegida' : 'Você será identificado'}
          </p>
        </div>
        <ToggleSwitch
          checked={!formData.isAnonymous}
          onChange={(identified) => updateField('isAnonymous', !identified)}
        />
      </div>

      {/* Reporter fields */}
      {!formData.isAnonymous && (
        <div className="space-y-3 p-4 border border-blue-100 rounded-lg bg-blue-50/50">
          <input
            type="text" placeholder="Nome completo" required
            value={formData.reporter.name}
            onChange={(e) => updateReporterField('name', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email" placeholder="E-mail" required
            value={formData.reporter.email}
            onChange={(e) => updateReporterField('email', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="tel" placeholder="Telefone"
            value={formData.reporter.phone}
            onChange={(e) => updateReporterField('phone', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      )}

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Descrição</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Descreva detalhadamente o ocorrido..."
          required rows={5}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        />
      </div>

      {/* Evidence */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Deseja enviar foto como evidência?</p>
        <div className="flex gap-4">
          {[true, false].map((val) => (
            <label key={String(val)} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
              <input type="radio" name="evidence" checked={formData.includeEvidence === val} onChange={() => updateField('includeEvidence', val)} />
              {val ? 'Sim' : 'Não'}
            </label>
          ))}
        </div>
        {formData.includeEvidence && (
          <input
            type="file" accept="image/*"
            onChange={(e) => updateField('evidenceFile', e.target.files?.[0] ?? null)}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        )}
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required
          checked={formData.acceptedTerms}
          onChange={(e) => updateField('acceptedTerms', e.target.checked)}
          className="mt-0.5 w-4 h-4 text-blue-600 rounded border-gray-300"
        />
        <span className="text-sm text-gray-600">Declaro que as informações fornecidas são verdadeiras</span>
      </label>

      <button
        type="submit" disabled={isSubmitting}
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors text-sm"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Denúncia'}
      </button>
    </form>
  );
}
