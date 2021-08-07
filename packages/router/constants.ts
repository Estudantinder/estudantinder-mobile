export const UNAUTHENTICATED_ROUTES = {
  LANDING: 'Landing',
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  ONBOARDING: 'OnBoarding',
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
  ABOUT_PROJECT: 'AboutProject',
  TARGET_PROFILE: 'TargetProfile',
  EDIT_AUTH_USER: 'EditAuthUser',
  ONBOARDING: 'Signed/Onboarding',
  CUSTOM_REPORT: 'CustomReport',
} as const

export const EDIT_AUTH_USER_ROUTES = {
  SECRETS: 'auth/Secrets',
  ABOUT: 'auth/About',
  SCHOOL: 'auth/School',
  CONTACTS: 'auth/Contacts',
  DETAILS: 'auth/Details',
  PHOTOS: 'auth/Photos',
  PROFILE: 'auth/Profile',
  MENU: 'auth/Menu',
} as const

export const MAIN_ROUTES = {
  HOME: 'Home',
  USER_PROFILE: 'UserProfile',
  MATCHES: 'Matches',
} as const
