import Startable from 'startable';
import { Operation } from './interfaces';
import { Pair } from './market-descriptions';
declare class Normalizer extends Startable {
    private extractor;
    private rawOrderbookHandler;
    private rawTradesHandler;
    constructor(url: string);
    protected _start(): Promise<void>;
    protected _stop(): Promise<void>;
    private onRawData;
    private waitForUnsub;
    unSubscribe(operation: Operation, pair: Pair): Promise<void>;
}
export { Normalizer as default, Normalizer, };