import { useEffect, useState } from 'react'

import './App.css'

const projects = [
  {
    title: 'Mood Day',
    repoUrl: 'https://github.com/Loyolazz/Mood_Day',
    summary:
      'Aplicação criada em desafio técnico para registrar o humor diário e apresentar uma experiência acolhedora.',
    stack: ['Front-end', 'React'],
  },
  {
    title: 'CompassFlix',
    repoUrl: 'https://github.com/Loyolazz/CompassFlix',
    summary:
      'Catálogo inspirado em serviços de streaming, com foco em listagem de filmes e usabilidade consistente.',
    stack: ['Front-end', 'React'],
  },
  {
    title: 'UniPassRN',
    repoUrl: 'https://github.com/Loyolazz/UniPassRN',
    summary: 'Aplicativo mobile React Native desenvolvido para desafio técnico com fluxo de autenticação.',
    stack: ['Mobile', 'React Native'],
  },
  {
    title: 'JusCash Front-end',
    repoUrl: 'https://github.com/Loyolazz/JusCash-Front-end',
    summary: 'Interface web para o desafio JusCash, destacando responsividade e fluxo de onboarding.',
    stack: ['Front-end', 'React'],
  },
  {
    title: 'JusCash Back-end',
    repoUrl: 'https://github.com/Loyolazz/JusCash-Back-end',
    summary: 'API criada para sustentar o desafio JusCash, com rotas de negócio e organização limpa.',
    stack: ['Back-end', 'Node.js'],
  },
  {
    title: 'Shopper Test Back-end',
    repoUrl: 'https://github.com/Loyolazz/shopperTestBack',
    summary: 'Implementação de desafio técnico envolvendo operações de marketplace e integrações de carrinho.',
    stack: ['Back-end', 'Node.js'],
  },
  {
    title: 'Junior Challenge Devvo',
    repoUrl: 'https://github.com/Loyolazz/Junior-Challenge-Devvo-Arthur-Loyola',
    summary: 'Solução completa para o desafio Devvo, com atenção a regras de negócio e clareza de código.',
    stack: ['Full Stack'],
  },
  {
    title: 'MyMovies - L2 Test Tech',
    repoUrl: 'https://github.com/Loyolazz/MyMovies-L2TestTech',
    summary: 'Aplicação web de listagem de filmes construída para avaliação técnica, com filtros e detalhes.',
    stack: ['Front-end', 'React'],
  },
  {
    title: 'MyMovies - React Native',
    repoUrl: 'https://github.com/Loyolazz/MyMovies-L2TestTech-ReactNative',
    summary: 'Versão mobile em React Native do desafio MyMovies, replicando a experiência de catálogo.',
    stack: ['Mobile', 'React Native'],
  },
  {
    title: 'Globoplay Test',
    repoUrl: 'https://github.com/Loyolazz/globoplaytest',
    summary: 'Desafio técnico inspirado na experiência Globoplay, explorando boas práticas de UI.',
    stack: ['Front-end', 'React'],
  },
]

