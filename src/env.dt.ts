declare global {
    export interface Config{
        api: string,
        API_URL: string,
        ASSERT_URL: string,
        signalRUrl: string,
        releasealltables: string,
        GOOGLE_MAP_API_KEY: string,
        reservationURL: string,
        DEV_ENV_LOCAL: boolean,
        isNotReload: boolean,
        reloadTime: number,
        defaultLang: string,
        whatsappApi: string,
        Allergens?: {
            AllergenTypes: string[]
        }
        backgroundImage: string,
        backgroundNewImage: string,
        uploadBackground: string,
        printers: string,
        generalSettingsPrinters: string,
        floorSettings: string,
        kassaSettings: string,
        kitchenSettings: string,
        printingGroups: string,
        printingGroupsCustomSettings: string,
        connectedPrinters: string,
        customLabels: string,
        searchTables: string,
    }
    interface Window {
        posconfig: Config;
    }
  }
  
  export {};
  