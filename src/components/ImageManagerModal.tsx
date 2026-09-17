import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Check, Trash2, ExternalLink, Sparkles } from 'lucide-react';
import { useImages } from '../context/ImageContext';

const SLOT_LABELS: Record<string, { title: string; category: string; hint: string }> = {
  hero_main: {
    title: 'Foto Principal do Hero',
    category: 'Showcase Inicial',
    hint: 'Foto de caixas, sacolas e bolsas de luxo (ex: Chanel, Hermès, Coach)',
  },
  prod_bolsa: {
    title: 'Bolsa - R$ 40',
    category: 'Preços da Lista',
    hint: 'Foto de bolsa de mão ou ombro estilosa',
  },
  prod_joias: {
    title: 'Joias e relógios - R$ 80',
    category: 'Preços da Lista',
    hint: 'Foto de joias, colares, pulseiras ou relógios elegantes',
  },
  prod_perfumes: {
    title: 'Perfumes Importados - R$ 90',
    category: 'Preços da Lista',
    hint: 'Foto de frascos de perfumes importados clássicos',
  },
  supplier_showcase: {
    title: 'Fornecedor Real / Pacotes & Pedidos',
    category: 'Prova de Atendimento',
    hint: 'Foto de estoque, caixas empacotadas ou atendimento real no WhatsApp',
  },
  feedback_1: {
    title: 'Print 01: Bolsa mais hypada (Coach/C)',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de mensagem de cliente satisfeita',
  },
  feedback_2: {
    title: 'Print 02: Relógio Diesel',
    category: 'Depoimentos WhatsApp',
    hint: 'Print com foto de relógio recebido e preço baixo',
  },
  feedback_3: {
    title: 'Print 03: Bolsa LV Monograma',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de bolsa recebida com acabamento perfeito',
  },
  feedback_4: {
    title: 'Print 04: Bolsa Miu Miu',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de cliente elogiando qualidade primeira linha',
  },
  feedback_5: {
    title: 'Print 05: Bolsas Chanel',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de aluna elogiando acabamento do fornecedor',
  },
  feedback_6: {
    title: 'Print 06: Carteira LV Europa',
    category: 'Depoimentos WhatsApp',
    hint: 'Print comparando preço pago vs preço europeu',
  },
  feedback_7: {
    title: 'Print 07: Joias e Relógio',
    category: 'Depoimentos WhatsApp',
    hint: 'Print com relógio brilhante e pulseiras',
  },
  feedback_8: {
    title: 'Print 08: Relógio Aline Brasil',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de foto de relógio recebido com elogio',
  },
  feedback_9: {
    title: 'Print 09: Grupo Alunas Ticiane',
    category: 'Depoimentos WhatsApp',
    hint: 'Print de mensagem no grupo VIP',
  },
  feedback_10: {
    title: 'Print 10: Aluno Bruno',
    category: 'Depoimentos WhatsApp',
    hint: 'Print com feedback de fornecedor de óculos e lista',
  },
};

// High-definition luxury sample image URLs for one-click testing
const LUXURY_SAMPLE_IMAGES: Record<string, string> = {
  hero_main: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
  prod_bolsa: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
  prod_joias: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  prod_perfumes: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
  supplier_showcase: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
  feedback_1: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
  feedback_2: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
  feedback_3: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=600&q=80',
  feedback_4: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  feedback_5: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80',
  feedback_6: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
  feedback_7: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80',
  feedback_8: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
  feedback_9: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80',
  feedback_10: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
};

