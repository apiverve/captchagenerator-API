declare module '@apiverve/captchagenerator' {
  export interface captchageneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface captchageneratorResponse {
    status: string;
    error: string | null;
    data: CaptchaGeneratorData;
    code?: number;
  }


  interface CAPTCHAGeneratorData {
      id:          string;
      expires:     number;
      solution:    string;
      downloadURL: string;
  }

  export default class captchageneratorWrapper {
    constructor(options: captchageneratorOptions);

    execute(callback: (error: any, data: captchageneratorResponse | null) => void): Promise<captchageneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: captchageneratorResponse | null) => void): Promise<captchageneratorResponse>;
    execute(query?: Record<string, any>): Promise<captchageneratorResponse>;
  }
}
