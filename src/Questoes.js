import { useState } from "react";
import letraA from './letra-a.png'
import letraB from './letra-b.png'
import letraC from './letra-c.png'
import letraD from './letra-d.png'
import './Questoes.css'


function Questoes(){
    const [pontuacao, setPontuacao] = useState(0)
    const respostas = [
        "É o corvo de três olhos?",
        "Quase um mestre",
        "Eh ... bom",
        "Volte e assista de novo",
        "Você assistiu mesmo a série?",
    ]
    const questao1 = {
        pergunta: "1. Qual é o lema da Casa Tully?",
        opcaoA: "Pela Honra e pela Glória",
        opcaoB: "Sangue e Aço, Unidos",
        opcaoC: "Rios e Campos, Fortes e Livres",
        opcaoD: "familia, dever e honra"
    }
    const questao2 = {
        pergunta: "2. Craster tinha quantas esposas?",
        opcaoA: "19",
        opcaoB: "5",
        opcaoC: "12",
        opcaoD: "23"
    }
    const questao3 = {
        pergunta: "3. Qual nome da espada de Arya?",
        opcaoA: "Sem rosto",
        opcaoB: "Agulha",
        opcaoC: "Lamento da viúva",
        opcaoD: "Alfinete"
    }
    const questao4 = {
        pergunta: "4. Qual a idade de Jon no primeiro livro?",
        opcaoA: "12",
        opcaoB: "14",
        opcaoC: "16",
        opcaoD: "18",
        resposta: "14"
    };
    
    const questao5 = {
        pergunta: "5. Qual lema da casa Lannister?",
        opcaoA: "Ouça-me rugir",
        opcaoB: "Um leão não se preocupa com a opinião das ovelhas",
        opcaoC: "O inverno está chegando",
        opcaoD: "Nós não semeamos",
        resposta: "Ouça-me rugir"
    };
    
    const questao6 = {
        pergunta: "6. Qual nome do lobo de Sansa Stark?",
        opcaoA: "Nymeria",
        opcaoB: "Cão Felpudo",
        opcaoC: "Verão",
        opcaoD: "Lady",
        
    };
    
    const questao7 = {
        pergunta: "7. Qual nome do personagem que entregou uma rosa para Sansa no torneio da mão?",
        opcaoA: "Sor Jaime Lannister",
        opcaoB: "Sor Barristan Selmy",
        opcaoC: "Sor Loras Tyrell",
        opcaoD: "Sor Gregor Clegane",
        
    };
    
    const questao8 = {
        pergunta: "8. Onde Arya escondeu a Agulha?",
        opcaoA: "Dentro de um tronco de árvore",
        opcaoB: "Em um rio",
        opcaoC: "No telhado de um prédio",
        opcaoD: "Entre pedras",
        
    };
    
    const questao9 = {
        pergunta: "9. Qual nome do dragão verde de Daenerys?",
        opcaoA: "Drogon",
        opcaoB: "Rhaegal",
        opcaoC: "Viserion",
        opcaoD: "Balerion",
        
    };
    
    const questao10 = {
        pergunta: "10. Qual o nome do Corvo de Sangue?",
        opcaoA: "Bran Stark",
        opcaoB: "Rickon Stark",
        opcaoC: "Eddard Stark",
        opcaoD: "Brynden Rivers",
        
    };
    const perguntas = [questao1, questao2, questao3, questao4, questao5, questao6, questao7, questao8, questao9, questao10]
    const acertosA = [1, 4]
    const acertosB = [2, 3, 8]
    const acertosC = [6]
    const acertosD = [0, 5, 7, 9]

    const [index, setIndex] = useState(1)
    const [pergunta, trocarPergunta] = useState(perguntas[0].pergunta);
    const [opcaoAA, trocarOpcaoA] = useState(perguntas[0].opcaoA)
    const [opcaoBB, trocarOpcaoB] = useState(perguntas[0].opcaoB)
    const [opcaoCC, trocarOpcaoC] = useState(perguntas[0].opcaoC)
    const [opcaoDD, trocarOpcaoD] = useState(perguntas[0].opcaoD)
    
    const selecionandoOpcaoA = () =>{
        for(const elemento of acertosA){
            if(elemento == index - 1)
                setPontuacao(pontuacao+10)
        }
        nextOptions()
    }
    const selecionandoOpcaoB = () =>{
        for(const elemento of acertosB){
            if(elemento == index - 1)
                setPontuacao(pontuacao+10)
        }
        nextOptions()
    }
    const selecionandoOpcaoC = () =>{
        for(const elemento of acertosC){
            if(elemento == index - 1)
                setPontuacao(pontuacao+10)
        }
        nextOptions()
    }
    const selecionandoOpcaoD = () =>{
        for(const elemento of acertosD){
            if(elemento == index - 1)
                setPontuacao(pontuacao+10)
        }
        nextOptions()
    }
    function nextOptions(){
        trocarPergunta(perguntas[index].pergunta)
        trocarOpcaoA(perguntas[index].opcaoA)
        trocarOpcaoB(perguntas[index].opcaoB)
        trocarOpcaoC(perguntas[index].opcaoC)
        trocarOpcaoD(perguntas[index].opcaoD)
        setIndex(prevIndex => (prevIndex + 1) % perguntas.length);
    }
    const [modalAberta, setModalAberta] = useState(false);

    const abrirModal = () => {
        setModalAberta(true);
      }
      const fecharModal = () => {
        setModalAberta(false);
      }
    return(<>
    <h3>{pergunta}</h3>
    <div className="alternativa">
        <img onClick={selecionandoOpcaoA} src={letraA} className="icone" />
        <h5>{opcaoAA}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcaoB} src={letraB} className="icone" />
        <h5>{opcaoBB}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcaoC} src={letraC} className="icone" />
        <h5>{opcaoCC}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcaoD} src={letraD} className="icone" />
        <h5>{opcaoDD}</h5>
    </div>
    <h1>{pontuacao}</h1>
    </>
    );
}
export default Questoes;