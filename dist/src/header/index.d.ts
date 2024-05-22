import { Client } from "..";
import { header } from "../types/header";
export declare class Header {
    client: Client;
    constructor(client: Client);
    GetByHash(hash: string): Promise<header.ExtendedHeader>;
    GetByHeight(height: number): Promise<header.ExtendedHeader>;
    GetRangeByHeight(from: header.ExtendedHeader, to: number): Promise<header.ExtendedHeader>;
    LocalHead(): Promise<header.ExtendedHeader>;
    NetworkHead(): Promise<header.ExtendedHeader>;
    SyncState(): Promise<header.ExtendedHeader>;
    SyncWait(): Promise<header.ExtendedHeader>;
    WaitForHeight(height: number): Promise<header.ExtendedHeader>;
}
//# sourceMappingURL=index.d.ts.map