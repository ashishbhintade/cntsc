import { Client } from "..";
import { das } from "../types/das";
export declare class Das {
    client: Client;
    constructor(client: Client);
    SamplingStats(): Promise<das.SamplingStats>;
    WaitCatchUp(): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map