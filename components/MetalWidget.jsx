"use client"

import React, { useEffect, useRef } from 'react';

export default function MetalsPriceTable() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        ["OANDA:XAUUSD|1D", "Gold"],
        ["OANDA:XAGUSD|1D", "Silver"],
        ["OANDA:XPTUSD|1D", "Platinum"],
        ["OANDA:XPDUSD|1D", "Palladium"],
        ["COMEX:GC1!|1D", "Gold Futures"],
        ["COMEX:SI1!|1D", "Silver Futures"]
      ],
      "chartOnly": false,
      "width": "100%",
      "height": "100%",
      "locale": "en",
      "colorTheme": "dark",
      "autosize": true,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": false,
      "hideMarketStatus": false,
      "hideSymbolLogo": false,
      "scalePosition": "right",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "lineWidth": 2,
      "lineType": 0,
      "dateRanges": [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M"
      ]
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "500px", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}



// TradingViewWidget.jsx
// "use client"
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "colorTheme": "dark",
//           "dateRange": "12M",
//           "locale": "en",
//           "largeChartUrl": "",
//           "isTransparent": false,
//           "showFloatingTooltip": false,
//           "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
//           "plotLineColorFalling": "rgba(41, 98, 255, 1)",
//           "gridLineColor": "rgba(240, 243, 250, 0)",
//           "scaleFontColor": "#DBDBDB",
//           "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
//           "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
//           "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
//           "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
//           "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
//           "tabs": [
//             {
//               "title": "Indices",
//               "symbols": [
//                 {
//                   "s": "FOREXCOM:SPXUSD",
//                   "d": "S&P 500 Index"
//                 },
//                 {
//                   "s": "FOREXCOM:NSXUSD",
//                   "d": "US 100 Cash CFD"
//                 },
//                 {
//                   "s": "FOREXCOM:DJI",
//                   "d": "Dow Jones Industrial Average Index"
//                 },
//                 {
//                   "s": "INDEX:NKY",
//                   "d": "Japan 225"
//                 },
//                 {
//                   "s": "INDEX:DEU40",
//                   "d": "DAX Index"
//                 },
//                 {
//                   "s": "FOREXCOM:UKXGBP",
//                   "d": "FTSE 100 Index"
//                 },
//                 {
//                   "s": "OANDA:XAUUSD",
//                   "d": "",
//                   "logoid": "metal/gold",
//                   "currency-logoid": "country/US"
//                 }
//               ],
//               "originalTitle": "Indices"
//             },
//             {
//               "title": "Futures",
//               "symbols": [
//                 {
//                   "s": "BMFBOVESPA:ISP1!",
//                   "d": "S&P 500"
//                 },
//                 {
//                   "s": "BMFBOVESPA:EUR1!",
//                   "d": "Euro"
//                 },
//                 {
//                   "s": "CMCMARKETS:GOLD",
//                   "d": "Gold"
//                 },
//                 {
//                   "s": "PYTH:WTI3!",
//                   "d": "WTI Crude Oil"
//                 },
//                 {
//                   "s": "BMFBOVESPA:CCM1!",
//                   "d": "Corn"
//                 }
//               ],
//               "originalTitle": "Futures"
//             },
//             {
//               "title": "Bonds",
//               "symbols": [
//                 {
//                   "s": "EUREX:FGBL1!",
//                   "d": "Euro Bund"
//                 },
//                 {
//                   "s": "EUREX:FBTP1!",
//                   "d": "Euro BTP"
//                 },
//                 {
//                   "s": "EUREX:FGBM1!",
//                   "d": "Euro BOBL"
//                 }
//               ],
//               "originalTitle": "Bonds"
//             },
//             {
//               "title": "Forex",
//               "symbols": [
//                 {
//                   "s": "FX:EURUSD",
//                   "d": "EUR to USD"
//                 },
//                 {
//                   "s": "FX:GBPUSD",
//                   "d": "GBP to USD"
//                 },
//                 {
//                   "s": "FX:USDJPY",
//                   "d": "USD to JPY"
//                 },
//                 {
//                   "s": "FX:USDCHF",
//                   "d": "USD to CHF"
//                 },
//                 {
//                   "s": "FX:AUDUSD",
//                   "d": "AUD to USD"
//                 },
//                 {
//                   "s": "FX:USDCAD",
//                   "d": "USD to CAD"
//                 }
//               ],
//               "originalTitle": "Forex"
//             }
//           ],
//           "support_host": "https://www.tradingview.com",
//           "backgroundColor": "#0f0f0f",
//           "width": "400",
//           "height": "550",
//           "showSymbolLogo": true,
//           "showChart": true
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Market summary</span></a><span className="trademark"> by TradingView</span></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);



// TradingViewWidget.jsx
// "use client"
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "colorTheme": "dark",
//           "locale": "en",
//           "largeChartUrl": "",
//           "isTransparent": false,
//           "showSymbolLogo": true,
//           "backgroundColor": "#0F0F0F",
//           "support_host": "https://www.tradingview.com",
//           "width": 550,
//           "height": 550,
//           "symbolsGroups": [
//             {
//               "name": "Indices",
//               "symbols": [
//                 {
//                   "name": "CAPITALCOM:GOLD",
//                   "displayName": ""
//                 },
//                 {
//                   "name": "CAPITALCOM:SILVER",
//                   "displayName": ""
//                 }
//               ]
//             },
//             {
//               "name": "Futures",
//               "symbols": [
//                 {
//                   "name": "BMFBOVESPA:ISP1!",
//                   "displayName": "S&P 500"
//                 },
//                 {
//                   "name": "BMFBOVESPA:EUR1!",
//                   "displayName": "Euro"
//                 },
//                 {
//                   "name": "CMCMARKETS:GOLD",
//                   "displayName": "Gold"
//                 },
//                 {
//                   "name": "PYTH:WTI3!",
//                   "displayName": "WTI Crude Oil"
//                 },
//                 {
//                   "name": "BMFBOVESPA:CCM1!",
//                   "displayName": "Corn"
//                 }
//               ]
//             },
//             {
//               "name": "Bonds",
//               "symbols": [
//                 {
//                   "name": "EUREX:FGBL1!",
//                   "displayName": "Euro Bund"
//                 },
//                 {
//                   "name": "EUREX:FBTP1!",
//                   "displayName": "Euro BTP"
//                 },
//                 {
//                   "name": "EUREX:FGBM1!",
//                   "displayName": "Euro BOBL"
//                 }
//               ]
//             },
//             {
//               "name": "Forex",
//               "symbols": [
//                 {
//                   "name": "FX:EURUSD",
//                   "displayName": "EUR to USD"
//                 },
//                 {
//                   "name": "FX:GBPUSD",
//                   "displayName": "GBP to USD"
//                 },
//                 {
//                   "name": "FX:USDJPY",
//                   "displayName": "USD to JPY"
//                 },
//                 {
//                   "name": "FX:USDCHF",
//                   "displayName": "USD to CHF"
//                 },
//                 {
//                   "name": "FX:AUDUSD",
//                   "displayName": "AUD to USD"
//                 },
//                 {
//                   "name": "FX:USDCAD",
//                   "displayName": "USD to CAD"
//                 }
//               ]
//             }
//           ]
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container w-full" ref={container}>
//       <div className="tradingview-widget-container__widget w-full"></div>
//       <div className="tradingview-widget-copyright w-full"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Market summary</span></a><span className="trademark"> by TradingView</span></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
