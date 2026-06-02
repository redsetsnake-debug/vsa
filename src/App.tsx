import Hero from './components/Hero';
import PairSection from './components/PairSection';
import PromoVideo from './components/PromoVideo';
import FloatingConfetti from './components/FloatingConfetti';
import { VSAMB_DATA } from './data';
import { motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen dotted-bg relative overflow-x-hidden">
      <FloatingConfetti />
      <Hero />

      <main id="members" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-12 bg-black border-4 border-white rotate-12 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl">?</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter uppercase">
              {t('theSelection')}
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black font-bold text-lg max-w-2xl leading-tight border-l-8 border-brand-yellow pl-6"
          >
            {t('descriptionText')}
          </motion.p>
        </div>

        <div className="space-y-0">
          {VSAMB_DATA.map((pair) => (
            <div key={pair.id}>
              <PairSection pair={pair} />
            </div>
          ))}
        </div>
      </main>

      <PromoVideo />

      <footer className="bg-black text-white py-16 border-t-8 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="z-10 bg-black">
            <h3 className="text-4xl font-black tracking-tighter mb-2 italic">{t('heroHeading')}</h3>
            <div className="flex gap-4">
               <span className="bg-white text-black px-2 py-0.5 text-[10px] font-black uppercase rotate-[-2deg]">{t('candidatesCount')}</span>
               <span className="bg-brand-yellow text-black px-2 py-0.5 text-[10px] font-black uppercase rotate-[1deg]">{t('slotsRemaining')}: 7</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-[0.2em]">
            <span className="hover:text-brand-yellow cursor-pointer underline decoration-4 underline-offset-4">{t('website')}</span>
            <span className="hover:text-brand-yellow cursor-pointer underline decoration-4 underline-offset-4">{t('twitter')}</span>
            <span className="hover:text-brand-yellow cursor-pointer underline decoration-4 underline-offset-4">{t('youtube')}</span>
          </div>

          <div className="text-right z-10 bg-black">
            <p className="text-[10px] font-black text-brand-yellow uppercase tracking-widest mb-1">{t('statusLabel')}</p>
            <button className="bg-white text-black px-6 py-2 border-2 border-brand-yellow font-black text-sm hover:bg-brand-yellow transition-colors">
              {t('voteNow')}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}


