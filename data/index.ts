export type Game = {
  title: string;
  box: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  minPlayers: number;
  maxPlayers: number;
  tags?: Partial<Record<Tag, true>>;
  hasAudience: boolean;
  minTypicalPlayTime?: number;
  maxTypicalPlayTime?: number;
};

export const tags = {
  cooperative: "Coop",
  drawing: "Drawing",
  trivia: "Trivia",
  writing: "Writing",
  teams: "Teams",
  deception: "Deception",
  music: "Rhythm & Music"
} as const;

export type Tag = keyof typeof tags;

export const games: Game[] = [
  {
    title: "You Don't Know Jack 2015",
    box: 1,
    minPlayers: 1,
    maxPlayers: 4,
    tags: {
      trivia: true,
    },
    hasAudience: false,
  },
  {
    title: "Drawful",
    box: 1,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      drawing: true,
    },
    hasAudience: false,
  },
  {
    title: "Word Spud",
    box: 1,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {},
    hasAudience: false,
  },
  {
    title: "Lie Swatter",
    box: 1,
    minPlayers: 1,
    maxPlayers: 100,
    tags: {},
    hasAudience: false,
  },
  {
    title: "Fibbage XL",
    box: 1,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {
      deception: true,
    },
    hasAudience: false,
  },
  {
    title: "Quiplash XL",
    box: 2,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Bidiots",
    box: 2,
    minPlayers: 3,
    maxPlayers: 6,
    tags: {
      drawing: true,
    },
    hasAudience: false,
  },
  {
    title: "Fibbage 2",
    box: 2,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {
      deception: true,
    },
    hasAudience: true,
  },
  {
    title: "Earwax",
    box: 2,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Bomb Corp",
    box: 2,
    minPlayers: 1,
    maxPlayers: 4,
    tags: {
      cooperative: true,
    },
    hasAudience: false,
  },
  {
    title: "Quiplash 2",
    box: 3,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Guesspionage",
    box: 3,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Fakin It",
    box: 3,
    minPlayers: 3,
    maxPlayers: 6,
    tags: {
      deception: true,
    },
    hasAudience: true,
  },
  {
    title: "Tee K.O.",
    box: 3,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      drawing: true,
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Trivia Murder Party",
    box: 3,
    minPlayers: 1,
    maxPlayers: 8,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "Fibbage 3",
    box: 4,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {
      deception: true,
    },
    hasAudience: true,
  },
  {
    title: "Monster Seeking Monster",
    box: 4,
    minPlayers: 3,
    maxPlayers: 7,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Survive the Internet",
    box: 4,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Bracketeering",
    box: 4,
    minPlayers: 3,
    maxPlayers: 16,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Civic Doodle",
    box: 4,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      drawing: true,
    },
    hasAudience: true,
  },
  {
    title: "Patently Stupid",
    box: 5,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      drawing: true,
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "You Don't Know Jack",
    box: 5,
    minPlayers: 1,
    maxPlayers: 8,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "Zeeple Dome",
    box: 5,
    minPlayers: 1,
    maxPlayers: 6,
    tags: {
      cooperative: true,
    },
    hasAudience: false,
  },
  {
    title: "Mad Verse City",
    box: 5,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Split the Room",
    box: 5,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Joke Boat",
    box: 6,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Trivia Murder Party 2",
    box: 6,
    minPlayers: 1,
    maxPlayers: 8,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "Push the Button",
    box: 6,
    minPlayers: 4,
    maxPlayers: 10,
    tags: {
      deception: true,
    },
    hasAudience: false,
  },
  {
    title: "Role Models",
    box: 6,
    minPlayers: 3,
    maxPlayers: 6,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Dictionarium",
    box: 6,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Quiplash 3",
    box: 7,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Devil in the Details",
    box: 7,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      cooperative: true,
    },
    hasAudience: true,
  },
  {
    title: "Talking Points",
    box: 7,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {},
    hasAudience: true,
  },
  {
    title: "Blather Round",
    box: 7,
    minPlayers: 2,
    maxPlayers: 6,
    tags: {
      cooperative: true,
    },
    hasAudience: true,
  },
  {
    title: "Champed Up",
    box: 7,
    minPlayers: 3,
    maxPlayers: 8,
    tags: {
      drawing: true,
    },
    hasAudience: true,
  },
  {
    title: "Drawful Animate",
    box: 8,
    minPlayers: 3,
    maxPlayers: 10,
    tags: {
      drawing: true,
    },
    hasAudience: true,
  },
  {
    title: "Poll Mine",
    box: 8,
    minPlayers: 2,
    maxPlayers: 10,
    tags: {
      teams: true,
    },
    hasAudience: true,
  },
  {
    title: "Job Job",
    box: 8,
    minPlayers: 3,
    maxPlayers: 10,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "The Weapons Drawn",
    box: 8,
    minPlayers: 4,
    maxPlayers: 8,
    tags: {
      deception: true,
      drawing: true,
    },
    hasAudience: true,
  },
  {
    title: "Wheel of Enormous Proportions",
    box: 8,
    minPlayers: 2,
    maxPlayers: 8,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "Roomerang",
    box: 9,
    minPlayers: 4,
    maxPlayers: 9,
    tags: {
      writing: true,
    },
    hasAudience: true,
    minTypicalPlayTime: 25,
    maxTypicalPlayTime: 35,
  },
  {
    title: "Junktopia",
    box: 9,
    minPlayers: 3,
    maxPlayers: 8,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 25,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Nonsensory",
    box: 9,
    minPlayers: 3,
    maxPlayers: 8,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 25,
    tags: {
      writing: true,
    },
    hasAudience: true,
  },
  {
    title: "Fibbage 4",
    box: 9,
    minPlayers: 2,
    maxPlayers: 8,
    minTypicalPlayTime: 20,
    maxTypicalPlayTime: 20,
    tags: {
      deception: true,
    },
    hasAudience: true,
  },
  {
    title: "Quixort",
    box: 9,
    minPlayers: 1,
    maxPlayers: 10,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 20,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "Tee K.O. 2",
    box: 10,
    minPlayers: 3,
    maxPlayers: 8,
    minTypicalPlayTime: 20,
    maxTypicalPlayTime: 20,
    tags: {
      drawing: true,
      writing: true
    },
    hasAudience: true,
  },
  {
    title: "Timejinx",
    box: 10,
    minPlayers: 1,
    maxPlayers: 8,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 20,
    tags: {
      trivia: true,
    },
    hasAudience: true,
  },
  {
    title: "FixyText",
    box: 10,
    minPlayers: 3,
    maxPlayers: 8,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 20,
    tags: {
      teams: true,
    },
    hasAudience: true,
  },
  {
    title: "Dodo Re Mi",
    box: 10,
    minPlayers: 1,
    maxPlayers: 9,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 25,
    tags: {
      music: true
    },
    hasAudience: true,
  },
  {
    title: "Hypnotorious",
    box: 10,
    minPlayers: 4,
    maxPlayers: 8,
    minTypicalPlayTime: 15,
    maxTypicalPlayTime: 25,
    tags: {
      teams: true,
    },
    hasAudience: true,
  },
];
