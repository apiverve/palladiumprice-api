declare module '@apiverve/palladiumprice' {
  export interface palladiumpriceOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface palladiumpriceResponse {
    status: string;
    error: string | null;
    data: PalladiumPriceData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface PalladiumPriceData {
      currency:        null | string;
      gram:            number | null;
      kilogram:        number | null;
      ounce:           number | null;
      lastUpdated:     Date | null;
      change24H:       number | null;
      change24HPct:    number | null;
      changeDirection: null | string;
      high24H:         number | null;
      low24H:          number | null;
      formatted:       Formatted;
  }
  
  interface Formatted {
      ounce:         null | string;
      gram:          null | string;
      kilogram:      null | string;
      ounceWords:    null | string;
      kilogramWords: null | string;
  }

  export default class palladiumpriceWrapper {
    constructor(options: palladiumpriceOptions);

    execute(callback: (error: any, data: palladiumpriceResponse | null) => void): Promise<palladiumpriceResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: palladiumpriceResponse | null) => void): Promise<palladiumpriceResponse>;
    execute(query?: Record<string, any>): Promise<palladiumpriceResponse>;
  }
}
