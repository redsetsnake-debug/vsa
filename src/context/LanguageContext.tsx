import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ja' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    heroHeading: 'VS AMBIVALENZ',
    candidatesCount: '14人の候補生',
    slotsCount: '最終デビュー枠は 7つ',
    meetTrainees: '候補生に会う',
    discoverStory: 'プロジェクト解説',
    theSelection: '選考オーディション',
    descriptionText: 'ひとつの名前を２人で分け合う「候補生」たち。ファン投票とパフォーマンス結果により、極限のデビュー曲を飾る最終メンバー7名が決定される。',
    voteNow: '投票する',
    slotsRemaining: '残り枠数',
    website: '公式サイト',
    twitter: '公式Twitter',
    youtube: '公式YouTube',
    originalIdol: 'オリジナル2Dアイドルプロジェクト',
    selectionLabel: 'オーディション候補生',
    statusLabel: '現在のステータス：選考受付中',
    videoSectionTitle: 'ミュージックビデオ',
    videoSectionSubtitle: 'デビュー候補生が歌う、彼らだけの物語',
    songTitle: 'デビュープロモーションMV「Go My Own Way」',
    songDesc: '14人がそれぞれの壁に立ち向かい、夢に向かって走り出す王道のアンセムソング。'
  },
  zh: {
    heroHeading: 'VS AMBIVALENZ',
    candidatesCount: '14 位备选生',
    slotsCount: '争夺最后 7 个出道席位',
    meetTrainees: '了解候选生',
    discoverStory: '企划解析',
    theSelection: '选拔企划详情',
    descriptionText: '共享同一个名字的双人身份候选生们。通过全球粉丝投票和极限制演分，决定诞生最终 7 位组合成员的终极音乐选秀。',
    voteNow: '立即投票',
    slotsRemaining: '剩余席位',
    website: '官方网站',
    twitter: '官方Twitter',
    youtube: '官方YouTube',
    originalIdol: '原创二次元偶像企划',
    selectionLabel: '企划候选人',
    statusLabel: '当前状态：选拔火热进行中',
    videoSectionTitle: '最新音乐视频',
    videoSectionSubtitle: '候选生们谱写的、属于他们的梦想故事',
    songTitle: '出道MV《Go My Own Way》',
    songDesc: '14位候选人各自直面心墙、向着梦想全力奔跑的王道赞歌。'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const langDict = translations[language];
    return (langDict as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
