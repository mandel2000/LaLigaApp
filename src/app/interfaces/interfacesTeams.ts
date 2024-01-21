export interface RootObject {
  errors: any[];
  get: string;
  paging: Paging;
  parameters: Params;
  response: TeamResponse[];
  results: number;
}

export interface TeamResponse {
  team: Team;
  venue: Venue;
}

export interface Venue {
  address: string;
  capacity: number;
  city: string;
  id: number;
  image: string;
  name: string;
  surface: string;
}

export interface Team {
  code: string;
  country: string;
  founded: number;
  id: number;
  logo: string;
  name: string;
  national: boolean;
}

interface Params {
  league: string;
  season: string;
}

interface Paging {
  current: number;
  total: number;
}

interface RootObjectPlayers {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

interface Response {
  player: Player;
  statistics: Statistic[];
}

interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

interface Penalty {
  won?: any;
  commited?: any;
  scored?: (null | number)[];
  missed?: (null | number)[];
  saved?: (null | number)[];
}

interface Cards {
  yellow?: null | number | number;
  yellowred?: null | number | number;
  red?: null | number | number;
}

interface Fouls {
  drawn?: (null | number)[];
  committed?: (null | number)[];
}

interface Dribbles {
  attempts?: (null | number)[];
  success?: (null | number)[];
  past?: any;
}

interface Duels {
  total?: (null | number)[];
  won?: (null | number)[];
}

interface Tackles {
  total?: (null | number)[];
  blocks?: (null | number)[];
  interceptions?: (null | number)[];
}

interface Passes {
  total?: (null | number)[];
  key?: (null | number)[];
  accuracy?: (null | number)[];
}

interface Goals {
  total?: null | number | number;
  conceded?: (null | number)[];
  assists?: (null | number)[];
  saves?: any;
}

interface Shots {
  total?: (null | number)[];
  on?: (null | number)[];
}

interface Substitutes {
  in?: null | number | number;
  out?: null | number | number;
  bench?: null | number | number;
}

interface Games {
  appearences?: null | number | number;
  lineups?: null | number | number;
  minutes?: null | number | number;
  number?: any;
  position: string;
  rating?: (null | string)[];
  captain: boolean;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag?: null | string | string;
  season: number;
}

interface TeamInfo {
  id: number;
  name: string;
  logo: string;
}

interface Player {
  id: number;
  name: string;
  firstname?: string;
  lastname?: string;
  age: number;
  birth: Birth;
  nationality?: string;
  height?: string;
  weight?: string;
  injured: boolean;
  photo: string;
}

interface Birth {
  date?: string;
  place?: string;
  country?: string;
}

interface Paging {
  current: number;
  total: number;
}

interface Parameters {
  team: string;
  season: string;
}