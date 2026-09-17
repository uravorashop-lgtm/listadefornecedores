import { ProductExample, TestimonialItem, FaqItem, ValueItem } from '../types';

export const PRODUCT_EXAMPLES: ProductExample[] = [
  {
    id: 'bolsa',
    title: 'Bolsa',
    price: 'R$ 40',
    badge: 'PREÇO DIRETO DO FORNECEDOR',
    imageId: 'prod_bolsa',
  },
  {
    id: 'joias',
    title: 'Joias e relógios',
    price: 'R$ 80',
    badge: 'PREÇO DIRETO DO FORNECEDOR',
    imageId: 'prod_joias',
  },
  {
    id: 'perfumes',
    title: 'Perfumes Importados',
    price: 'R$ 90',
    badge: 'PREÇO DIRETO DO FORNECEDOR',
    imageId: 'prod_perfumes',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test_1',
    name: 'Feedback bolsa mais hypada',
    highlight: 'Mais um feedback lindo!! Da bolsa mais hypada do momento',
    previewText: 'Oie! Chegou hoje minha compra e gostei muito! Muito obrigada pelas dicas! Amei! Qual o fornecedor?',
    imageId: 'feedback_1',
    tag: 'Bolsa Coach / C',
  },
  {
    id: 'test_2',
    name: 'Feedback Relógio Diesel',
    highlight: 'Relógio Diesel Top',
    previewText: 'não foi mais que 300,00 reais não! Perfeita demais!',
    imageId: 'feedback_2',
    tag: 'Relógio Importado',
  },
  {
    id: 'test_3',
    name: 'Feedback Bolsa LV',
    highlight: 'Minha bolsa chegou',
    previewText: 'Minha bolsa chegou, PERFEITA! Acabamento impecável!',
    imageId: 'feedback_3',
    tag: 'Bolsa LV Monograma',
  },
  {
    id: 'test_4',
    name: 'Feedback Bolsa Miu Miu',
    highlight: 'Mais uma aluna que já está aproveitando',
    previewText: 'Mais uma aluna que já está aproveitando os fornecedores da Lista Vip. Cada bolsa linda! primeira linha, 90,00 reais cada material excelente!!',
    imageId: 'feedback_4',
    tag: 'Miu Miu',
  },
  {
    id: 'test_5',
    name: 'Feedback Bolsa Chanel',
    highlight: 'Bolsas Chanel com acabamento perfeito',
    previewText: 'Ollie, Feedback sobre as bolsas... Eu amei!! Valeu muito a pena comprar o curso, acabamento perfeito. Comprei com a fornecedora Jô...',
    imageId: 'feedback_5',
    tag: 'Chanel Classic',
  },
  {
    id: 'test_6',
    name: 'Feedback Carteira LV Europa',
    highlight: 'Carteira comprada pela fração do preço',
    previewText: 'Tudo a caminho... A carteira da LV custa 580€ e eu paguei 160€',
    imageId: 'feedback_6',
    tag: 'Carteira de Luxo',
  },
  {
    id: 'test_7',
    name: 'Feedback Relógio e Joias',
    highlight: 'Relógio feminino e pulseiras',
    previewText: 'Olha o brilho desse relógio e das pulseiras! Impressionada com a qualidade.',
    imageId: 'feedback_7',
    tag: 'Joias & Relógios',
  },
  {
    id: 'test_8',
    name: 'Feedback Aline Brasil',
    highlight: 'Relógio de Luxo Masculino',
    previewText: 'Aline Brasil: Lindooo lindooo! Chegou tudo certinho.',
    imageId: 'feedback_8',
    tag: 'Rolex / Linha Italiana',
  },
  {
    id: 'test_9',
    name: 'Feedback Ticiane Couto',
    highlight: 'Já fiz várias compras com a ajuda da lista',
    previewText: 'Já fiz várias compras com a ajuda da lista... Acho prática e organizada... Com a sua ajuda me senti mais segura em comprar... Nossa fico super animada com isso!',
    imageId: 'feedback_9',
    tag: 'Grupo VIP Alunas',
  },
  {
    id: 'test_10',
    name: 'Feedback Bruno Aluno',
    highlight: 'Amigaaa, eu comprei a lista 1',
    previewText: 'Amigaaa, eu comprei a lista 1, quero receber a nova com atualizações. Gostei especialmente daquele contato principal da venda de óculos, comprei várias vezes inclusive pra presente. Ótima qualidade...',
    imageId: 'feedback_10',
    tag: 'Óculos & Acessórios',
  },
];

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: 'val_1',
    icon: 'Shirt',
    title: '10 fornecedores de roupas de luxo',
    originalPrice: 'R$ 47',
  },
  {
    id: 'val_2',
    icon: 'ShoppingBag',
    title: '20 fornecedores de bolsas de luxo',
    originalPrice: 'R$ 97',
  },
  {
    id: 'val_3',
    icon: 'Sparkles',
    title: '10 fornecedores de moissanites e joias',
    originalPrice: 'R$ 97',
  },
  {
    id: 'val_4',
    icon: 'Footprints',
    title: '10 fornecedores de saltos e sapatos de luxo',
    originalPrice: 'R$ 97',
  },
  {
    id: 'val_5',
    icon: 'Watch',
    title: '5 fornecedores de relógios de luxo',
    originalPrice: 'R$ 97',
  },
  {
    id: 'val_6',
    icon: 'Link2',
    title: 'Lista de links dos melhores produtos',
    originalPrice: 'R$ 62',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq_1',
    question: 'Funciona para quem só quer comprar para uso próprio?',
    answer:
      'Sim, com certeza! Mais de 80% das mulheres que entram na lista compram exclusivamente para renovar o guarda-roupa pessoal, economizando até 90% em bolsas, óculos, calçados, joias e roupas de grife direto de quem fornece para as lojas.',
  },
  {
    id: 'faq_2',
    question: 'Como funciona o acesso depois da compra?',
    answer:
      'O acesso é 100% imediato e automático! Assim que o seu pagamento for aprovado (no Pix a liberação é instantânea em segundos), você recebe em seu e-mail o link exclusivo da área de membros com todos os contatos diretos de WhatsApp, catálogos e links organizados.',
  },
  {
    id: 'faq_3',
    question: 'Preciso comprar em quantidade?',
    answer:
      'Não! Todos os fornecedores selecionados foram testados e aprovados para atender a partir de 1 peça única com valor de atacado/fábrica direto para você.',
  },
  {
    id: 'faq_4',
    question: 'Os fornecedores enviam para todo o Brasil?',
    answer:
      'Sim! Todos os fornecedores trabalham com envios via Correios (Sedex e PAC) e transportadoras para todos os estados do Brasil, com código de rastreio e garantia de entrega segura.',
  },
  {
    id: 'faq_5',
    question: 'Tem garantia?',
    answer:
      'Sim! Você tem 7 dias de garantia incondicional blindada. Se por qualquer motivo você entrar, olhar os fornecedores e achar que não é para você, basta nos mandar uma mensagem que devolvemos 100% do valor pago sem burocracia.',
  },
];
