export namespace state {
    export type Address = string;
    export type Int = string;
    export type Tx = string;

    export interface Balance {
        denom: string;
        amount: string;
    }

    interface Delegation {
        delegator_address: string;
        validator_address: string;
        shares: string;
    }

    export interface DelegationResponse {
        delegation_response: Delegation;
        balance: Balance;
    }

    // ------------------------------------------
    // TODO figure out better way to structure these interfaces
    interface RedelegationEntry {
        creation_height: number;
        completion_time: string;
        initial_balance: string;
        shares_dst: string;
    }
    
    interface Redelegation {
        delegator_address: string;
        validator_src_address: string;
        validator_dst_address: string;
        entries: RedelegationEntry[];
    }
    
    interface Entries {
        redelegation_entry: RedelegationEntry;
        balance: string;
    }
    
    interface RedelegationResponse {
        redelegation: Redelegation;
        entries: Entries[];
    }
    
    interface Pagination {
        next_key: string;
        total: number;
    }
    
    export interface RedelegationResponses{
        redelegation_responses: RedelegationResponse[];
        pagination: Pagination;
    }
    // ------------------------------------------
}
