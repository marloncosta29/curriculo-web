# Currículo Web

Este projeto é um currículo web desenvolvido em [Next.js](https://nextjs.org/) com estilização feita utilizando [Tailwind CSS](https://tailwindcss.com/). Ele serve como portfólio profissional e exibe as principais habilidades, experiências e projetos.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web otimizadas.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **JavaScript/TypeScript**: Linguagens principais do projeto.
- **Vercel**: Plataforma para deploy e hospedagem.

## Funcionalidades

- **Seções do currículo**: Exibe informações sobre experiência profissional, habilidades técnicas, projetos anteriores e educação.
- **Responsividade**: O layout é completamente responsivo, funcionando bem em diferentes dispositivos (desktop, tablet, mobile).

## Como Rodar o Projeto

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/usuario/curriculo-web.git
    ```

2. **Instale as dependências**:
    ```bash
    cd curriculo-web
    npm install
    ```

3. **Execute o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto.

## Estrutura do Projeto

```bash
.
├── components       # Componentes reutilizáveis do currículo
├── app              # Páginas do projeto (page.tsx)
├── assets           # Arquivos para serem usados no projeto
├── .gitignore       # Arquivos e diretórios ignorados pelo Git
├── next.config.js   # Configurações do Next.js
└── package.json     # Dependências e scripts do projeto
