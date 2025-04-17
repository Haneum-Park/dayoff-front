export type TypeRecordList = {
  [key: string]: {
    desc: string;
    memo: string;
    extra?: Record<string, string>;
    path?: string;
    route?: string;
    masking?: 'true' | 'false';
  }
}

export type TypeRecordItem = {
  title: string;
  list: TypeRecordList;
}

export type TypeAtomRecord = {
  educations: TypeRecordItem;
  careers: TypeRecordItem;
  contacts: TypeRecordItem;
  project_desc: TypeRecordItem;
  career_desc: TypeRecordItem;
  languages: TypeRecordItem;
  skills: TypeRecordItem;
  documents: TypeRecordItem;
  licenseNawards: TypeRecordItem;
  activities: TypeRecordItem;
  etc: TypeRecordItem;
}