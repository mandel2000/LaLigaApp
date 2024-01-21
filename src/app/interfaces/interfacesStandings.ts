interface RootObjectStandings {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Params;
  response: Response[];
  results: number;
}

interface ResponseStandings {
  league: League;
}

interface League {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
  standings: Standing[][];
}

interface Standing {
  all: All;
  away: All;
  description?: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: All;
  points: number;
  rank: number;
  status: string;
  team: Team;
  update: string;
}

interface Team {
  id: number;
  logo: string;
  name: string;
}

interface All {
  draw: number;
  goals: Goals;
  lose: number;
  played: number;
  win: number;
}

interface Goals {
  against: number;
  for: number;
}

interface Params {
  league: string;
  season: string;
}

interface Paging {
  current: number;
  total: number;
}