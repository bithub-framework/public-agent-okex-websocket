import Startable from 'startable';
import { Operation } from './interfaces';
declare class Normalizer extends Startable {
    private extractor;
    private rawOrderbookHandler;
    private rawTradesHandler;
    constructor(url: string);
    protected _start(): Promise<void>;
    protected _stop(): Promise<void>;
    private onRawData;
    unSubscribe(operation: Operation, rawChannel: string): Promise<void>;
}
export { Normalizer as default, Normalizer, };
