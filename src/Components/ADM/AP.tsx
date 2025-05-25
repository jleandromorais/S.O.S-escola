import { FormEvent, useState } from 'react';
import styles from '../../styles/Ap.module.css';
import { useForms } from '../../hooks/useForms';
import { useNavigate } from 'react-router-dom';

export function AP() {
  const { formData, handleInputChange } = useForms();
  const navigate = useNavigate();

  const [desejaEnviarFoto, setDesejaEnviarFoto] = useState(false);
  const [foto, setFoto] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const numero = Math.floor(Math.random() * 90000 + 10000);
    const protocolo = `SOS-2025-${numero}`;

    const novaDenuncia = {
      protocolo,
      tipoDeReclamacao: formData.tipoDeReclamacao,
      descricao: formData.descricao,
      status: 'Em Análise',
      ehanonimo: formData.ehanonimo,
      nome: formData.nome,
      email: formData.email,
      celular: formData.celular,
      foto: foto ? foto.name : null, // Apenas o nome do arquivo por enquanto
    };

    const denunciasExistentes = JSON.parse(localStorage.getItem('denuncias') || '[]');
    denunciasExistentes.push(novaDenuncia);
    localStorage.setItem('denuncias', JSON.stringify(denunciasExistentes));

    localStorage.setItem('protocologerado', protocolo);
    navigate('/protocolo');
  };

  return (
    <div className={styles.complaintContainer}>
      <div className={styles['main-area']}>
        <h1 className={styles['form-title']}>Nova Denúncia</h1>
        <p className={styles['form-instructions']}>
          Preencha os campos abaixo para registrar sua denúncia. Todos os dados são tratados com confidencialidade.
        </p>

        <form onSubmit={handleSubmit} className={styles['complaint-form']}>

          <div className={styles['form-group']}>
            <label htmlFor="tipoDeReclamacao">Tipo de Denúncia</label>
            <select
              id="tipoDeReclamacao"
              name="tipoDeReclamacao"
              value={formData.tipoDeReclamacao}
              onChange={handleInputChange}
              required
              className={styles.select}
            >
              <option value="" disabled>Selecione o tipo de denúncia</option>
              <option value="assedio moral">Assédio moral</option>
              <option value="xingamento">Xingamento</option>
              <option value="violencia">Violência</option>
              <option value="discriminacao">Discriminação</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className={styles['toggle-container']}>
            <span className={styles['toggle-label']}>Identificação:</span>
            <label className={styles['toggle-switch']}>
              <input
                type="checkbox"
                name="ehanonimo"
                checked={formData.ehanonimo}
                onChange={handleInputChange}
              />
              <span className={styles['toggle-slider']}></span>
            </label>
            <span className={styles['toggle-text']}>
              {formData.ehanonimo ? 'Anônimo' : 'Identificado'}
            </span>
          </div>

          {!formData.ehanonimo && (
            <div id="identification-fields">
              <div className={styles['form-group']}>
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className={styles.input}
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite seu e-mail"
                  className={styles.input}
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="celular">Telefone</label>
                <input
                  type="text"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleInputChange}
                  placeholder="Digite seu telefone"
                  className={styles.input}
                />
              </div>
            </div>
          )}

          <div className={styles['form-group']}>
            <label htmlFor="descricao">Descrição da Denúncia</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              placeholder="Descreva detalhadamente o ocorrido, incluindo data, local e pessoas envolvidas"
              required
              className={styles.textarea}
            ></textarea>
          </div>

          {/* Pergunta se deseja enviar foto */}
          <div className={styles['form-group']}>
            <label>Deseja enviar uma foto como evidência?</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="desejaEnviarFoto"
                  value="sim"
                  checked={desejaEnviarFoto === true}
                  onChange={() => setDesejaEnviarFoto(true)}
                />
                Sim
              </label>
              <label style={{ marginLeft: '20px' }}>
                <input
                  type="radio"
                  name="desejaEnviarFoto"
                  value="nao"
                  checked={desejaEnviarFoto === false}
                  onChange={() => setDesejaEnviarFoto(false)}
                />
                Não
              </label>
            </div>
          </div>

          {desejaEnviarFoto && (
            <div className={styles['form-group']}>
              <label htmlFor="foto">Selecione a foto</label>
              <input
                type="file"
                id="foto"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.input}
              />
              {foto && <p>Foto selecionada: {foto.name}</p>}
            </div>
          )}

          <div className={styles['checkbox-container']}>
            <input
              type="checkbox"
              id="aceitoDeTermos"
              name="aceitoDeTermos"
              checked={formData.aceitoDeTermos}
              onChange={handleInputChange}
              required
              className={styles.checkbox}
            />
            <label htmlFor="aceitoDeTermos">
              Declaro que as informações fornecidas são verdadeiras
            </label>
          </div>

          <button type="submit" className={styles['submit-button']}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
