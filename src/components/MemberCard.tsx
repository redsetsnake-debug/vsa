import { motion } from 'motion/react';
import { Member } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  member: Member;
  isRival?: boolean;
}

export default function MemberCard({ member, isRival }: Props) {
  const { language, t } = useLanguage();

  // Create a slight rotation effect based on member id string length
  const rotationDegrees = (member.id.length % 2 === 0) ? 'rotate-6' : '-rotate-6';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="relative group bg-white border-4 border-black p-6 h-full shadow-[8px_8px_0px_#000] flex flex-col justify-between overflow-visible"
    >
      <div className="flex justify-between items-start gap-4 mb-6 relative z-10">
        <div className="flex-1">
          <h3 className="text-4xl font-black tracking-tighter uppercase leading-none" style={{ color: member.color }}>
            {member.name}
          </h3>
          <p className="text-sm font-bold text-black mt-1 opacity-60 italic">{member.kanji}</p>
          
          {isRival && (
            <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest mt-2 w-fit">
              {t('selectionLabel')}
            </div>
          )}
        </div>

        {/* Polaroid ID Photo pinned with Thumbtack */}
        <div className={`relative w-24 bg-white border-2 border-black p-1.5 pb-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] ${rotationDegrees} transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0 flex-shrink-0 mt-2 mr-2`}>
          {/* The Thumbtack (Pin) with representation color */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            {/* Pin head */}
            <div 
              className="w-4 h-4 rounded-full border-2 border-black shadow-[1px_2px_2px_rgba(0,0,0,0.3)] relative"
              style={{ backgroundColor: member.color }}
            >
              {/* Highlight shine reflection */}
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/60 rounded-full" />
            </div>
            {/* Small shadow/pin point base representer */}
            <div className="w-1 h-1 bg-black/40 rounded-full -mt-0.5" />
          </div>

          {/* Photo area with color background matching team */}
          <div className={`w-full aspect-square border-2 border-black flex items-center justify-center text-3xl select-none bg-gradient-to-br ${member.bgGradient} bg-opacity-20`}>
            {member.avatarIcon}
          </div>

          {/* Polaroid handwritten caption */}
          <div className="text-center mt-1.5">
            <span className="text-[10px] font-mono font-black uppercase tracking-tighter text-black/80">
              {member.name}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto relative z-10">
        <div className="mb-4">
          <span className="inline-block bg-brand-yellow px-2 py-0.5 border-2 border-black text-[10px] font-black uppercase tracking-tighter">
            {member.catchphrase[language]}
          </span>
        </div>
        <p className="text-sm font-medium text-black leading-tight border-l-4 border-black pl-4">
          {member.description[language]}
        </p>
      </div>

      {/* Dynamic Background Accent */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none z-0"
        style={{ backgroundColor: member.color, clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
    </motion.div>
  );
}
