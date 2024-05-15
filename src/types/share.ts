export namespace share {
    export type Namespace = string;
    export type Share = string;

    export interface NamespacedShare {
        shares: string[];
        proof: Record<string, any>;
    }
}
