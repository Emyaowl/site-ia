const allQuestions = [
    {
        question: "Em 2018, um carro autônomo da Uber matou uma pedestre no Arizona. Quem foi considerado mais responsável?",
        options: [
            "A empresa Uber por tecnologia não testada",
            "O motorista de backup por negligência",
            "A pedestre por atravessar fora da faixa",
            "A responsabilidade nunca foi totalmente esclarecida"
        ],
        correct: 3,
        explanation: "A responsabilidade foi difusa e controversa. A motorista acabou assumindo a culpa por não prestar atenção na IA, mas o caso expõe o grande dilema: quando máquinas tomam decisões, a responsabilidade humana se dilui."
    },
    {
        question: "Por que a Amazon abandonou seu sistema de IA para recrutamento em 2018?",
        options: [
            "O sistema era ineficiente e aprovava candidatos não qualificados",
            "Apresentava vieses sistemáticos contra determinado grupo",
            "Os candidatos descobriram como enganar o algoritmo",
            "Custos operacionais eram maiores que contratação tradicional"
        ],
        correct: 1,
        explanation: "A IA penalizava currículos que mencionavam coisas femininas. Foi treinada com 10 anos de contratações da Amazon, empresa predominantemente masculina. A IA não é neutra - herda nossos preconceitos."
    },
    {
        question: "O que aconteceu com Robert Williams em Detroit?",
        options: [
            "Foi hackeado e teve identidade roubada por criminosos",
            "Foi vítima de erro de sistema de identificação tecnológica",
            "Foi promovido após desenvolver IA para polícia",
            "Processou empresa de tecnologia por uso indevido de dados"
        ],
        correct: 1,
        explanation: "Williams foi preso em casa na frente da família porque o reconhecimento facial o identificou erroneamente como criminoso. Ele estava no trabalho quando o crime aconteceu. Sistemas de reconhecimento facial erram 35% mais para mulheres negras."
    },
    {
        question: "O algoritmo COMPAS, usado em tribunais dos EUA, apresentava qual problema principal?",
        options: [
            "Era muito caro para o sistema judiciário manter",
            "Previa reincidência com apenas 50% de acerto",
            "Classificava desproporcionalmente certos grupos como alto risco",
            "Não conseguia analisar crimes violentos adequadamente"
        ],
        correct: 2,
        explanation: "O COMPAS classificava negros como alto risco 2 vezes mais que brancos com ficha criminal idêntica. 45% de falsos positivos para negros versus 23% para brancos. Decisões de liberdade sendo tomadas por algoritmo racista."
    },
    {
        question: "Quanto de energia UMA ÚNICA pesquisa no ChatGPT consome?",
        options: [
            "50 Wh - carregar celular 2 vezes",
            "150 Wh - carregar celular 5 vezes",
            "500 Wh - usar computador 3 horas",
            "5 Wh - praticamente desprezível"
        ],
        correct: 1,
        explanation: "150 Wh - equivalente a carregar seu celular 5 vezes. Também consome 250ml de água e emite 35g de CO2 (dirigir 150 metros de carro). E isso é só UMA pergunta!"
    },
    {
        question: "Treinar o GPT-3 emitiu quanto de CO₂?",
        options: [
            "Equivalente a 2 carros durante 6 meses",
            "Equivalente a 5 carros durante toda vida útil",
            "Equivalente a 50 voos internacionais",
            "Equivalente a 1 carro durante 3 anos"
        ],
        correct: 1,
        explanation: "552 toneladas de CO₂ - equivalente a 5 carros durante TODA a vida útil deles. E isso é só para CRIAR o modelo. Depois vêm bilhões de consultas diárias."
    },
    {
        question: "Quanto os data centers de IA consomem da eletricidade global atualmente?",
        options: [
            "0,3-0,5% - insignificante no contexto global",
            "1-2% - e pode triplicar até 2030",
            "5-7% - já é problema crítico",
            "10-12% - maior consumidor industrial"
        ],
        correct: 1,
        explanation: "1-2% da eletricidade global, e esse número pode TRIPLICAR até 2030. Uma pesquisa no ChatGPT consome 10x mais energia que busca tradicional no Google."
    },
    {
        question: "Qual percentual dos deepfakes possui conteúdo de natureza sexual não-consensual?",
        options: [
            "45% - quase metade do conteúdo",
            "65% - maioria significativa",
            "90% - esmagadora maioria",
            "30% - proporção preocupante"
        ],
        correct: 2,
        explanation: "90% dos deepfakes são pornográficos e vitimizam desproporcionalmente mulheres. Vítimas relatam trauma comparável a estupro. É violação visualizada repetidamente online sem controle."
    },
    {
        question: "Um caso documentado de fraude com deepfake de voz resultou em transferência de:",
        options: [
            "US$ 87 mil para conta offshore",
            "US$ 243 mil após pedido de executivo",
            "US$ 520 mil em múltiplas transações",
            "US$ 1,2 milhão através de criptomoedas"
        ],
        correct: 1,
        explanation: "US$ 243 mil. O gerente estava CONVENCIDO de estar falando com o chefe real. Demonstra como deepfakes podem ser usados para fraudes financeiras sofisticadas."
    },
    {
        question: "Segundo Goldman Sachs, quantos empregos globalmente seriam afetados pela IA generativa?",
        options: [
            "150 milhões - cerca de 5% da força de trabalho",
            "300 milhões - transformação massiva do trabalho",
            "600 milhões - metade dos trabalhadores globais",
            "80 milhões - impacto moderado e controlável"
        ],
        correct: 1,
        explanation: "300 milhões de empregos afetados globalmente. Não significa 300 milhões desempregados, mas profissões transformadas ou eliminadas."
    },
    {
        question: "Nos Estados Unidos, quantos motoristas profissionais de caminhão enfrentam risco por automação?",
        options: [
            "1,8 milhão - setor já em adaptação",
            "3,5 milhões - maioria da categoria",
            "850 mil - apenas rotas longas",
            "6,2 milhões - toda logística afetada"
        ],
        correct: 1,
        explanation: "3,5 milhões nos EUA e 2 milhões no Brasil. Veículos autônomos prometem 30-40% de economia para empresas. Do ponto de vista empresarial é racional, do humano é catástrofe existencial."
    },
    {
        question: "Qual percentual de call centers globalmente já implementou automação por IA?",
        options: [
            "35% - ainda em fase inicial de adoção",
            "65% - maioria já automatizada",
            "85% - automação quase completa",
            "45% - crescimento moderado"
        ],
        correct: 1,
        explanation: "65% já automatizados, eliminando 1,2 milhão de empregos só nos EUA. Economia de 30-50% para empresas. Atendimento humano só para casos complexos, categoria que encolhe todo dia."
    },
    {
        question: "Desenvolvedores usando GitHub Copilot apresentam qual ganho de produtividade?",
        options: [
            "25% - melhoria moderada mas significativa",
            "55% - aumento dramático de eficiência",
            "80% - quase duplicam produção",
            "35% - ganho respeitável e sustentável"
        ],
        correct: 1,
        explanation: "55% mais produtivos. 92% dos desenvolvedores já usam IA. Mas programadores juniores fazendo tarefas básicas serão substituídos, enquanto seniores usando IA ficam exponencialmente mais valiosos."
    },
    {
        question: "Qual região aprovou a primeira legislação abrangente sobre IA em 2024?",
        options: [
            "Estados Unidos - AI Safety and Innovation Act",
            "União Europeia - AI Act",
            "China - Algorithmic Governance Framework",
            "Canadá - Artificial Intelligence and Data Act"
        ],
        correct: 1,
        explanation: "O AI Act da União Europeia foi a primeira lei abrangente sobre IA do mundo. Classifica sistemas por risco, proíbe pontuação social por governo e manipulação subliminar. Multas de até 7% do faturamento global."
    },
    {
        question: "O regulamento GDPR europeu estabelece qual direito relacionado a decisões automatizadas?",
        options: [
            "Direito de recusar qualquer decisão feita por IA",
            "Direito de receber explicação sobre decisões que afetam você",
            "Direito de processar empresas que usam IA",
            "Direito de ter sempre humano tomando decisão final"
        ],
        correct: 1,
        explanation: "Direito à explicação - cidadãos podem exigir explicações sobre decisões automatizadas. Banco negou empréstimo? Você tem direito de saber por quê. O Brasil ainda não tem lei equivalente."
    },
    {
        question: "Entre 2020 e 2023, vagas de emprego relacionadas a IA cresceram:",
        options: [
            "120% - mais que duplicaram",
            "300% - triplicaram",
            "500% - quintuplicaram",
            "180% - crescimento robusto"
        ],
        correct: 1,
        explanation: "300% de crescimento. Novas profissões: Engenheiro de Prompt, Auditor de Algoritmos, Especialista em Ética de IA. Carreiras que não existiam há 10 anos, mas que exigem habilidades técnicas E humanas."
    },
    {
        question: "O caso da Amazon revelou que sistemas de IA:",
        options: [
            "São sempre objetivos quando bem programados",
            "Reproduzem padrões e vieses presentes nos dados de treinamento",
            "Funcionam melhor sem supervisão humana",
            "Eliminam preconceitos por serem baseados em matemática"
        ],
        correct: 1,
        explanation: "A IA herda nossos preconceitos. Foi treinada com dados históricos enviesados e reproduziu sexismo. IA não é neutra - ela amplifica desigualdades existentes nos dados."
    },
    {
        question: "Profissões como professor apresentam qual nível de risco de automação?",
        options: [
            "5-10% - praticamente imune",
            "15-25% - risco baixo",
            "45-55% - risco moderado",
            "70-80% - risco elevado"
        ],
        correct: 1,
        explanation: "15-25% de risco - baixo. Profissões com habilidades distintamente humanas como empatia, criatividade, julgamento ético e pensamento contextual são difíceis de automatizar. Mas nada é 100% seguro."
    },
    {
        question: "Sobre o impacto ambiental da IA, qual afirmação está correta?",
        options: [
            "IA sempre beneficia o meio ambiente através de otimizações",
            "IA tem impacto ambiental paradoxal - pode ajudar e prejudicar simultaneamente",
            "Impacto ambiental da IA é insignificante comparado a indústrias tradicionais",
            "Data centers de IA são carbono-neutros por design"
        ],
        correct: 1,
        explanation: "IA pode detectar desmatamento ilegal e otimizar sistemas, MAS gasta recursos massivos. Data centers consomem 1-2% da eletricidade global. IA não é vilã nem heroína - depende de COMO usamos."
    },
    {
        question: "Qual é a mensagem central sobre o futuro da IA e sociedade?",
        options: [
            "Devemos parar todo desenvolvimento de IA imediatamente",
            "O tipo de transformação será determinado por escolhas humanas, não é inevitável",
            "IA resolverá todos os problemas se não interferirmos",
            "Nada podemos fazer, a tecnologia sempre vence"
        ],
        correct: 1,
        explanation: "A escolha não será feita por algoritmos, mas por NÓS através de processos políticos, econômicos e culturais. Estamos numa janela de oportunidade. Agir agora é imperativo moral e prático."
    }
];

