import Startable from 'startable';
declare class RawExtractor extends Startable {
    private socket;
    private pinger?;
    private pongee?;
    constructor();
    protected _start(): Promise<void>;
    private onRawData;
    private onRawUnSub;
    protected _stop(): Promise<void>;
    send(object: object): Promise<void>;
}
export { RawExtractor as default, RawExtractor, };
