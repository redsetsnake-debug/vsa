export interface MultilingualText {
  ja: string;
  zh: string;
}

export interface Member {
  id: string;
  name: string;
  kanji: string;
  color: string;
  bgGradient: string;
  description: MultilingualText;
  catchphrase: MultilingualText;
  avatarIcon: string;
}

export interface Pair {
  id: number;
  members: [Member, Member];
}

