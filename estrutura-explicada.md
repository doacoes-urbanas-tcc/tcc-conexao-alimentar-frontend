.github/                 # Contém configurações específicas para o GitHub, como workflows de CI/CD (GitHub Actions)
public/                 # Arquivos públicos acessíveis diretamente via URL (ex: favicon, imagens estáticas)
└── conexao.png         # Imagem usada em alguma parte do projeto, por exemplo, uma ilustração de conexão

src/                    # Diretório principal do código-fonte da aplicação
├── assets/             # Arquivos estáticos como imagens, ícones, fontes etc.
├── components/         # Componentes reutilizáveis da interface, como botões, cards, inputs
├── pages/              # Conjunto de telas
├── context/            # Contextos do React para gerenciar estados globais (ex: tema, autenticação)
├── hooks/              # Hooks personalizados (ex: useAuth, useFetch) para lógica reutilizável
├── layout/             # Componentes que definem o layout geral da aplicação, como Sidebar, Header, Footer
├── routes/             # Definição das rotas da aplicação (ex: React Router)
├── services/           # Arquivos responsáveis por chamadas à APIs e lógica de comunicação com back-end
├── store/              # Gerenciamento de estado com Redux, Zustand ou outra lib
├── styles/             # Arquivos de estilo global (ex: Tailwind config, CSS global)
├── types/              # Definições de tipos e interfaces ts ou js
├── utils/              # Funções utilitárias reutilizáveis (ex: formatar data, validar CPF)
├── script/             # Scripts JS auxiliares que não se encaixam nos componentes, como inicializações ou funções isoladas
└── main.jsx            # Arquivo principal que renderiza o App no DOM e inicia a aplicação

vite.config.js          # Configuração do Vite (ferramenta de build e dev server)
package.json            # Lista de dependências, scripts de build/dev, nome do projeto, versão etc.
README.md               # Documentação inicial do projeto (como rodar, instalar, propósito, tecnologias)
