// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase:{
    apiKey: "AIzaSyDvPrTKXsZb23V8CVbJBY_UzDxagu_q0G0",
    authDomain: "todoangular-52aaa.firebaseapp.com",
    databaseURL: "https://todoangular-52aaa.firebaseio.com",
    projectId: "todoangular-52aaa",
    storageBucket: "todoangular-52aaa.appspot.com",
    messagingSenderId: "235810066867"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
