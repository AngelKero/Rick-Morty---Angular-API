import { Episode } from "./episode";

export interface Character {
  id: number;
  name:	string;
  status:	'Alive' | 'Dead' | 'unknown';
  species: string;
  type:	string;
  gender:	'Female' | 'Male' | 'Genderless' | 'unknown';
  origin:	any;
  location:	any;
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}
