declare global {
    export interface Config{
        signalRUrl: string
        
    }
    interface Window {
        posconfig: Config;
    }
  }
  
  export {};
  