const screenShowcases = [
  {
    title: 'Mood Day',
    description: 'Aplicativo para registrar e acompanhar o humor diário com visual moderno.',
    stack: ['React Native', 'Mobile'],
    images: [
      { src: '/screens/moodDayHome.png', caption: 'Tela inicial com cards de humor' },
      { src: '/screens/moodDayLogin.png', caption: 'Autenticação clara e direta' },
      { src: '/screens/moodDaySelectHumor.png', caption: 'Seleção guiada do humor do dia' },
      { src: '/screens/mooDayPerfil.png', caption: 'Perfil com resumo de humor e avatar' },
    ],
  },
  {
    title: 'CompassFlix',
    description: 'Catálogo inspirado em streaming com listas, detalhes e perfis.',
    stack: ['React', 'Front-end'],
    images: [
      { src: '/screens/compassflixHome.png', caption: 'Home com destaques de filmes' },
      { src: '/screens/compassflixLogin.jpg', caption: 'Login com branding e CTA visíveis' },
      { src: '/screens/compassflixMovieScreen.png', caption: 'Detalhes completos de cada título' },
      { src: '/screens/compassflixSeriesScreen.png', caption: 'Grade de séries com navegação simples' },
      { src: '/screens/compassflixPerfil.jpg', caption: 'Área de perfil com preferências' },
    ],
  },
  {
    title: 'MyMovies',
    description: 'Listagem de filmes com favoritos, calendário e detalhes salvos.',
    stack: ['React', 'Front-end'],
    images: [
      { src: '/screens/L2testMyMoviesHome.png', caption: 'Home com cards e filtros' },
      { src: '/screens/L2testMyMoviesHome2.png', caption: 'Layout alternativo com destaques' },
      { src: '/screens/L2testMyMoviesFavorites.png', caption: 'Biblioteca de favoritos marcada' },
      { src: '/screens/L2testMyMoviesFavorites2.png', caption: 'Favoritos com CTA de detalhes' },
      { src: '/screens/L2testMyMoviesHomeCalledarSave.png', caption: 'Integração com agenda e lembretes' },
      { src: '/screens/L2testMyMoviesHome3.png', caption: 'Exploração contínua de catálogo' },
      { src: '/screens/L2testMyMoviesHome4.png', caption: 'Experiência consistente em diferentes listas' },
    ],
  },
  {
    title: 'UniPass RN',
    description: 'Portal acadêmico mobile com jornadas para alunos e professores.',
    stack: ['React Native', 'Mobile'],
    images: [
      { src: '/screens/uniPassLogin.png', caption: 'Login institucional com validação' },
      { src: '/screens/uniPassHomeAluno.png', caption: 'Dashboard do aluno com atalhos' },
      { src: '/screens/uniPassHomeProfessor.png', caption: 'Painel do professor com cards de cursos' },
      { src: '/screens/uniPassCarteirinhaAlunoProfessor.png', caption: 'Carteirinha digital para identificação' },
      { src: '/screens/uniPassInscircaoCursoAluno.png', caption: 'Inscrição rápida em cursos extras' },
      { src: '/screens/uniPassCursosExtrasAluno.png', caption: 'Exploração de cursos complementares' },
      { src: '/screens/uniPassHorasAluno.png', caption: 'Controle de horas e progresso' },
      { src: '/screens/uniPassCursoCertificadoScreenAluno.png', caption: 'Certificados disponíveis para download' },
      { src: '/screens/uniPassCriarEditarCursoProfessor.png', caption: 'Criação e edição de cursos' },
      { src: '/screens/uniPassEditarCriarCursoProfessor.png', caption: 'Gestão de conteúdo para aulas' },
      { src: '/screens/uniPassConfIrmarCriacaoCursoProfessor.png', caption: 'Confirmação de publicação do curso' },
    ],
  },
  {
    title: 'Globoplay Test',
    description: 'Desafio inspirado na experiência Globoplay com navegação fluida.',
    stack: ['Kotlin', 'Mobile'],
    images: [
      { src: '/screens/globoplayTestKotlinHome.png', caption: 'Página inicial com carrosséis de conteúdo' },
      { src: '/screens/globoplayTestKotlinHomeLoading.png', caption: 'Esqueleto de carregamento customizado' },
      { src: '/screens/globoplayTestKotlinMovieSerieScreen.png', caption: 'Lista de filmes e séries com filtros' },
      { src: '/screens/globoplayTestKotlinMovieSerieScreenDetails.png', caption: 'Detalhes ricos para cada produção' },
      { src: '/screens/globoplayTestKotlinFavorites.png', caption: 'Coleção de favoritos com visual limpo' },
    ],
  },
  {
    title: 'Devvo Challenge',
    description: 'Solução full-stack com fluxo completo e visual detalhado.',
    stack: ['Full Stack'],
    images: [{ src: '/screens/DevvoFullStackAneis.png', caption: 'Dashboard principal do desafio' }],
  },
]

const contacts = [
  {
    label: 'LinkedIn',
    value: 'arthur-araujo-loyola-a88bab154',
    url: 'https://www.linkedin.com/in/arthur-araujo-loyola-a88bab154/',
  },
  {
    label: 'GitHub',
    value: 'github.com/Loyolazz',
    url: 'https://github.com/Loyolazz',
  },
  {
    label: 'E-mail',
    value: 'loyolazempresarial@gmail.com',
    url: 'mailto:loyolazempresarial@gmail.com',
  },
  {
    label: 'Telefone',
    value: '(79) 98876-5545',
    url: 'https://wa.me/5579988765545',
  },
]

