// Base de dados de profissões com descrições detalhadas
const jobsData = {
    // Risco Crítico (85-95%)
    'motorista': { 
        risk: 90, 
        timeline: '5-10 anos', 
        category: 'critico',
        details: '3,5 milhões de motoristas nos EUA ameaçados, 2 milhões no Brasil. Veículos autônomos prometem 30-40% de economia para empresas e 90% menos acidentes.'
    },
    'caminhoneiro': { 
        risk: 92, 
        timeline: '5-10 anos', 
        category: 'critico',
        details: '3,5 milhões de motoristas nos EUA ameaçados, 2 milhões no Brasil. Veículos autônomos prometem 30-40% de economia para empresas e 90% menos acidentes.'
    },
    'caixa': { 
        risk: 88, 
        timeline: '3-7 anos', 
        category: 'critico',
        details: 'Sistemas de pagamento automatizados e caixas de autoatendimento já substituem milhões de trabalhadores globalmente. Economia de 40-60% em custos operacionais para empresas.'
    },
    'operador de telemarketing': { 
        risk: 95, 
        timeline: '2-5 anos', 
        category: 'critico',
        details: '65% dos call centers já automatizados, eliminando 1,2 milhão de empregos só nos EUA. Economia de 30-50% em custos operacionais. Atendimento humano restrito a casos complexos.'
    },
    'atendente': { 
        risk: 85, 
        timeline: '3-7 anos', 
        category: 'critico',
        details: 'Chatbots e assistentes virtuais substituem atendimento básico. 65% dos call centers já automatizados globalmente. Atendimento humano cada vez mais limitado a situações excepcionais.'
    },
    'operador de maquina': { 
        risk: 87, 
        timeline: '10-15 anos', 
        category: 'critico',
        details: 'Robôs industriais e sistemas automatizados assumem tarefas repetitivas. Indústria 4.0 acelera automação de manufatura com economia de 35-50% em custos de produção.'
    },
    
    // Risco Alto (60-84%)
    'contador': { 
        risk: 75, 
        timeline: '10-15 anos', 
        category: 'alto',
        details: 'Softwares automatizam contabilidade básica e geração de relatórios. 40% das tarefas contábeis já podem ser automatizadas, mas análise estratégica e consultoria permanecem humanas.'
    },
    'tradutor': { 
        risk: 70, 
        timeline: '5-10 anos', 
        category: 'alto',
        details: 'IA generativa traduz com qualidade crescente. Google Translate e DeepL substituem tradução básica, mas contexto cultural e tradução literária ainda exigem humanos.'
    },
    'analista de dados': { 
        risk: 65, 
        timeline: '10-15 anos', 
        category: 'alto',
        details: 'IA automatiza coleta e análise básica de dados. Ferramentas como ChatGPT e Python automatizam 50-60% das tarefas. Interpretação estratégica e decisão final permanecem humanas.'
    },
    'jornalista': { 
        risk: 68, 
        timeline: '10-15 anos', 
        category: 'alto',
        details: 'IA gera notícias simples e relatórios factuais. Investigação jornalística profunda, entrevistas e análise crítica permanecem essencialmente humanas.'
    },
    'paralegal': { 
        risk: 72, 
        timeline: '10-15 anos', 
        category: 'alto',
        details: 'Sistemas como COIN do JPMorgan analisam documentos legais automaticamente, substituindo 360 mil horas de trabalho por ano. Pesquisa jurídica básica já é amplamente automatizada.'
    },
    
    // Risco Médio (35-59%)
    'advogado': { 
        risk: 45, 
        timeline: '15-20 anos', 
        category: 'medio',
        details: 'IA automatiza pesquisa jurídica e análise de contratos, mas argumentação em tribunal, estratégia legal e relacionamento com clientes exigem julgamento humano.'
    },
    'programador': { 
        risk: 40, 
        timeline: '15-20 anos', 
        category: 'medio',
        details: '55% mais produtivos com GitHub Copilot. 92% dos desenvolvedores já usam IA. Programadores juniores fazendo tarefas básicas em risco, seniores usando IA ficam exponencialmente mais valiosos.'
    },
    'designer': { 
        risk: 42, 
        timeline: '15-20 anos', 
        category: 'medio',
        details: '40% dos designers usam IA generativa com redução de 60% no tempo de prototipagem. DALL-E e Midjourney automatizam execução, mas direção criativa e estratégia permanecem humanas.'
    },
    'arquiteto': { 
        risk: 38, 
        timeline: '15-20 anos', 
        category: 'medio',
        details: 'IA gera plantas e modelos 3D rapidamente, mas criatividade, compreensão de necessidades do cliente e visão arquitetônica permanecem distintamente humanas.'
    },
    'engenheiro': { 
        risk: 48, 
        timeline: '15-20 anos', 
        category: 'medio',
        details: 'IA auxilia em cálculos e simulações, aumentando produtividade. Engenharia criativa, resolução de problemas complexos e supervisão crítica permanecem essenciais.'
    },
    
    // Risco Baixo (0-34%)
    'professor': { 
        risk: 25, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: '15-25% de risco. Habilidades humanas como empatia, criatividade, julgamento ético e pensamento contextual são difíceis de automatizar. Relacionamento e inspiração permanecem humanos.'
    },
    'psicologo': { 
        risk: 15, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: 'Empatia profunda, compreensão de contexto emocional complexo e construção de confiança terapêutica são distintamente humanas. IA pode auxiliar, mas não substituir.'
    },
    'enfermeiro': { 
        risk: 20, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: 'Cuidado compassivo, avaliação clínica em situações ambíguas e suporte emocional a pacientes exigem presença humana. Tecnologia auxilia, mas não substitui.'
    },
    'medico': { 
        risk: 18, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: 'IA auxilia em diagnóstico e análise de exames, mas decisões médicas complexas, comunicação empática com pacientes e julgamento ético permanecem humanos.'
    },
    'artista': { 
        risk: 22, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: 'IA gera arte, mas criatividade original, expressão emocional autêntica e visão artística única permanecem distintamente humanas. IA é ferramenta, não substituta.'
    },
    'terapeuta': { 
        risk: 12, 
        timeline: '20+ anos', 
        category: 'baixo',
        details: 'Empatia, escuta ativa, construção de relacionamento terapêutico e compreensão profunda de contexto emocional são irredutivelmente humanas.'
    }
};

