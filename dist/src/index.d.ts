import { Blob } from "./blob";
import { Das } from "./das";
import { Fraud } from "./fraud";
import { Header } from "./header";
import { Node } from "./node";
import { P2P } from "./p2p";
import { Share } from "./share";
import { State } from "./state";
export declare class Client {
    url: string;
    apiKey: string;
    log: boolean;
    Blob: Blob;
    Das: Das;
    Fraud: Fraud;
    Header: Header;
    Node: Node;
    P2P: P2P;
    Share: Share;
    State: State;
    constructor(url: string, apiKey: string, log?: boolean);
    request(payload: any): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map