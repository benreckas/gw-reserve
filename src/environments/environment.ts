// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyByBwBX4_u44Y7KZSkuqOZGn6M0hoCS-PQ',
    authDomain: 'geekwise-angular.firebaseapp.com',
    databaseURL: 'https://geekwise-angular.firebaseio.com',
    projectId: 'geekwise-angular',
    storageBucket: 'geekwise-angular.appspot.com',
    messagingSenderId: '623327886979'
  }
};
