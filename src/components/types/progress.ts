export interface UserAddress {
  name: string;
  value: string;
  icon: string;
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

export interface UserExperience{
  posisitonName:string
  companyName:string
  durination:string
}

export interface UserProject{
  name:string
  about:string
}

export interface UserObject {
  address: UserAddress[];
  skills: UserSkills[];
  education: UserEducation[];
  experience:UserExperience[];
  project:UserProject[]
  about: string;
  firstName: string;
  lastName: string;
  position: string;
}

export type Name = "address" | "skills" | "education" | "experience" | "project"
export type Data = UserAddress[] | UserSkills[] | UserEducation[] | UserExperience[] | UserProject[]