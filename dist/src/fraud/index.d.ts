import { Client } from "..";
import { fraud } from "../types/fraud";
export declare class Fraud {
    client: Client;
    constructor(client: Client);
    Get(proofType: fraud.ProofType): Promise<fraud.Proof[]>;
}
//# sourceMappingURL=index.d.ts.map