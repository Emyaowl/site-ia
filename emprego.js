const jobsData = {
    'operador de telemarketing': { risk: 95, timeline: '2-5 anos', category: 'critico' },
    'atendente de call center': { risk: 95, timeline: '2-5 anos', category: 'critico' },
    'atendente': { risk: 95, timeline: '2-5 anos', category: 'critico' },
    'caminhoneiro': { risk: 92, timeline: '5-10 anos', category: 'critico' },
    'motorista': { risk: 90, timeline: '5-10 anos', category: 'critico' },
    'caixa': { risk: 88, timeline: '3-7 anos', category: 'critico' },
    'operador de maquina': { risk: 87, timeline: '5-10 anos', category: 'critico' },
    'auxiliar administrativo': { risk: 85, timeline: '3-7 anos', category: 'critico' },
    
    'revisor de documentos': { risk: 82, timeline: '5-10 anos', category: 'alto' },
    'paralegal': { risk: 80, timeline: '5-10 anos', category: 'alto' },
    'assistente juridico': { risk: 78, timeline: '5-10 anos', category: 'alto' },
    'contador': { risk: 75, timeline: '10-15 anos', category: 'alto' },
    'analista de dados junior': { risk: 72, timeline: '7-12 anos', category: 'alto' },
    'tradutor': { risk: 70, timeline: '5-10 anos', category: 'alto' },
    'jornalista': { risk: 68, timeline: '10-15 anos', category: 'alto' },
    'analista de dados': { risk: 65, timeline: '10-15 anos', category: 'alto' },
    
    'designer grafico': { risk: 50, timeline: '10-15 anos', category: 'medio' },
    'designer': { risk: 48, timeline: '10-15 anos', category: 'medio' },
    'engenheiro': { risk: 48, timeline: '15-20 anos', category: 'medio' },
    'programador': { risk: 45, timeline: '15-20 anos', category: 'medio' },
    'desenvolvedor': { risk: 45, timeline: '15-20 anos', category: 'medio' },
    'analista de sistemas': { risk: 43, timeline: '12-18 anos', category: 'medio' },
    'arquiteto': { risk: 42, timeline: '15-20 anos', category: 'medio' },
    'advogado': { risk: 40, timeline: '15-20 anos', category: 'medio' },
    
    'artista': { risk: 28, timeline: '20+ anos', category: 'baixo' },
    'professor': { risk: 25, timeline: '20+ anos', category: 'baixo' },
    'educador': { risk: 25, timeline: '20+ anos', category: 'baixo' },
    'musico': { risk: 24, timeline: '20+ anos', category: 'baixo' },
    'fisioterapeuta': { risk: 22, timeline: '20+ anos', category: 'baixo' },
    'enfermeiro': { risk: 20, timeline: '20+ anos', category: 'baixo' },
    'ator': { risk: 20, timeline: '20+ anos', category: 'baixo' },
    'medico': { risk: 18, timeline: '20+ anos', category: 'baixo' },
    'psiquiatra': { risk: 18, timeline: '20+ anos', category: 'baixo' },
    'psicologo': { risk: 15, timeline: '20+ anos', category: 'baixo' },
    'terapeuta': { risk: 12, timeline: '20+ anos', category: 'baixo' },
    'auditor de algoritmos': { risk: 8, timeline: 'Profissão emergente', category: 'baixo' },
    'engenheiro de prompt': { risk: 5, timeline: 'Profissão emergente', category: 'baixo' },
    'especialista em etica de ia': { risk: 3, timeline: 'Profissão emergente', category: 'baixo' }
};

const descriptions = {
    'critico': 'ALERTA MÁXIMO: Sua profissão está entre as mais ameaçadas pela automação. A transformação já começou e se acelera rapidamente. <strong>Dado real:</strong> 65% dos call centers globalmente já foram automatizados, eliminando 1,2 milhão de empregos só nos EUA.',
    'alto': 'ATENÇÃO: Partes significativas do seu trabalho serão automatizadas. Adaptação será necessária. <strong>Exemplo real:</strong> o sistema COIN do JPMorgan substituiu 360 mil horas anuais de trabalho jurídico rotineiro.',
    'medio': 'VIGILÂNCIA: Algumas tarefas serão automatizadas, mas habilidades humanas ainda serão essenciais. Desenvolva competências complementares. Trabalhadores que dominam IA como ferramenta multiplicadora tornam-se exponencialmente mais valiosos (programadores são 55% mais produtivos com GitHub Copilot).',
    'baixo': 'RELATIVA SEGURANÇA: Sua profissão exige habilidades distintivamente humanas difíceis de automatizar (empatia, criatividade, julgamento ético). Mas mantenha-se atualizado - nenhuma profissão está completamente imune.'
};

const skills = {
    'critico': [
        'Aprender programação básica e alfabetização digital',
        'Desenvolver pensamento crítico e resolução de problemas complexos',
        'Buscar requalificação profissional URGENTE',
        'Considerar transição para áreas que combinam técnica + habilidades humanas',
        'Estudar profissões emergentes em IA (vagas cresceram 300% entre 2020-2023)'
    ],
    'alto': [
        'Dominar ferramentas de IA no seu campo',
        'Desenvolver habilidades interpessoais e inteligência emocional',
        'Especializar-se em nichos complexos que IA ainda não domina',
        'Aprender análise estratégica e tomada de decisão contextual',
        'Focar em supervisão e auditoria de sistemas automatizados'
    ],
    'medio': [
        'Usar IA como ferramenta multiplicadora de produtividade',
        'Focar em criatividade, inovação e direção estratégica',
        'Desenvolver expertise única que combine técnica + julgamento humano',
        'Manter aprendizado contínuo - a meta-habilidade mais importante',
        'Trabalhar COM IA ao invés de competir contra ela'
    ],
    'baixo': [
        'Combinar habilidades humanas (empatia, criatividade) com alfabetização tecnológica',
        'Manter e aprofundar inteligência emocional e pensamento ético',
        'Atualizar conhecimentos constantemente',
        'Explorar intersecção entre sua área e tecnologia emergente',
        'Considerar funções de supervisão ética de sistemas de IA'
    ]
};

document.getElementById('checkJobBtn').addEventListener('click', function() {
    const input = document.getElementById('jobInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('jobResult');
    
    if (!input) {
        alert('Por favor, digite uma profissão!');
        return;
    }
    
    let jobInfo = jobsData[input];
    
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
            
            <div class="risk-timeline">
                <h4>⏱️ Timeline Estimada</h4>
                <p>Impacto significativo esperado em: <strong>${jobInfo.timeline}</strong></p>
                <p style="margin-top: 1rem; color: var(--text-gray);">Esta estimativa considera a velocidade atual de desenvolvimento tecnológico, adoção pelo mercado e barreiras regulatórias.</p>
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
    
    setTimeout(() => {
        const riskBar = resultDiv.querySelector('.risk-bar');
        riskBar.style.width = jobInfo.risk + '%';
    }, 100);
    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('jobInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkJobBtn').click();
    }
});