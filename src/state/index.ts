import { Client } from "..";
import { Payload } from "../constants";
import { blob } from "../types/blob";
import { state } from "../types/state";

export class State {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async AccountAddress(): Promise<state.Address> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.AccountAddress",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Balance(): Promise<state.Balance> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.Balance",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async BalanceForAddress(): Promise<state.Balance> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.BalanceForAddress",
            params: [],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    // TODO implement TxResponse Type
    async BeginRedelegate(
        srcValAddr: state.Address,
        dstValAddr: state.Address,
        amount: state.Int,
        fee: state.Int,
        gasLimit: number
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.BeginRedelegate",
            params: [srcValAddr, dstValAddr, amount, fee, gasLimit],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async CancelUnbondingDelegation(
        valAddr: state.Address,
        amount: state.Int,
        height: state.Int,
        fee: state.Int,
        gasLimit: number
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.CancelUnbondingDelegation",
            params: [valAddr, amount, height, fee, gasLimit],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Delegate(
        valAddr: state.Address,
        amount: state.Int,
        fee: state.Int,
        gasLimit: number
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.Delegate",
            params: [valAddr, amount, fee, gasLimit],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async QueryDelegation(
        valAddr: state.Address
    ): Promise<state.DelegationResponse> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.QueryDelegation",
            params: [valAddr],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async QueryRedelegations(
        srcValAddr: state.Address,
        dstValAddr: state.Address
    ): Promise<state.RedelegationResponses> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.QueryRedelegations",
            params: [srcValAddr, dstValAddr],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    // TODO implement type for unbonding response
    async QueryUnbonding(valAddr: state.Address): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.QueryUnbonding",
            params: [valAddr],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async SubmitPayForBlob(
        fee: state.Int,
        gasLimit: number,
        blobs: blob.Blob[]
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.SubmitPayForBlob",
            params: [fee, gasLimit, blobs],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async SubmitTx(tx: state.Tx): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.SubmitTx",
            params: [tx],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Transfer(
        to: state.Address,
        amount: state.Int,
        fee: state.Int,
        gasLimit: number
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.Transfer",
            params: [to, amount, fee, gasLimit],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }

    async Undelegate(
        valAddr: state.Address,
        amount: state.Int,
        fee: state.Int,
        gasLimit: number
    ): Promise<any> {
        const jsonRequest: any = {
            ...Payload,
            method: "state.Undelegate",
            params: [valAddr, amount, fee, gasLimit],
        };

        // Send the fetch request
        return await this.client.request(jsonRequest);
    }
}