const descriptions = {
    'critico': 'ALERTA MÁXIMO: Sua profissão está entre as mais ameaçadas pela automação. A transformação já começou e se acelera rapidamente.',
    'alto': 'ATENÇÃO: Partes significativas do seu trabalho serão automatizadas. Adaptação será necessária.',
    'medio': 'VIGILÂNCIA: Algumas tarefas serão automatizadas, mas habilidades humanas ainda serão essenciais. Desenvolva competências complementares.',
    'baixo': 'RELATIVA SEGURANÇA: Sua profissão exige habilidades distintivamente humanas difíceis de automatizar. Mas mantenha-se atualizado.'
};

const skills = {
    'critico': ['Aprender programação básica', 'Desenvolver pensamento crítico', 'Buscar requalificação profissional', 'Considerar transição de carreira'],
    'alto': ['Dominar ferramentas de IA', 'Desenvolver habilidades interpessoais', 'Especializar-se em nichos complexos', 'Aprender análise estratégica'],
    'medio': ['Usar IA como ferramenta multiplicadora', 'Focar em criatividade e inovação', 'Desenvolver expertise única', 'Manter aprendizado contínuo'],
    'baixo': ['Combinar habilidades técnicas com humanas', 'Manter empatia e inteligência emocional', 'Atualizar conhecimentos constantemente', 'Explorar intersecção com tecnologia']
};