const experiences = [
  {
    company: 'Memora Processos Inovadores S/A',
    location: 'Brasília, DF',
    role: 'Desenvolvedor Full-Stack Pleno',
    period: 'Mar/2025 – atualmente',
    bullets: [
      'Desenvolvimento e integração de funcionalidades utilizando Apache Cordova e SQL Server para ANTAQ.',
      'Liderança da conversão do app Cordova para React Native CLI, reduzindo ciclo de entregas.',
    ],
  },
  {
    company: 'Sergipe Parque Tecnológico',
    location: 'Aracaju, SE',
    role: 'Desenvolvedor Full-Stack Júnior',
    period: 'Ago/2023 – Out/2024',
    bullets: [
      'Criação de funcionalidades para site e aplicativo usados pelo Corpo de Bombeiros.',
      'Stack: React, React Native, TypeScript, PHP, Laravel, CakePHP e PostgreSQL.',
    ],
  },
  {
    company: 'Grupo Ser Educacional',
    location: 'Aracaju, SE',
    role: 'Estágio em Full-Stack Mobile',
    period: 'Out/2022 – Out/2023',
    bullets: [
      'Atuação desde o início no app Bem Família (publicado), cuidando de front React Native, back-end Node.js e MySQL.',
      'Contato direto com cliente: coleta de requisitos, alinhamento e coordenação da equipe.',
    ],
  },
  {
    company: 'Compass.uol',
    location: 'Recife, PE',
    role: 'Estágio em Front-Stack Mobile',
    period: 'Mai/2022 – Set/2022',
    bullets: [
      'Desenvolvimento de apps com React Native e integração com APIs REST.',
      'Vivência em times ágeis com metodologia Scrum.',
    ],
  },
]

const education = {
  course: 'Análise e Desenvolvimento de Sistemas',
  place: 'Aracaju, SE',
  period: 'Fev/2021 – Jun/2024',
  level: 'Graduação',
}

