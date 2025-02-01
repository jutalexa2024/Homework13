// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
  login: string;
  name?: string;
  avatar_url: string;
  bio?: string;
  followers: number;
  following: number;
  html_url: string;
}


