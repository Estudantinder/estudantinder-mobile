export interface EnvProps {
  api_host: string
  like_and_dislike: boolean
}

/**
 * Since React Native doesn't support .env files and dotenv library, the solution
 * is make a env.ts file with all config for an App add it in .gitignore.
 * So, Basically use this like a .env file.
 * When you finish editing this file, just remove the .example and all should
 * work just fine
 *
 * More info and credits:
 * https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html
 */

const ENV: Record<'dev' | 'prod', EnvProps> = {
  dev: {
    api_host: '[your-host]',
    like_and_dislike: false,
  },
  prod: {
    api_host: '[your-host]',
    like_and_dislike: true,
  },
}

export default () => {
  if (__DEV__) {
    return ENV.dev
  }

  return ENV.prod
}
