export type TypeProfileDesc = {
  [key: string]: {
    text?: string;
    focus?: string;
  }
}

export type TypeProfileInfo = {
  name: string;
  address: string;
  job: string;
  dob: string;
}

export type TypeAtomProfile = {
  info: TypeProfileInfo;
  desc: TypeProfileDesc;
}