// Clique no botão
document.getElementById('checkJobBtn').addEventListener('click', function() {
    const input = document.getElementById('jobInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('jobResult');
    
    if (!input) {
        alert('Por favor, digite uma profissão!');
        return;
    }
    
    // Buscar profissão na base
    let jobInfo = jobsData[input];
    
    // Se não encontrar exato, tentar busca parcial
    if (!jobInfo) {
        for (let job in jobsData) {
            if (input.includes(job) || job.includes(input)) {
                jobInfo = jobsData[job];
                break;
            }
        }
    }
    
    // Se ainda não encontrar, mostrar mensagem
    if (!jobInfo) {
        resultDiv.innerHTML = `
            <div class="risk-card" style="border-color: rgba(255, 193, 7, 0.5);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🤔</div>
                <div class="risk-level" style="color: #FFD700;">PROFISSÃO NÃO ENCONTRADA</div>
                <div class="risk-description" style="margin-top: 2rem;">
                    Desculpe, ainda não temos dados sobre "<strong>${input}</strong>" em nossa base.
                </div>
                
                <div class="risk-timeline">
                    <h4>💡 Sugestões</h4>
                    <p>Tente pesquisar por:</p>
                    <ul style="text-align: left; margin-top: 1rem; padding-left: 1.5rem; color: var(--text-gray);">
                        <li>Nome mais genérico (ex: "programador" ao invés de "programador full stack")</li>
                        <li>Variações do nome (ex: "advogado", "médico", "professor")</li>
                        <li>Categoria profissional (ex: "contador", "engenheiro")</li>
                    </ul>
                </div>
                
                <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(65, 54, 195, 0.15); border-radius: 12px; text-align: left;">
                    <h4 style="color: var(--accent-primary); margin-bottom: 1rem;">📊 Profissões Disponíveis:</h4>
                    <p style="color: var(--text-gray); line-height: 1.8;">
                        Motorista, Caminhoneiro, Caixa, Telemarketing, Contador, Tradutor, Jornalista, 
                        Advogado, Programador, Designer, Engenheiro, Professor, Psicólogo, Médico, Enfermeiro, entre outras.
                    </p>
                </div>
            </div>
        `;
        
        resultDiv.classList.add('show');
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
    }
    
    // Gerar resultado normal
    const riskClass = `risk-${jobInfo.category}`;
    const bgClass = `bg-${jobInfo.category}`;
    
    resultDiv.innerHTML = `
        <div class="risk-card">
            <div class="risk-level ${riskClass}">NÍVEL DE RISCO: ${jobInfo.category.toUpperCase()}</div>
            <div class="risk-percentage ${riskClass}">${jobInfo.risk}%</div>
            <div class="risk-bar-container">
                <div class="risk-bar ${bgClass}" style="width: 0%"></div>
            </div>
            <div class="risk-description">${descriptions[jobInfo.category]}</div>
            
            <div class="risk-details">
                <h4>📊 Contexto e Dados</h4>
                <p>${jobInfo.details}</p>
            </div>
            
            <div class="risk-timeline">
                <h4>⏱️ Timeline Estimada</h4>
                <p>Impacto significativo esperado em: <strong>${jobInfo.timeline}</strong></p>
                <p style="margin-top: 1rem; color: var(--text-gray);">Esta estimativa considera a velocidade atual de desenvolvimento tecnológico, adoção pelo mercado, e barreiras regulatórias.</p>
            </div>
            
            <div class="risk-skills">
                <h4>💡 Habilidades para Desenvolver</h4>
                <ul>
                    ${skills[jobInfo.category].map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    resultDiv.classList.add('show');
    
    // Animar a barra de risco
    setTimeout(() => {
        const riskBar = resultDiv.querySelector('.risk-bar');
        riskBar.style.width = jobInfo.risk + '%';
    }, 100);
    
    // Scroll suave até o resultado
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Pressionar ENTER faz o mesmo que clicar no botão
document.getElementById('jobInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkJobBtn').click();
    }
});