export const ImageManagerModal: React.FC = () => {
  const { images, setImageUrl, bulkSetImages, activeModalSlot, closeModal } = useImages();
  const [selectedSlot, setSelectedSlot] = useState<string>('hero_main');
  const [inputUrl, setInputUrl] = useState<string>('');
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  useEffect(() => {
    if (activeModalSlot) {
      setSelectedSlot(activeModalSlot);
      setInputUrl(images[activeModalSlot] || '');
      setViewMode('single');
    }
  }, [activeModalSlot, images]);

  if (!activeModalSlot) return null;

  const currentInfo = SLOT_LABELS[selectedSlot] || {
    title: selectedSlot,
    category: 'Imagem',
    hint: '',
  };

  const handleSaveCurrent = () => {
    setImageUrl(selectedSlot, inputUrl);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const handleClearCurrent = () => {
    setImageUrl(selectedSlot, '');
    setInputUrl('');
  };

  const handleApplyLuxuryDemos = () => {
    bulkSetImages(LUXURY_SAMPLE_IMAGES);
    setInputUrl(LUXURY_SAMPLE_IMAGES[selectedSlot] || '');
  };

  const handleResetAllToPlaceholders = () => {
    const emptyAll: Record<string, string> = {};
    Object.keys(SLOT_LABELS).forEach((key) => {
      emptyAll[key] = '';
    });
    bulkSetImages(emptyAll);
    setInputUrl('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-purple-950/40 backdrop-blur-xs">
      <div
        id="image-manager-modal"
        className="bg-white rounded-3xl w-full max-w-xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-purple-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-purple-100 bg-purple-50/50 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Gerenciador de Fotos
              </h4>
              <p className="text-[10px] sm:text-[11px] text-purple-700">
                Adicione ou altere os links das imagens da página
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full hover:bg-purple-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* View mode toggle */}
        <div className="flex border-b border-purple-100 px-4 sm:px-6 py-2 bg-white gap-2 text-xs shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('single')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer text-xs ${
              viewMode === 'single'
                ? 'bg-purple-100 text-purple-900 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Editar Esta Foto
          </button>
          <button
            type="button"
            onClick={() => setViewMode('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer text-xs ${
              viewMode === 'all'
                ? 'bg-purple-100 text-purple-900 font-semibold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Ver Todas ({Object.keys(SLOT_LABELS).length})
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {viewMode === 'single' ? (
            <div className="flex flex-col gap-4">
              {/* Slot selector dropdown */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Espaço da Imagem
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => {
                    const newSlot = e.target.value;
                    setSelectedSlot(newSlot);
                    setInputUrl(images[newSlot] || '');
                  }}
                  className="w-full text-xs font-medium text-slate-800 bg-purple-50/40 border border-purple-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500"
                >
                  {Object.entries(SLOT_LABELS).map(([key, info]) => (
                    <option key={key} value={key}>
                      [{info.category}] {info.title}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1 italic">
                  💡 {currentInfo.hint}
                </p>
              </div>

              {/* URL Input */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Link direto da Imagem (URL)
                </label>
                <input
                  type="url"
                  placeholder="https://exemplo.com/minha-imagem.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full text-xs text-slate-800 bg-white border border-purple-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200/50 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Live Preview Box */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-700">Prévia</span>
                <div className="w-full h-44 rounded-2xl bg-purple-50/40 border-2 border-dashed border-purple-200 flex items-center justify-center overflow-hidden">
                  {inputUrl ? (
                    <img
                      src={inputUrl}
                      alt="Prévia"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={() => {}}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-purple-400 text-xs">
                      <ImageIcon className="w-8 h-8 stroke-[1.5]" />
                      <span>Sem imagem configurada (ícone de quadrado exibido)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClearCurrent}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Deixar Ícone Quadrado
                </button>

                <button
                  type="button"
                  onClick={handleSaveCurrent}
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-600 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Salvo com sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Salvar Foto</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* All slots listing */
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-700">
                  Status de todas as fotos ({Object.keys(SLOT_LABELS).length} espaços)
                </span>
                <button
                  type="button"
                  onClick={handleResetAllToPlaceholders}
                  className="text-[11px] text-rose-600 hover:underline font-medium"
                >
                  Limpar todas
                </button>
              </div>

              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {Object.entries(SLOT_LABELS).map(([key, info]) => {
                  const url = images[key] || '';
                  return (
                    <div
                      key={key}
                      className="p-2.5 rounded-xl border border-purple-100 bg-purple-50/30 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-9 h-9 rounded-lg bg-white border border-purple-200 flex items-center justify-center shrink-0 overflow-hidden">
                          {url ? (
                            <img src={url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          ) : (
                            <ImageIcon className="w-4 h-4 text-purple-400" />
                          )}
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-semibold text-slate-800 truncate">
                            {info.title}
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            {url ? url : 'Ícone de quadrado padrão'}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSlot(key);
                          setInputUrl(images[key] || '');
                          setViewMode('single');
                        }}
                        className="text-[11px] font-semibold text-purple-700 bg-white px-2.5 py-1 rounded-lg border border-purple-200 hover:bg-purple-100 transition-colors shrink-0 cursor-pointer"
                      >
                        {url ? 'Alterar' : '+ Inserir'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with 1-click test fill */}
        <div className="px-4 sm:px-6 py-3 border-t border-purple-100 bg-purple-50/40 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <button
            type="button"
            onClick={handleApplyLuxuryDemos}
            className="text-[11px] text-purple-700 font-semibold hover:text-purple-900 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Preencher fotos exemplo</span>
          </button>

          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer ml-auto"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
