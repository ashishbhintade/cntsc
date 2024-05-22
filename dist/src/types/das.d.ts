export declare namespace das {
    interface Worker {
        job_type: string;
        current: number;
        from: number;
        to: number;
    }
    export interface SamplingStats {
        head_of_sampled_chain: number;
        head_of_catchup: number;
        network_head_height: number;
        workers: Worker[];
        concurrency: number;
        catch_up_done: boolean;
        is_running: boolean;
    }
    export {};
}
//# sourceMappingURL=das.d.ts.map