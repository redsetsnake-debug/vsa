import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Play } from 'lucide-react';

export default function PromoVideo() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="w-12 h-12 bg-black border-4 border-brand-yellow -rotate-12 flex items-center justify-center shadow-[4px_4px_0px_#000]">
            <Play className="text-brand-yellow fill-brand-yellow ml-0.5" size={20} />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              {t('videoSectionTitle')}
            </h2>
            <p className="text-xs uppercase font-black text-black/60 tracking-wider mt-1">
              {t('videoSectionSubtitle')}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-white border-4 border-black p-4 md:p-8 shadow-[12px_12px_0px_#000] relative"
      >
        {/* Absolute floating style element */}
        <div className="absolute -top-5 right-8 bg-[#FF8B13] text-black font-black text-xs uppercase px-4 py-1.5 border-4 border-black rotate-[2deg] select-none shadow-[2px_2px_0px_#000]">
          OFFICIAL MV
        </div>

        {/* Video Wrapper aspect-video */}
        <div className="relative aspect-video w-full rounded-none border-4 border-black overflow-hidden bg-black shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
          <iframe
            src="https://www.youtube.com/embed/97ni-WfjBOo"
            title="VS AMBIVALENZ - Official Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        {/* Video Information footer */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t-4 border-black pt-6">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black text-black leading-tight">
              {t('songTitle')}
            </h4>
            <p className="text-sm font-semibold text-black/70 mt-2">
              {t('songDesc')}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-brand-yellow text-black border-2 border-black font-black text-xs px-4 py-2 hover:bg-black hover:text-white transition-colors duration-200 uppercase select-none cursor-pointer shadow-[3px_3px_0px_#000]">
              Debut Single
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
