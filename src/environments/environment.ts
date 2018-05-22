// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    APP_NAME: "I Am The Industry",
    SOCKET_URL: "http://localhost:3000",
    BASE_URL: "http://localhost:3000/",
    API_URL: "https://iamindustrybackend.herokuapp.com",
    GOOGLE_CLIENT_ID:"811009371370-ej6g6d375vg7lfhrkqb2srkp5fdi5s8e.apps.googleusercontent.com",
    FB_APP_ID: "312645405934882"
    
  }
};
