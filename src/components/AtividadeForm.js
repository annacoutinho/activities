import { useEffect, useState } from 'react'
const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: 0,
  descricao: ''
}

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual())
  useEffect(() => {
    if (props.ativSelecionada.id !== 0) setAtividade(props.ativSelecionada)
  }, [props.ativSelecionada])
  const InputTextHandLer = e => {
    const { name, value } = e.target

    setAtividade({ ...atividade, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (props.ativSelecionada.id !== 0) props.atualizarAtividade(atividade)
    else props.addAtividade(atividade)

    setAtividade(atividadeInicial)
  }
  const handleCancelar = e => {
    e.preventDefault()

    props.cancelarAtividade()

    setAtividade(atividadeInicial)

    setAtividade(atividadeInicial)
  }
  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) {
      return props.ativSelecionada
    } else {
      return atividadeInicial
    }
  }

  return (
    <>
      <h1>Atividade {atividade.id == !0 ? atividade.id : ''}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            name="titulo"
            value={atividade.titulo}
            onChange={InputTextHandLer}
            id="titulo"
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            name="prioridade"
            value={atividade.prioridade}
            onChange={InputTextHandLer}
            id="prioridade"
            className="form-select"
          >
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            name="titulo"
            value={atividade.titulo}
            onChange={InputTextHandLer}
            id="descricao"
            type="text"
            className="form-control"
          />
        </div>
        <hr />
        <div className="col-12">
          {atividade.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fas fa-plus me-2"></i>
              Atividade
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={handleCancelar}
              >
                <i className="fas fa-plus me-2"></i>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  )
}
