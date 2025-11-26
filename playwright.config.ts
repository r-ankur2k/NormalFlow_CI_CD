import { PlaywrightTestConfig } from "@playwright/test";


const config : PlaywrightTestConfig = {
    use : {
        headless : false ,
        // channel : "chrome",
        screenshot :"only-on-failure",
        // video : "retry-with-video"
        viewport: null,                        // full screen size
        
        launchOptions: {
          slowMo : 500,
        args: ["--start-fullscreen"]},
    },
    retries : 0 ,
    reporter: [
    ["html", { open: "never" }],   // prevents HTML from opening
    ["json", { outputFile: "report.json" }] // JSON saved silently
  ],
}

export default config;