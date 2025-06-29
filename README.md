# 🚀 Feedget - Widget de Feedback

Um widget de feedback moderno e interativo construído durante o evento **NLW Return** da Rocketseat. Permite que usuários enviem feedbacks categorizados de forma simples e intuitiva.

## ✨ Funcionalidades

- 📝 **Feedback Categorizado**: Classifique feedback como Bug, Ideia ou Outro
- 📸 **Captura de Tela**: Anexe screenshots automaticamente ao feedback
- 🎨 **Interface Moderna**: Design responsivo com Tailwind CSS
- ⚡ **Performance Otimizada**: Construído com Vite para desenvolvimento rápido
- 🔧 **TypeScript**: Tipagem estática para maior confiabilidade

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **HeadlessUI** - Componentes acessíveis para React
- **Phosphor Icons** - Ícones modernos
- **html2canvas** - Captura de screenshots

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nlw-return.git
cd nlw-return
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📦 Scripts Disponíveis

- `npm run dev` - Executa o app em modo de desenvolvimento
- `npm run build` - Cria uma build otimizada para produção
- `npm run preview` - Visualiza a build de produção localmente

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── CloseButton.tsx          # Botão de fechar modal
│   ├── Widget.tsx               # Componente principal do widget
│   └── WidgetForm/
│       ├── index.tsx            # Formulário principal
│       ├── Loading.tsx          # Componente de carregamento
│       ├── ScreenshotButton.tsx # Botão para captura de tela
│       └── Steps/
│           ├── FeedbackTypeStep.tsx     # Seleção do tipo de feedback
│           ├── FeedbackContentStep.tsx  # Conteúdo do feedback
│           └── FeedbackSuccessStep.tsx  # Confirmação de envio
├── assets/          # Ícones e imagens
├── App.tsx         # Componente raiz
└── main.tsx        # Ponto de entrada da aplicação
```

## 🎯 Como Usar

1. Clique no botão de feedback no canto inferior direito da tela
2. Selecione o tipo de feedback (Bug, Ideia ou Outro)
3. Descreva seu feedback no campo de texto
4. Opcionalmente, capture uma screenshot da tela
5. Envie seu feedback

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW Return da [Rocketseat](https://rocketseat.com.br/).

## 🙏 Agradecimentos

- [Rocketseat](https://rocketseat.com.br/) pelo evento NLW Return
- Comunidade de desenvolvedores que contribuiu com feedback e sugestões

---

<div align="center">
  Feito com ❤️ durante o NLW Return
</div>
