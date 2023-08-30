export interface Character {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  status: string;
}

export interface DataList {
  data: Character[]
  pages: number
}
