"use client";

export default function Home() {
  const doc: any = document;

  function gerarTabela() {
    var titulo = doc.getElementById("titulo").value;
    var colunas: any = document.getElementsByClassName("coluna");
    var colunaLabels = [];
    var colunaValues = [];

    for (var i = 0; i < colunas.length; i++) {
      colunaLabels.push(colunas[i].getElementsByClassName("label")[0].value);
      colunaValues.push(colunas[i].getElementsByClassName("value")[0].value);
    }

    var tabelaHTML = "<div>\n";
    tabelaHTML +=
      '<div class="titulo-categoria"><strong>' + titulo + "</strong></div>\n";
    tabelaHTML += '    <table style="width: 100%; font-size: 14pt">\n';
    tabelaHTML += "      <tbody>\n";

    for (var i = 0; i < colunas.length; i++) {
      var cor = i === 0 ? "#e5e5e5" : "#fff";
      tabelaHTML +=
        '        <tr style="background-color: ' +
        cor +
        '; color: #6d6d6d; height: 40px;">\n';
      tabelaHTML += "          <td>" + colunaLabels[i] + "</td>\n";
      tabelaHTML += "          <td>" + colunaValues[i] + "</td>\n";
      tabelaHTML += "        </tr>\n";
    }

    tabelaHTML += "      </tbody>\n";
    tabelaHTML += "    </table>\n";
    tabelaHTML += "</div>";

    doc.getElementById("codigoHTML").value = tabelaHTML;
  }

  function adicionarColuna() {
    var novaColuna = document.createElement("div");
    novaColuna.className =
      "coluna flex flex-col gap-1 border-b-[0.1rem] pb-5 pt-5 border-black/5";

    var novoLabel = document.createElement("label");
    novoLabel.innerHTML = "Titulo da Coluna";
    var novoInputLabel = document.createElement("input");
    novoInputLabel.type = "text";
    novoInputLabel.className =
      "border-[0.1rem] border-[#dadee1] rounded-md p-2 label";
    var novoValor = document.createElement("label");
    novoValor.innerHTML = "Valor";
    var novoInputValor = document.createElement("input");
    novoInputValor.type = "text";
    novoInputValor.className =
      "border-[0.1rem] border-[#dadee1] rounded-md p-2 value";

    novaColuna.appendChild(novoLabel);
    novaColuna.appendChild(novoInputLabel);
    novaColuna.appendChild(novoValor);
    novaColuna.appendChild(novoInputValor);

    doc.getElementById("colunas").appendChild(novaColuna);
  }

  return (
    <main className="w-full flex flex-col items-center justify-center bg-[#f6f6f8] h-screen">
      <div className="border-[0.1rem] border-[#dadee1] rounded-md bg-white w-full max-w-2xl">
        <div className="text-center p-4">
          <h1 className="text-[#574967]">Construtor de tabela</h1>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <label className="text-[#574967]">Título</label>
          <input
            className="border-[0.1rem] border-[#dadee1] rounded-md p-2"
            type="text"
            id="titulo"
          />
        </div>
        <div id="colunas" className="p-4">
          <div className="coluna flex flex-col gap-1 border-b-[0.1rem] pb-5 pt-5 border-black/5">
            <label className="text-[#574967]">Titulo da Coluna</label>
            <input
              type="text"
              className="border-[0.1rem] border-[#dadee1] rounded-md p-2 label"
            />
            <label className="text-[#574967]">Valor</label>
            <input
              type="text"
              className="border-[0.1rem] border-[#dadee1] rounded-md p-2 value"
            />
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <button
            className="bg-black/75 hover:bg-black text-white rounded-md px-4 py-2"
            onClick={() => adicionarColuna()}
          >
            Adicionar Coluna
          </button>
          <button
            className="bg-orange-600 hover:bg-orange-900 text-white rounded-md px-4 py-2"
            onClick={() => gerarTabela()}
          >
            Gerar Tabela
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-[#574967]">Código HTML Gerado:</h2>
          <textarea
            rows={15}
            className="border-[0.1rem] border-[#dadee1] rounded-md p-2 w-full"
            id="codigoHTML"
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
