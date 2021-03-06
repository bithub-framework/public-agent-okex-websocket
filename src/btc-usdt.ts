import Normalizer from './normalizer';
import {
    RawTrade,
    RawOrderbook,
    Trade,
    Orderbook,
    Side, ASK, BID,
    RawOrder,
    MakerOrder,
} from './interfaces';
import Big from 'big.js';

function normalizeRawOrder(rawOrder: RawOrder, side: Side): MakerOrder {
    return {
        price: new Big(rawOrder[0]),
        quantity: new Big(rawOrder[1]),
        side,
    };
}

class BtcUsdt extends Normalizer {
    protected pair = 'btc/usdt';
    protected rawInstrumentId = 'BTC-USDT';
    protected rawTradesChannel = 'spot/trade:BTC-USDT';
    protected rawOrderbookChannel = 'spot/depth5:BTC-USDT';

    protected normalizeRawTrade(rawTrade: RawTrade): Trade {
        return {
            side: rawTrade.side === 'buy' ? BID : ASK,
            price: new Big(rawTrade.price),
            quantity: new Big(rawTrade.size),
            time: new Date(rawTrade.timestamp).getTime(),
            id: rawTrade.trade_id,
        };
    }

    protected normalizeRawOrderbook(rawOrderbook: RawOrderbook): Orderbook {
        return {
            [ASK]: rawOrderbook.asks.map(rawOrder => normalizeRawOrder(rawOrder, ASK)),
            [BID]: rawOrderbook.bids.map(rawOrder => normalizeRawOrder(rawOrder, BID)),
            time: Date.parse(rawOrderbook.timestamp),
        };
    }
}

export {
    BtcUsdt as default,
    BtcUsdt,
}
