
"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function SilverChartComponent() {
  useEffect(() => {
    // Ensure TradingView is loaded before creating the widget
    const interval = setInterval(() => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: 500,
          symbol: "OANDA:XAGUSD",
          interval: "60",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          container_id: "tradingview_silver",
        });
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div id="tradingview_silver" />

      {/* TradingView Script */}
      <Script src="https://s3.tradingview.com/tv.js" strategy="lazyOnload" />
    </div>
  );
}
