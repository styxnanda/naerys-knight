export interface CharacterObject {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}

export interface CharactersApiOutput {
  totalPages: number;
  characters: Array<CharacterObject>;
}

export interface PairingApiOutput {
  success_code: string;
  pairing_url: string;
}

export interface PairingApiRequestBody {
  name: string;
}
