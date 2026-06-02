import { Pair } from '../types';
import MemberCard from './MemberCard';

export default function PairSection({ pair }: { pair: Pair }) {
  return (
    <div className="py-16 border-b-4 border-black/10 last:border-0 relative">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-2 flex-1 bg-black" />
        <span className="text-sm font-black tracking-[0.4em] text-black uppercase bg-brand-yellow px-4 py-1 border-2 border-black rotate-[-1deg]">
          PAIR 0{pair.id}
        </span>
        <div className="h-2 flex-1 bg-black" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative">
        <MemberCard member={pair.members[0]} isRival />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
           <div className="w-16 h-16 bg-white border-4 border-black rotate-45 flex items-center justify-center shadow-[4px_4px_0px_#000]">
             <span className="text-2xl font-black text-black -rotate-45">VS</span>
           </div>
        </div>

        {/* Mobile Spacer */}
        <div className="md:hidden flex justify-center py-4">
          <div className="w-12 h-12 bg-white border-4 border-black rotate-45 flex items-center justify-center shadow-[4px_4px_0px_#000]">
             <span className="text-xl font-black text-black -rotate-45">VS</span>
           </div>
        </div>

        <MemberCard member={pair.members[1]} isRival />
      </div>
    </div>
  );
}
