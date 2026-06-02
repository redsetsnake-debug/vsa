import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="relative h-[440px] bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red flex items-center px-6 md:px-12 border-b-4 border-black overflow-hidden bg-brand-yellow">
      {/* Top bar with Language Selector */}
      <div className="absolute top-6 right-6 md:right-12 z-30 flex gap-2">
        <button
          onClick={() => setLanguage('ja')}
          className={`px-4 py-2 border-2 border-black font-black text-xs transition-colors duration-200 ${
            language === 'ja'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-brand-yellow'
          }`}
          style={{ transform: 'rotate(-2deg)' }}
        >
          日本語
        </button>
        <button
          onClick={() => setLanguage('zh')}
          className={`px-4 py-2 border-2 border-black font-black text-xs transition-colors duration-200 ${
            language === 'zh'
              ? 'bg-black text-white'
              : 'bg-white text-black hover:bg-brand-yellow'
          }`}
          style={{ transform: 'rotate(1deg)' }}
        >
          中文
        </button>
      </div>

      {/* Decorative Floating Square */}
      <motion.div 
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -right-8 w-48 h-48 bg-white border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.25)] flex items-center justify-center -rotate-12 select-none pointer-events-none hidden sm:flex"
      >
        <div className="text-black font-black text-center leading-none">
          <div className="text-4xl">NEW</div>
          <div className="text-sm">PROJECT</div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col">
          <span className="text-xs font-black tracking-[0.2em] text-black bg-white border-2 border-black px-3 py-1 w-fit mb-4">
            {t('originalIdol')}
          </span>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-black text-black tracking-tighter drop-shadow-[6px_6px_0px_rgba(255,255,255,1)] leading-none uppercase"
          >
            {t('heroHeading')}
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <motion.p 
              initial={{ rotate: -2, opacity: 0 }}
              animate={{ rotate: -2, opacity: 1 }}
              className="bg-white px-4 py-2 border-4 border-black font-black text-xl md:text-2xl"
            >
              {t('candidatesCount')}
            </motion.p>
            <motion.p 
              initial={{ rotate: 1, opacity: 0 }}
              animate={{ rotate: 1, opacity: 1 }}
              className="bg-black text-white px-4 py-2 border-4 border-white font-black text-xl md:text-2xl"
            >
              {t('slotsCount')}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

