import { useEffect, useRef } from "react";
import "./stockbar.css";

const StockBar = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
        script.async = true;
        script.onload = () => {
            const widget = new window.TradingView.TickerWidget({
                symbols: [
                    {
                        proName: "FOREXCOM:SPXUSD",
                        title: "S&P 500",
                    },
                    {
                        proName: "FOREXCOM:NSXUSD",
                        title: "Nasdaq 100",
                    },
                    {
                        proName: "FX_IDC:EURUSD",
                        title: "EUR/USD",
                    },
                    {
                        proName: "BITSTAMP:BTCUSD",
                        title: "BTC/USD",
                    },
                    {
                        proName: "BITSTAMP:ETHUSD",
                        title: "ETH/USD",
                    },
                    {
                      proName: "FX_IDC:EURUSD",
                      title: "EUR/USD",
                  },
                  {
                      proName: "BITSTAMP:BTCUSD",
                      title: "BTC/USD",
                  },
                  {
                      proName: "BITSTAMP:ETHUSD",
                      title: "ETH/USD",
                  },
                    
                ],
                showSymbolLogo: true,
                colorTheme: "light",
                isTransparent: false,
                locale: "en",
            });

            widget.containerId = containerRef.current.id;
            widget.width = "100%";
            widget.height = "100%";
            widget.locale = "en";

            window.TradingView.onready(function () {
                window.TradingView.widget(widget);
            });
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
      // <div id="tradingview-widget-container" ref={containerRef}></div>
      <>
      
        {/* <div id="tradingview-widget-container" ref={containerRef}></div> */}
        <div className="ticker-container">
            <div className="ticker-canvas">
              <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget" ref={containerRef}>

                </div>
              </div>
            </div>
        </div>
      
      </>

      )
      
};

export default StockBar;
 