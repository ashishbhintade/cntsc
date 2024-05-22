import { Client } from "..";
import { blob } from "../types/blob";
import { state } from "../types/state";
export declare class State {
    client: Client;
    constructor(client: Client);
    AccountAddress(): Promise<state.Address>;
    Balance(): Promise<state.Balance>;
    BalanceForAddress(): Promise<state.Balance>;
    BeginRedelegate(srcValAddr: state.Address, dstValAddr: state.Address, amount: state.Int, fee: state.Int, gasLimit: number): Promise<any>;
    CancelUnbondingDelegation(valAddr: state.Address, amount: state.Int, height: state.Int, fee: state.Int, gasLimit: number): Promise<any>;
    Delegate(valAddr: state.Address, amount: state.Int, fee: state.Int, gasLimit: number): Promise<any>;
    QueryDelegation(valAddr: state.Address): Promise<state.DelegationResponse>;
    QueryRedelegations(srcValAddr: state.Address, dstValAddr: state.Address): Promise<state.RedelegationResponses>;
    QueryUnbonding(valAddr: state.Address): Promise<any>;
    SubmitPayForBlob(fee: state.Int, gasLimit: number, blobs: blob.Blob[]): Promise<any>;
    SubmitTx(tx: state.Tx): Promise<any>;
    Transfer(to: state.Address, amount: state.Int, fee: state.Int, gasLimit: number): Promise<any>;
    Undelegate(valAddr: state.Address, amount: state.Int, fee: state.Int, gasLimit: number): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map