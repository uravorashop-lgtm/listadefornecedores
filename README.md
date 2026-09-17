# 💎 Lista VIP de Fornecedores de Luxo

Página de vendas de alta conversão, moderna e 100% responsiva (otimizada para mobile), com layout em tons suaves de roxo e branco, carrossel de depoimentos, modal de checkout Pix/Cartão e gerenciador visual de imagens.

---

## 🚀 Como Colocar no Ar na Vercel (Passo a Passo)

### Opção 1: Direto pelo GitHub (Recomendado)

1. **Crie um repositório no seu GitHub**:
   - Acesse [github.com/new](https://github.com/new) e crie um novo repositório (ex: `lista-vip-fornecedores`).

2. **Envie os arquivos do projeto para o GitHub**:
   No terminal da sua máquina, dentro da pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit - landing page"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Conecte na Vercel**:
   - Acesse [vercel.com](https://vercel.com) e faça login (pode entrar com sua conta do GitHub).
   - Clique no botão **"Add New..."** > **"Project"**.
   - Selecione o repositório que você acabou de subir.
   - A Vercel detectará automaticamente as configurações através do `vercel.json`:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Clique em **"Deploy"**.
   - Em menos de 1 minuto seu site estará online com link seguro `https://seu-projeto.vercel.app` e certificado SSL gratuito!

---

### Opção 2: Pelo Terminal via Vercel CLI

Se preferir publicar direto do terminal sem passar pelo GitHub:

1. Instale a CLI da Vercel globalmente:
   ```bash
   npm i -g vercel
   ```

2. Na raiz da pasta do projeto, execute:
   ```bash
   vercel
   ```
   Siga as instruções rápidas no terminal (aperte Enter para as opções padrão).

3. Para publicar em produção definitiva:
   ```bash
   vercel --prod
   ```

---

## 💻 Como Rodar o Projeto Localmente

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Abra seu navegador em `http://localhost:3000`.

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```
   Os arquivos compilados e otimizados serão gerados na pasta `dist/`.

4. **Verificar erros de TypeScript / Linter**:
   ```bash
   npm run lint
   ```

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite 6**
- **Tailwind CSS v4**
- **Lucide React** (Ícones)
- **Motion** (Animações fluidas)
