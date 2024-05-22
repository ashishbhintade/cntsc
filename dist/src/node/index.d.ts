import { Client } from "..";
interface Info {
    type: string;
    api_version: string;
}
export declare class Node {
    client: Client;
    constructor(client: Client);
    AuthNew(perms: string[]): Promise<string>;
    AuthVerify(perms: string): Promise<string>;
    Info(): Promise<Info>;
    LogLevelSet(name: string, level: string): Promise<any>;
    Ready(): Promise<boolean>;
}
export {};
//# sourceMappingURL=index.d.ts.map