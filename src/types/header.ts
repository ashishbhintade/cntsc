export namespace header {
    export interface ExtendedHeader {
        header: {
            version: {
                block: string;
            };
            chain_id: string;
            height: string;
            time: string;
            last_block_id: {
                hash: string;
                parts: {
                    total: number;
                    hash: string;
                };
            };
            last_commit_hash: string;
            data_hash: string;
            validators_hash: string;
            next_validators_hash: string;
            consensus_hash: string;
            app_hash: string;
            last_results_hash: string;
            evidence_hash: string;
            proposer_address: string;
        };
        validtor_set: {
            validators: validator[];
            proposer: validator;
        };
        commit: {
            height: number;
            round: number;
            block_id: {
                hash: string;
                parts: {
                    total: number;
                    hash: number;
                };
            };
            signatures: signature[];
        };
        dah: {
            row_roots: string[];
            column_roots: string[];
        };
    }

    interface validator {
        address: string;
        pub_key: {
            type: string;
            value: string;
        };
        voting_power: string;
        proposer_priority: string;
    }

    interface signature {
        block_id_flag: string;
        validtor_address: string;
        timestamp: string;
        signature: string;
    }
}
