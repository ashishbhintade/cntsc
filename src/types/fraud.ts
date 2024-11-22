export namespace fraud {
    export type ProofType = string;

    export interface Proof {
        proof_type: string,
        data: string
    }
}