function App() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [activeFrameIndex, setActiveFrameIndex] = useState(0)

  const currentGroup = screenShowcases[activeGroupIndex]
  const activeFrame = currentGroup.images[activeFrameIndex]

  useEffect(() => {
    setActiveFrameIndex(0)
  }, [activeGroupIndex])

  const handleNext = () => {
    const next = (activeFrameIndex + 1) % currentGroup.images.length
    setActiveFrameIndex(next)
  }

  const handlePrev = () => {
    const prev =
      (activeFrameIndex - 1 + currentGroup.images.length) % currentGroup.images.length
    setActiveFrameIndex(prev)
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="badge">Portfólio Técnico</div>
        <h1>
          Arthur Araujo Loyola — <span>Desenvolvedor Full-Stack Mobile</span>
        </h1>
        <p className="lead">
          Mais de quatro anos em mobile e back-end, modernizando legados e entregando apps
          publicados nas lojas. Foco em React Native, Kotlin, Node.js e APIs escaláveis.
        </p>
        <div className="cta-row">
          <a
            className="btn primary"
            href="https://www.linkedin.com/in/arthur-araujo-loyola-a88bab154/"
            target="_blank"
            rel="noreferrer"
          >
            Falar no LinkedIn
          </a>
          <a className="btn ghost" href="https://github.com/Loyolazz" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn ghost" href="mailto:loyolazempresarial@gmail.com">
            Enviar e-mail
          </a>
        </div>

        <div className="hero-grid">
          <div className="meta-card">
            <p className="eyebrow">Local</p>
            <p className="meta-title">Aracaju - SE</p>
            <p className="muted">Disponível para remoto, com atuação em squads distribuídos.</p>
          </div>
          <div className="meta-card">
            <p className="eyebrow">Foco</p>
            <p className="meta-title">Mobile + Back-end</p>
            <p className="muted">React Native, Kotlin/Android, Node.js, .NET, Laravel, SQL Server e PostgreSQL.</p>
          </div>
          <div className="meta-card">
            <p className="eyebrow">Resultados</p>
            <p className="meta-title">+60% de ganho</p>
            <p className="muted">Redução de 60% no ciclo de entregas da ANTAQ ao migrar Cordova + .NET para React Native.</p>
          </div>
        </div>
      </header>

      <section className="section about">
        <div>
          <p className="eyebrow">Resumo profissional</p>
          <h2>Visão de produto, arquitetura e entrega</h2>
          <p className="lead">
            Desenvolvedor Full-Stack com sólida base mobile (React Native, Kotlin) e back-end (Node.js, Laravel).
            Integro sistemas, defino arquitetura, conduzo refatorações complexas e atuo diretamente com
            stakeholders. Perfil colaborativo, orientado a valor e escalabilidade.
          </p>
          <div className="chips">
            {[
              'React Native',
              'Expo',
              'Kotlin / Android',
              'Node.js',
              'Laravel',
              '.NET',
              'TypeScript',
              'SQL Server',
              'PostgreSQL',
              'MySQL',
              'Swagger & Postman',
              'Azure DevOps',
              'Scrum',
            ].map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="about-card">
          <p className="muted">
            Atuei da descoberta ao deploy em projetos publicados nas lojas Apple e Google. Organizo backlog técnico e
              garanto rastreabilidade com documentação e APIs versionadas.
          </p>
          <div className="contact-grid">
            {contacts.map((contact) => (
              <a key={contact.label} className="contact-card" href={contact.url} target="_blank" rel="noreferrer">
                <p className="eyebrow">{contact.label}</p>
                <p className="meta-title small">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section timeline">
        <div className="section-header">
          <div>
            <p className="eyebrow">Experiência profissional</p>
            <h2>Projetos, liderança e entregas reais</h2>
            <p className="muted">Histórico completo com tecnologias, contexto e impactos.</p>
          </div>
        </div>
        <div className="timeline-grid">
          {experiences.map((exp) => (
            <article key={exp.company} className="timeline-card">
              <div className="timeline-head">
                <div>
                  <p className="eyebrow">{exp.location}</p>
                  <h3>{exp.company}</h3>
                  <p className="meta-title small">{exp.role}</p>
                </div>
                <div className="pill soft">{exp.period}</div>
              </div>
              <ul>
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education">
        <div className="section-header">
          <div>
            <p className="eyebrow">Formação acadêmica</p>
            <h2>Base sólida e contínua evolução</h2>
            <p className="muted">Graduação em andamento para reforçar fundamentos e boas práticas.</p>
          </div>
          <div className="pill">{education.level}</div>
        </div>
        <div className="education-card">
          <div>
            <p className="meta-title">{education.course}</p>
            <p className="muted">{education.place}</p>
          </div>
          <p className="pill soft">{education.period}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Projetos em destaque</p>
            <h2>Repos técnicos e desafios resolvidos</h2>
            <p className="muted">Cada card leva direto para o repositório correspondente.</p>
          </div>
          <div className="pill">10 repositórios</div>
        </div>

        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <div className="card-head">
                <h3>{project.title}</h3>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="card-text">{project.summary}</p>
              <a className="link" href={project.repoUrl} target="_blank" rel="noreferrer">
                Ver repositório →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section carousel-block">
        <div className="section-header">
          <div>
            <p className="eyebrow">Carrossel de telas</p>
            <h2>Interfaces reais das entregas</h2>
            <p className="muted">
              Navegue pelas telas capturadas direto dos apps e desafios técnicos, em versões mobile e web.
            </p>
          </div>
          <div className="pill">{currentGroup.title}</div>
        </div>

        <div className="carousel-shell">
          <div className="carousel-sidebar">
            <p className="eyebrow">Projetos</p>
            <div className="carousel-tabs">
              {screenShowcases.map((group, index) => {
                const isActive = index === activeGroupIndex
                return (
                  <button
                    key={group.title}
                    className={`tab ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveGroupIndex(index)}
                  >
                    <div className="tab-head">
                      <span className="dot" />
                      <span className="tab-title">{group.title}</span>
                    </div>
                    <p className="tab-desc">{group.description}</p>
                    <div className="tab-stack">
                      {group.stack.map((item) => (
                        <span key={item} className="chip ghost">
                          {item}
                        </span>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="carousel-stage">
            <div className="frame">
              <img src={activeFrame.src} alt={activeFrame.caption} />
              <div className="frame-overlay">
                <div>
                  <p className="eyebrow">{currentGroup.title}</p>
                  <h3>{activeFrame.caption}</h3>
                </div>
                <div className="pill soft">
                  {activeFrameIndex + 1}/{currentGroup.images.length}
                </div>
              </div>
            </div>

            <div className="carousel-controls">
              <button type="button" className="ctrl" onClick={handlePrev}>
                ← Anterior
              </button>
              <div className="dots-row">
                {currentGroup.images.map((image, idx) => (
                  <button
                    key={image.src}
                    className={`dot-btn ${idx === activeFrameIndex ? 'active' : ''}`}
                    onClick={() => setActiveFrameIndex(idx)}
                    aria-label={`Ir para a tela ${idx + 1} do projeto ${currentGroup.title}`}
                  />
                ))}
              </div>
              <button type="button" className="ctrl" onClick={handleNext}>
                Próxima →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlight">
        <div>
          <p className="eyebrow">Disponível para novos desafios</p>
          <h2>Vamos trabalhar juntos?</h2>
          <p className="lead">
            Se você curtiu meu trabalho, me chame para conversar sobre vagas, freelas ou novas provas técnicas.
            Respondo rápido.
          </p>
        </div>
        <div className="cta-col">
          <a
            className="btn primary full"
            href="https://www.linkedin.com/in/arthur-araujo-loyola-a88bab154/"
            target="_blank"
            rel="noreferrer"
          >
            Falar no LinkedIn
          </a>
          <a className="btn ghost full" href="mailto:loyolazempresarial@gmail.com">
            Enviar e-mail
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
