export const projects = {
  BD: 18,
  US: 388,
  NP: 3,
  BY: 0,
  IN: 90,
  MT: 2,
  ES: 22,
  CZ: 4,
  AU: 57,
  DO: 2,
  JM: 7,
  HR: 7,
  AT: 8,
  TR: 12,
  NL: 21,
  RO: 2,
  GB: 121,
  BE: 14,
  GR: 4,
  MY: 18,
  BW: 1,
  DK: 5,
  FR: 26,
  PK: 19,
  SA: 10,
  NG: 22,
  EG: 8,
  SG: 12,
  CA: 53,
  SE: 3,
  NO: 2,
  AE: 26,
  CO: 12,
  ID: 5,
  MU: 24,
  ZA: 71,
  RS: 4,
  MA: 25,
  IT: 27,
  BS: 1,
  GP: 1,
  IL: 12,
  BR: 5,
  PT: 3,
  MX: 12,
  GH: 3,
  HK: 7,
  CH: 21,
  DE: 52,
  PL: 3,
  CL: 6,
  PH: 10,
  RU: 3,
  ZW: 1,
  MD: 1,
  KW: 7,
  OM: 1,
  KE: 3,
  LK: 1,
  NZ: 4,
  AL: 3,
  VN: 2,
  QA: 2,
  DZ: 1,
  CM: 4,
  UA: 1,
  VE: 0,
  IE: 8,
  AZ: 1,
  BB: 1,
  CN: 2,
  HU: 1,
  UY: 1,
  TZ: 1,
  IS: 2,
  PE: 3,
  KH: 1,
  BH: 1,
  BG: 3,
  PA: 3,
  EC: 3,
  PR: 1,
  LV: 1,
  PY: 1,
};

export const totalCountries = 195;
export const worldDominaation = Math.floor(
  (Object.values(projects).length * 100) / totalCountries,
);

export const totalProjects = Object.values(projects).reduce(
  (total, project) => total + project,
  0,
);

export const totalWebsiteFixes = 2700;

export const totalClients = totalProjects - (totalProjects % 100);

export const lastUpdate = '05 Nov 23';

export const getProjectsByCountryCode = (code: string) => {
  // @ts-ignore
  return projects[code] ?? 0;
};

export const cvLink =
  'https://drive.google.com/file/d/1mX9wiQ5e36N4zzWG88TJZrbjkaQumXZV/view?usp=sharing';
