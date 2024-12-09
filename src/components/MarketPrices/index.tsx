import { MarketPricesProvider } from "../../context/MarketPrices";
import { MarketPricesGrid } from "./MarketPricesGrid";

export function MarketPrices(){
    return <MarketPricesProvider>
        <MarketPricesGrid />
    </MarketPricesProvider>
}