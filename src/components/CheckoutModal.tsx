import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Lock,
  QrCode,
  CreditCard,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Settings,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [pixCopied, setPixCopied] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState(() => {
    return localStorage.getItem('vip_lista_custom_checkout_url') || '';
  });
  const [showConfigUrl, setShowConfigUrl] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(
      '00020126580014br.gov.bcb.pix0136lista-vip-fornecedores-luxo-3790520400005303986540537.905802BR5925LISTA VIP FORNECEDORES6009SAO PAULO62070503***6304E8A9'
    );
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2500);
  };

  const handleSimulatePayment = () => {
    setPaymentSuccess(true);
  };

  const handleSaveCheckoutUrl = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('vip_lista_custom_checkout_url', customCheckoutUrl);
    setShowConfigUrl(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-purple-950/60 backdrop-blur-xs overflow-y-auto">
      <div
        id="checkout-modal-container"
        className="bg-white rounded-3xl w-full max-w-lg max-h-[92vh] overflow-hidden shadow-2xl border border-purple-100 flex flex-col animate-in fade-in zoom-in-95 duration-200 my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-purple-50/80 border-b border-purple-100 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-purple-950 uppercase tracking-wider">
              Checkout Seguro · Lista VIP
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowConfigUrl(!showConfigUrl)}
              title="Configurar Link de Checkout Externo (Kiwify, Hotmart, etc.)"
              className="p-1.5 text-purple-600 hover:text-purple-900 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Custom URL config banner (if opened) */}
        {showConfigUrl && (
          <form
            onSubmit={handleSaveCheckoutUrl}
            className="p-3 sm:p-4 bg-purple-100/70 border-b border-purple-200 text-xs flex flex-col gap-2 shrink-0"
          >
            <label className="font-semibold text-purple-900">
              Link de Checkout Externo (Opcional):
            </label>
            <p className="text-[11px] text-purple-700">
              Se você tem um link da Kiwify, Hotmart, Greenn, etc., cole aqui para redirecionar direto:
            </p>
            <div className="flex gap-2">
              <input
                type="url"
                placeholder="https://pay.kiwify.com.br/..."
                value={customCheckoutUrl}
                onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                className="flex-1 bg-white border border-purple-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 outline-none focus:border-purple-600"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-purple-800 text-white rounded-lg font-bold text-xs hover:bg-purple-700 cursor-pointer"
              >
                Salvar
              </button>
            </div>
          </form>
        )}

        {/* Modal Content - scrollable body */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
        {paymentSuccess ? (
          <div className="py-6 px-2 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Pagamento Aprovado com Sucesso!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm">
              Seu acesso à <strong>Lista Oculta de Fornecedores de Luxo (+50 contatos)</strong> foi liberado. Verifique a caixa de entrada do seu e-mail cadastrado.
            </p>
            <button
              onClick={onClose}
              className="w-full mt-2 py-3.5 px-6 bg-purple-900 text-white font-bold text-sm rounded-xl hover:bg-purple-800 transition-all cursor-pointer"
            >
              Fechar e Acessar Lista
            </button>
          </div>
        ) : (
          <div>
            {/* Offer Summary Bar */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-slate-900 block">
                  Acesso Completo à Lista VIP (+50 Fornecedores)
                </span>
                <span className="text-[11px] text-purple-700 font-medium">
                  Uso pessoal ou revenda · Acesso vitalício
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 line-through block">
                  R$ 497
                </span>
                <span className="text-lg font-black text-emerald-600">
                  R$ 37,90
                </span>
              </div>
            </div>

            {/* External Checkout Button if configured */}
            {customCheckoutUrl && (
              <a
                href={customCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mb-4 py-3.5 px-4 bg-purple-900 hover:bg-purple-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Ir para Checkout Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'bg-white text-purple-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pix (Imediato)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-white text-purple-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 text-purple-600" />
                <span>Cartão de Crédito</span>
              </button>
            </div>

            {paymentMethod === 'pix' ? (
              <div className="flex flex-col items-center text-center gap-3">
                {/* QR Code Graphic */}
                <div className="w-36 h-36 p-2 rounded-2xl bg-white border-2 border-purple-100 shadow-inner flex items-center justify-center">
                  <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-2 text-slate-700">
                    <QrCode className="w-16 h-16 text-slate-800 stroke-[1.8]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-purple-800 mt-1">
                      Pix R$ 37,90
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Escaneie o QR Code acima no app do seu banco ou use a chave Copia e Cola:
                </p>

                {/* Copia e Cola button */}
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="w-full py-2.5 px-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl text-xs font-bold text-purple-900 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {pixCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Código Pix Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-purple-700" />
                      <span>Copiar Chave Pix Copia e Cola</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-full shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>Confirmar Pagamento e Liberar Acesso</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Nome Impresso no Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="Como no cartão"
                    className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-xl p-2.5 outline-none focus:border-purple-600"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  className="w-full mt-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-full shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Pagar R$ 37,90 com Cartão</span>
                </button>
              </div>
            )}

            {/* Guarantee footer */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-purple-700" /> Criptografia 256 bits
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" /> Garantia 7 Dias
              </span>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
