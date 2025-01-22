export interface Card {
    id: number;
    title1?: string;
    title2?: string;
    year?: string;
    paragrahe?: string;
    lien?: string | null;
    github?: string;
    img?: string;
  }

  export interface CardStates {
    [key: string]: {
      scale: number;
      opacity: number;
      y: number;
      transition: { duration: number };
      width?: string;
      rotateX?: number;
    };
  }