import { Client } from "..";
import { header } from "../types/header";
import { share } from "../types/share";
export declare class Share {
    client: Client;
    constructor(client: Client);
    GetEDS(header: header.ExtendedHeader): Promise<any>;
    GetShare(header: header.ExtendedHeader, row: number, col: number): Promise<share.Share>;
    GetSharesByNamespace(header: header.ExtendedHeader, namespace: share.Namespace): Promise<share.NamespacedShare[]>;
    SharesAvailable(header: header.ExtendedHeader): Promise<undefined>;
}
//# sourceMappingURL=index.d.ts.map