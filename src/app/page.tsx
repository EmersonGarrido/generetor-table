"use client";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [colunas, setColunas] = useState([{ label: "", value: "" }]);
  const [html, setHtml] = useState("");

  function handleTituloChange(event: any) {
    setTitulo(event.target.value);
  }

  function handleLabelChange(event: any, index: any) {
    const newColunas = [...colunas];
    newColunas[index].label = event.target.value;
    setColunas(newColunas);
  }

  function handleValueChange(event: any, index: any) {
    const newColunas = [...colunas];
    newColunas[index].value = event.target.value;
    setColunas(newColunas);
  }

  function gerarTabela() {
    var colunaLabels = [];
    var colunaValues = [];

    for (var i = 0; i < colunas.length; i++) {
      colunaLabels.push(colunas[i].label);
      colunaValues.push(colunas[i].value);
    }

    var tabelaHTML = "<div>\n";
    tabelaHTML +=
      '<div class="titulo-categoria" style="text-align: center;"><strong>' +
      titulo +
      "</strong></div>\n";
    tabelaHTML += '    <table style="width: 100%; font-size: 14pt">\n';
    tabelaHTML += "      <tbody>\n";

    const cores = ["#e5e5e5", "#ffffff", "#e5e5e5", "#ffffff"];

    for (var i = 0; i < colunas.length; i++) {
      var cor = cores[i % cores.length];
      tabelaHTML +=
        '        <tr style="background-color: ' +
        cor +
        '; color: #6d6d6d; height: 40px;">\n';
      tabelaHTML +=
        '          <td style="width: 50%;">' + colunaLabels[i] + "</td>\n";
      tabelaHTML +=
        '          <td style="width: 50%;">' + colunaValues[i] + "</td>\n";
      tabelaHTML += "        </tr>\n";
    }

    tabelaHTML += "      </tbody>\n";
    tabelaHTML += "    </table>\n";
    tabelaHTML += "</div>";

    setHtml(tabelaHTML);
  }

  function addColuna() {
    setColunas([...colunas, { label: "", value: "" }]);
  }

  function removerColuna(index: number) {
    const newColunas = [...colunas];
    newColunas.splice(index, 1);
    setColunas(newColunas);
  }

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handlePasteHtml(event: any) {
    setHtml(event.target.value);
    handleCloseModal();
  }

  return (
    <main className="w-full flex flex-col items-center justify-center bg-[#f6f6f8] min-h-screen">
      {/* {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Editar HTML</h2>
            <textarea onChange={handlePasteHtml} />
          </div>
        </div>
      )}

      <button onClick={handleShowModal}>Editar HTML</button> */}

      <div className="border-[0.1rem] border-[#dadee1] rounded-md bg-white w-full max-w-2xl">
        <div className="text-center p-4">
          <h1 className="text-[#574967]">Construtor de tabela</h1>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <label className="text-[#574967]" htmlFor="titulo">
            Título:
          </label>
          <input
            className="border-[0.1rem] border-[#dadee1] rounded-md p-2"
            type="text"
            id="titulo"
            value={titulo}
            onChange={handleTituloChange}
          />
        </div>

        <div className="colunas p-4 flex flex-col gap-3">
          {colunas.map((coluna, index) => (
            <div
              className="coluna flex items-center justify-between gap-2"
              key={index}
            >
              <label className="text-[#574967]">Coluna</label>
              <input
                type="text"
                className="border-[0.1rem] border-[#dadee1] rounded-md p-2 label w-full"
                placeholder="Titulo"
                value={coluna.label}
                onChange={(event) => handleLabelChange(event, index)}
              />
              <input
                type="text"
                className="border-[0.1rem] border-[#dadee1] rounded-md p-2 value w-full"
                placeholder="Valor"
                value={coluna.value}
                onChange={(event) => handleValueChange(event, index)}
              />

              <button
                className="bg-red-600 hover:bg-red-900 text-white rounded-md px-4 py-2"
                onClick={() => removerColuna(index)}
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-4">
          <button
            className="bg-black/75 hover:bg-black text-white rounded-md px-4 py-2"
            onClick={addColuna}
          >
            Adicionar coluna
          </button>

          <button
            className="bg-orange-600 hover:bg-orange-900 text-white rounded-md px-4 py-2"
            onClick={gerarTabela}
          >
            Gerar tabela
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-[#574967]">Código HTML Gerado:</h2>
          <textarea
            rows={15}
            className="border-[0.1rem] border-[#dadee1] rounded-md p-2 w-full"
            value={html}
          ></textarea>
        </div>
      </div>
      <span className="mt-5 font-thin text-sm text-center">
        Todos os direitos reservados a{" "}
        <a className="font-normal" href="https://emersongarrido.com.br">
          Emerson Garrido
        </a>
      </span>
    </main>
  );
}
