"use client"
import Balance from "@/components/traders_comp/dashboard/Balance";
import QuickTrade from "@/components/traders_comp/dashboard/quick-trade/QuickTrade";
import TopAssets from "@/components/traders_comp/dashboard/TopAssets";
import Transactions from "@/components/traders_comp/dashboard/Transactions";
import SideHistory from "@/components/traders_comp/market/SideHistory";
import SidePortfolio from "@/components/traders_comp/market/SidePortfolio";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// add title in metadata
// export const metadata = {
//   title: "Dashboard - Aurum",
//   description: "Dashboard page from Aurum",
// };

const page = () => {

  const router = useRouter()
  useEffect(()=>{
router.push("/dashboard/accounts/balance")

  },[])
  return (
   <>
<div className="">
dashboard
</div>
   </>
  );
};

export default page;




{/* total balance */}
<Balance />

{/* trending assets */}
<QuickTrade />

{/* top assets slider */}
<TopAssets />

{/* trending assets */}
<Transactions />

{/* watchlist */}
<div className="h-full xl:col-span-6 3xl:col-span-4">
  <SidePortfolio />
</div>

{/* history */}
<div className="h-full xl:col-span-6 3xl:col-span-4">
  <SideHistory />
</div>

{/* watchlist */}
<div className="h-full xl:col-span-6 3xl:col-span-4">
  <SideWatchlist />
</div>