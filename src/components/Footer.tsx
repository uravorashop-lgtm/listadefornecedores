import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="page-footer" className="mt-16 py-12 px-4 border-t border-purple-100/80 bg-white/60 text-center text-xs text-slate-500">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-purple-700" />
            <span>Compra 100% Segura</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
            <span>Acesso Imediato</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="max-w-xl text-[11px] text-slate-400 leading-relaxed">
          Este site não possui vínculo institucional com o WhatsApp ou marcas mencionadas. As marcas registradas pertencem aos seus respectivos proprietários. Lista VIP de fornecedores diretos para uso pessoal e revenda.
        </p>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400">
          © {currentYear} Lista VIP de Fornecedores de Luxo · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
