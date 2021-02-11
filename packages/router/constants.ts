export const UNAUTHENTICATED_ROUTES = {
  LANDING: 'Landing',
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
} as const

export const SIGNUP_ROUTES = {
  SECRETS: 'Secrets',
  ABOUT: 'About',
  SCHOOL: 'School',
  CONTACTS: 'Contacts',
  DETAILS: 'Details',
  PHOTOS: 'Photos',
  PROFILE: 'Profile',
} as const

export const AUTHENTICATED_ROUTES = {
  MAIN: 'Main',
  SETTINGS: 'Settings',
  TARGET_PROFILE: 'TargetProfile',
} as const

export const MAIN_ROUTES = {
  HOME: 'Home',
  USER_PROFILE: 'UserProfile',
  MATCHES: 'Matches',
} as const
