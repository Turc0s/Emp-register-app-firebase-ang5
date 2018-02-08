// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCxtR8CLDNF5m48LUK_bsVWKnS4MFqPcSU",
    authDomain: "ang5-emp-register-crud-app.firebaseapp.com",
    databaseURL: "https://ang5-emp-register-crud-app.firebaseio.com",
    projectId: "ang5-emp-register-crud-app",
    storageBucket: "ang5-emp-register-crud-app.appspot.com",
    messagingSenderId: "15693351122"
  }
};
