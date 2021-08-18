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
  episode: string[];
  url: string;
  created: string;
}
