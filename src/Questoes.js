import { useState } from "react";
import letraA from './letra-a.png'
import letraB from './letra-b.png'
import letraC from './letra-c.png'
import letraD from './letra-d.png'
import './Questoes.css'


function Questoes(){
    let numeroQuestao = 0;
    let pontuacao = 0;
    function contabilizarPontos(){
        pontuacao = pontuacao + 10;
    }
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
        pergunta: "3. Qual nome daespada de Arya?",
        opcaoA: "Sem rosto",
        opcaoB: "Agulha",
        opcaoC: "Lamento da viúva",
        opcaoD: "Alfinete"
    }
    const perguntas = [questao1, questao2, questao3]

    const [index, setIndex] = useState(1)
    const [pergunta, trocarPergunta] = useState(perguntas[0].pergunta);
    const [opcaoAA, trocarOpcaoA] = useState(perguntas[0].opcaoA)
    const [opcaoBB, trocarOpcaoB] = useState(perguntas[0].opcaoB)
    const [opcaoCC, trocarOpcaoC] = useState(perguntas[0].opcaoC)
    const [opcaoDD, trocarOpcaoD] = useState(perguntas[0].opcaoD)
    
    const selecionandoOpcao = () =>{
        
        if(index >= perguntas.length){
            setIndex(0)
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
    return(<>
    <h3>{pergunta}</h3>
    <div className="alternativa">
        <img onClick={selecionandoOpcao} src={letraA} className="icone" />
        <h5>{opcaoAA}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcao} src={letraB} className="icone" />
        <h5>{opcaoBB}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcao} src={letraC} className="icone" />
        <h5>{opcaoCC}</h5>
    </div>
    <div className="alternativa">
        <img onClick={selecionandoOpcao} src={letraD} className="icone" />
        <h5>{opcaoDD}</h5>
    </div>


    </>
    );
}
export default Questoes;