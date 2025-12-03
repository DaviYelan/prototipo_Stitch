import React from 'react';

const Wallet: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-4">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Mi Billetera</h1>
            <p className="text-slate-500 dark:text-[#ad92c9] text-base font-normal leading-normal">Gestiona tus fondos de forma segura y sencilla.</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 rounded-2xl p-6 md:p-8 border bg-surface-light dark:bg-surface-dark border-gray-200 dark:border-border-dark shadow-sm">
                <p className="text-slate-600 dark:text-white/80 text-base font-medium leading-normal">Saldo Total</p>
                <p className="text-slate-900 dark:text-white tracking-light text-4xl font-bold leading-tight">$1,250.75</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl p-6 md:p-8 border bg-surface-light dark:bg-surface-dark border-gray-200 dark:border-border-dark shadow-sm">
                <p className="text-slate-600 dark:text-white/80 text-base font-medium leading-normal">Saldo de Bono</p>
                <p className="text-slate-900 dark:text-white tracking-light text-4xl font-bold leading-tight">$200.00</p>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full">
             {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-border-dark mb-8">
                <div className="flex gap-4 sm:gap-8 overflow-x-auto">
                    <button className="flex items-center justify-center border-b-[3px] border-b-primary text-primary dark:text-white gap-2 pb-3 pt-2 px-2 whitespace-nowrap">
                        <span className="material-symbols-outlined text-2xl fill" style={{fontVariationSettings: "'FILL' 1"}}>add_card</span>
                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Depositar</p>
                    </button>
                    <button className="flex items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-[#ad92c9] hover:text-primary dark:hover:text-white gap-2 pb-3 pt-2 px-2 whitespace-nowrap transition-colors">
                        <span className="material-symbols-outlined text-2xl">upload</span>
                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Retirar</p>
                    </button>
                    <button className="flex items-center justify-center border-b-[3px] border-b-transparent text-slate-500 dark:text-[#ad92c9] hover:text-primary dark:hover:text-white gap-2 pb-3 pt-2 px-2 whitespace-nowrap transition-colors">
                        <span className="material-symbols-outlined text-2xl">history</span>
                        <p className="text-sm font-bold leading-normal tracking-[0.015em]">Historial</p>
                    </button>
                </div>
            </div>

            {/* Deposit Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Payment Methods */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div>
                        <h3 className="text-slate-800 dark:text-white text-lg font-bold mb-4">Selecciona un método de pago</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                             <PaymentMethodCard name="Visa" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDRE2ozM_8zZMoCcS3i6z632h_V-gjyzHEamwP9_IG7FZKuFspmPqIy6TjH5HEStv69asneYw6GR1So7x_pt5hlaHvIpZoumRHSONmqWKHsqUUoYnAYEMGA9xpFRw8-mCYE-ugACpNlvH9Zycy-VDLL4RKbnu8IvstjIJVvmvACOIjpDWkHWo671kHAVSCs6XzTSjZ2IP_759mMiTaEcJDyPe85qU-21-FQfKLSWcGIx3-vxldGPvELauJzqA8hCt1nsfHMXrB80LK1" active />
                             <PaymentMethodCard name="Mastercard" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuCyfTZIRKA2IKJSq9EAOPmkFP-tgFA2ONZe5UTu_IzPg2X4aQO0RNpSbPErVjOgdVO-t2kuxiNO_cpMbRWP47eUhXf6Aq5_TEFDxCDqJBCLAjjVREY5jXWe_rdwu8wGcWMRAFiUZYVdK7hJ0oydq1Hy-xL8XOXa_SmGgiDaJrgFfnKgSOdGPGVemA8Kqur28GSmUMZy8WFPIdSHx2SIBWmOrzn_b0yjOtW64jqSEf85zRb45TwQ35Ma0jIkNnNyGwfNPbaQGyDLCe-v" />
                             <PaymentMethodCard name="PayPal" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2jlYA9i-MB8K7qZ17oRm4dwbvuMmjFsku0W10AytxW4QzuyHCS2JCf-Ntp0JWeXeXDFdoZZq-0Hr0LzddXaBWWC6i-BTBmyPvFJT7ZTRy6eF_ROEN8VotImxI0gy_GMQfnqMr7u_MHX4c-4IuAovVZkJWPWYCVmPbdwfPS9yqWDpCEv-LhZly9M_lF5XG-0bk-Y6Aoehk2L5TM-OJfUhf-w_5oJjlYkK3wkSLysdS5QZorFToTnRSC6NEII3332_OU5YfyZLYCst" />
                             <PaymentMethodCard name="Skrill" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuCoaykMA2P-8Ib9TuOjdjlssm5vzeiFMwEMhXp7aZS2QiVfScXWHjbKSCCibl0isOdPkXIEq0WmpacPOr_rutoe30iM20DLdzFb4I17xtpyyZ3olHq97mG2xw9-KfAFiUz5FX2eNallqkXV3DIEjbf4YHRECgHotVuwXXgiCF_lFDLBzO0R_mHbbHjE6P2AJBNJpTFS3lrjz73AZ4GnbKKPhx3XHBO1Af44aH3N6l7GrXfhCOqKzddexcmRPFQe1veL46fufh89QQFU" />
                             <PaymentMethodCard name="Neteller" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDcDDjP-0FXCYNQz1kTx3a7loPNY3GIG_aX7ViPJKVghJjYqFDQ550pyOWKtPrZ4hsXO5IoRHtJCxLD0KM6Fw1lm17DPxXixMxhlcOZWawGXGiXNV23vOGvSJZIODSVPeV6ziDOYqb4Zez4IGWRjhZBVEaorqehBHhnq62Gw8MljCQp3PhkyAlvuU6lWmLMk1d8xmlE2MsocNN6x4WQ2VGiE_P6-zlHR6zViPFiF1FqNKXPOUhybKR_MVUYkHhNL7SJeM77dAnPrVfe" />
                             <PaymentMethodCard name="Crypto" icon="https://lh3.googleusercontent.com/aida-public/AB6AXuBHgT6jRJ1115RqDbpO7cbcrIVg6PhQabg-EZzlDBysZJ2GFJrlwWdHmitm4hsS0-d4NKlC1TATIuek0-CCX8txysBHl6gAjtTlqUGO_pOs6Xyz6BdulVdG0fr1OPRJEXz2KRJ7mo0l6kTNzyZZxcoSqTcdIt_ykwudMNX7lctEqqSN_GPvPCzRnSOY9JRwh7JF5cN9QrWZIj5gCAdWem82QJq7sjlcvw0lYcXF8f-Vf0ULNQzoNwd6xEDzInKve7nLD6qYAGLsXYYO" />
                        </div>
                    </div>
                </div>

                {/* Deposit Details Form */}
                <div className="lg:col-span-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-border-dark p-6 flex flex-col h-full shadow-sm">
                    <h3 className="text-slate-800 dark:text-white text-lg font-bold mb-6">Detalles del Depósito</h3>
                    <form className="flex flex-col gap-6 h-full">
                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2" htmlFor="amount">Monto</label>
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 dark:text-white/50">$</span>
                                <input className="block w-full rounded-lg border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark py-3 pl-7 pr-12 text-slate-900 dark:text-white focus:ring-2 focus:ring-inset focus:ring-primary focus:border-primary" id="amount" type="text" defaultValue="100.00"/>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className="text-slate-500 dark:text-white/50 text-sm font-medium">USD</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <AmountButton label="$25" />
                            <AmountButton label="$50" />
                            <AmountButton label="$100" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-600 dark:text-white/80 mb-2" htmlFor="promo">Código Promocional (Opcional)</label>
                            <input className="block w-full rounded-lg border-gray-300 dark:border-border-dark bg-background-light dark:bg-background-dark py-3 px-3 text-slate-900 dark:text-white focus:ring-2 focus:ring-inset focus:ring-primary focus:border-primary placeholder:text-gray-400" id="promo" placeholder="Ej: BIENVENIDO100" type="text"/>
                        </div>

                        <div className="flex-grow min-h-[2rem]"></div>

                        <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" type="submit">
                            <span className="truncate">Depositar Ahora</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const PaymentMethodCard: React.FC<{name: string; icon: string; active?: boolean}> = ({ name, icon, active }) => (
    <button type="button" className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-200 ${active ? 'border-2 border-primary bg-primary/5 dark:bg-primary/20' : 'border-gray-200 dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary dark:hover:border-primary'}`}>
        <img className="h-8 object-contain" src={icon} alt={`${name} Logo`} />
        <span className={`text-sm font-medium ${active ? 'text-primary dark:text-white' : 'text-slate-700 dark:text-white/80'}`}>{name}</span>
    </button>
);

const AmountButton: React.FC<{label: string}> = ({ label }) => (
    <button className="rounded-lg bg-background-light dark:bg-background-dark py-2.5 text-sm font-semibold text-slate-800 dark:text-white/80 border border-gray-200 dark:border-border-dark hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-white transition-colors" type="button">
        {label}
    </button>
);

export default Wallet;