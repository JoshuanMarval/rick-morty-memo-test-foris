import type {Config} from 'jest';

const customJestConfig: Config = {
   moduleDirectories: ['node_modules', '<rootDir>'],
   setupFilesAfterEnv: ['./jest.setup.ts'],
   testEnvironment: 'jest-environment-jsdom',
   moduleFileExtensions: ['ts', 'tsx', 'js', 'png'],
   verbose: true,
   moduleNameMapper: {
      "\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/imageMock.ts",
      "\\.(css|less|scss)$": "<rootDir>/styleMock.ts"
   },
};

export default customJestConfig;
