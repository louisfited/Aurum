// // TradingViewWidget.jsx
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
//           "width": "100%",
//           "height": 300,
//           "symbolsGroups": [
//             {
//               "name": "Precious Metals",
//               "symbols": [
//                 {
//                   "name": "OANDA:XAUUSD",
//                   "displayName": "Gold"
//                 },
//                 {
//                   "name": "OANDA:XAGUSD",
//                   "displayName": "Silver"
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
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);


// TradingViewWidget.jsx
"use client"
import { Container } from '@mui/material';
import React, { useEffect, useRef, memo } from 'react';

function MetalWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "colorTheme": "dark",
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "backgroundColor": "#0F0F0F",
        "support_host": "https://www.tradingview.com",
        "width": "100%",
        "height": 200,
        "symbolsGroups": [
          {
            "name": "Precious Metals",
            "symbols": [
              {
                "name": "OANDA:XAUUSD",
                "displayName": ""
              },
              {
                "name": "CAPITALCOM:SILVER",
                "displayName": ""
              }
            ]
          }
        ]
      }`;
      
      container.current.appendChild(script);
    },
    []
  );

  return (
    <Container>
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Market summary</span></a><span className="trademark"> by TradingView</span></div>
    </div>
    </Container>
  );
}

export default memo(MetalWidget);



// script.innerHTML = `
// {
//   "colorTheme": "dark",
//   "locale": "en",
//   "largeChartUrl": "",
//   "isTransparent": false,
//   "showSymbolLogo": true,
//   "backgroundColor": "#0F0F0F",
//   "support_host": "https://www.tradingview.com",
//   "width": "100%",
//   "height": 300,
//   "symbolsGroups": [
//     {
//       "name": "Precious Metals",
//       "symbols": [
//         {
//           "name": "OANDA:XAUUSD",
//           "displayName": "Gold"
//         },
//         {
//           "name": "OANDA:XAGUSD",
//           "displayName": "Silver"
//         }
//       ]
//     }
//   ]
// }`;


// script.innerHTML = `
// {
//   "colorTheme": "dark",
//   "locale": "en",
//   "largeChartUrl": "",
//   "isTransparent": false,
//   "showSymbolLogo": true,
//   "backgroundColor": "#0F0F0F",
//   "support_host": "https://www.tradingview.com",
//   "width": 550,
//   "height": 550,
//   "symbolsGroups": [
//     {
//       "name": "Precious Metals",
//       "symbols": [
//         {
//           "name": "OANDA:XAUUSD",
//           "displayName": ""
//         },
//         {
//           "name": "CAPITALCOM:SILVER",
//           "displayName": ""
//         }
//       ]
//     },
   
   
   
//   ]
// }`;