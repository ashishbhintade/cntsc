export declare namespace blob {
    export interface Blob {
        namespace: string;
        data: string;
        share_version: number;
        commitment: string;
        index: number;
    }
    interface ProofNode {
        end: number;
        nodes: string[];
        is_max_namespace_ignored: boolean;
    }
    export type Proof = ProofNode[];
    export type Commitment = string;
    export type GasPrice = number;
    export {};
}
//# sourceMappingURL=blob.d.ts.map