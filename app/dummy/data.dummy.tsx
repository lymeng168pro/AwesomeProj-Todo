export interface IGender {
  key: number;
  name: string;
}

export const GENDER_OBJ = {
  MALE: { key: 1, name: 'Male' },
  FEMALE: { key: 2, name: 'Female' },
} as const;

export const GENDER_ARR: IGender[] = Object.values(GENDER_OBJ) as IGender[];
