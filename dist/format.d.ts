import { Trade } from 'interfaces';
import { RawTradeData, RawOrderbookData, OrderString } from './interface';
declare function formatRawTrades(trades: RawTradeData['data']): Trade[];
declare function formatRawOrderbookToOrdersString(orderbook: RawOrderbookData['data'][0]): OrderString[];
export { formatRawOrderbookToOrdersString, formatRawTrades, };