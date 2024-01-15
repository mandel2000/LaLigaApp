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