let selectedQuestions = [];
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let userAnswers = [];

function selectRandomQuestions() {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 5);
}

function loadQuestion() {
    const question = selectedQuestions[currentQuestion];
    const container = document.getElementById('quizContainer');
    
    container.innerHTML = `
        <div class="question-header">
            <div class="question-number">Pergunta ${currentQuestion + 1} de 5</div>
        </div>
        <div class="question-text">${question.question}</div>
        <div class="options" id="options">
            ${question.options.map((option, index) => `
                <div class="option" onclick="selectOption(${index})">
                    <strong>${String.fromCharCode(65 + index)})</strong> ${option}
                </div>
            `).join('')}
        </div>
        <div class="explanation" id="explanation">
            <h4>Explicação:</h4>
            <p>${question.explanation}</p>
        </div>
        <div class="navigation">
            <button class="btn" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>Anterior</button>
            <button class="btn" onclick="nextQuestion()" id="nextBtn" disabled>
                ${currentQuestion === 4 ? 'Finalizar' : 'Próximo'}
            </button>
        </div>
    `;

    updateProgress();
}

function selectOption(index) {
    const question = selectedQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'wrong');
    });
    
    options[index].classList.add('selected');
    
    const isCorrect = index === question.correct;
    
    if (isCorrect) {
        options[index].classList.add('correct');
        if (!userAnswers[currentQuestion]) {
            correctAnswers++;
            updateScores();
        }
    } else {
        options[index].classList.add('wrong');
        options[question.correct].classList.add('correct');
        if (!userAnswers[currentQuestion]) {
            wrongAnswers++;
            updateScores();
        }
    }
    
    userAnswers[currentQuestion] = {index, isCorrect};
    
    document.getElementById('explanation').classList.add('show');
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestion < 4) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function updateScores() {
    document.getElementById('correctScore').textContent = correctAnswers;
    document.getElementById('wrongScore').textContent = wrongAnswers;
}

function updateProgress() {
    document.getElementById('progressScore').textContent = `${currentQuestion + 1}/5`;
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.querySelector('.score-sidebar').style.display = 'none';
    const resultScreen = document.getElementById('resultScreen');
    resultScreen.classList.add('show');
    
    document.getElementById('finalScore').textContent = `${correctAnswers}/5`;
    
    let message = '';
    if (correctAnswers === 5) {
        message = 'PERFEITO! Você domina os dilemas éticos da IA!';
        document.getElementById('prizeMessage').style.display = 'block';
    } else if (correctAnswers >= 4) {
        message = 'Excelente! Você prestou atenção na explicação!';
    } else if (correctAnswers >= 3) {
        message = 'Bom trabalho! Você tem conhecimento sólido!';
    } else if (correctAnswers >= 2) {
        message = 'Não foi mal! Mas há mais para aprender.';
    } else {
        message = 'Continue estudando! Ética em IA é complexa.';
    }
    
    document.getElementById('resultMessage').textContent = message;
}

selectRandomQuestions();
loadQuestion();