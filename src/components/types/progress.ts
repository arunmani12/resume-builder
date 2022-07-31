export interface UserAddress {
  name: string;
  value: string;
  icon: boolean;
}

export interface UserSkills {
  skill: string;
  score: string;
}

export interface UserEducation {
  educationInstitue: string;
  degree: string;
  startYear: string;
  endYear: string;
}

export interface UserObject {
  address: UserAddress[];
  skills: UserSkills[];
  education: UserEducation[];
  about: string;
  firstName: string;
  lastName: string;
  position: string;
}
