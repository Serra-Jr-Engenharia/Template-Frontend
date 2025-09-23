# Template-Frontend

Este projeto é um template de frontend criado pela Serra Jr. Engenharia para padronizar e acelerar o desenvolvimento de projetos internos.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [Biome](https://biomejs.dev/) (lint e formatador)

## Estrutura do Projeto

```
Template-Frontend/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── package.json
├── tsconfig.json
├── tailwind.config.cjs
├── postcss.config.mjs
├── biome.json
└── README.md
```

## Como Usar

### 1. Instalação

Clone o repositório e instale as dependências:

```powershell
# Clone o repositório
git clone <url-do-repositorio>
cd Template-Frontend

# Instale as dependências
npm install
```

### 2. Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```powershell
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

### 3. Lint e Formatação

Para rodar o lint e formatar o código com Biome:

```powershell
npm run lint
npm run format
```

## Personalização

Este template pode ser customizado conforme a necessidade dos projetos internos da Serra Jr. Engenharia. Basta editar os componentes em `src/components` e as páginas em `src/app`.
