declare module '@apiverve/captchagenerator' {
  export interface captchageneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface captchageneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class captchageneratorWrapper {
    constructor(options: captchageneratorOptions);

    execute(callback: (error: any, data: captchageneratorResponse | null) => void): Promise<captchageneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: captchageneratorResponse | null) => void): Promise<captchageneratorResponse>;
    execute(query?: Record<string, any>): Promise<captchageneratorResponse>;
  }
}
