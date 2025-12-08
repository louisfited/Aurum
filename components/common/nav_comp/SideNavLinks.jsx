import Link from "next/link";
import { FaHistory, FaUserCircle, FaWallet } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo } from "react-icons/si";
import { HiMiniQueueList } from "react-icons/hi2";
import { AiFillSliders, AiOutlineFundView } from "react-icons/ai";
import { useEffect, useState } from "react";



const subMenusOfMenus = [
  {menu:"Accounts",
    subMenu:[
      {title:"Balance",route:"/dashboard/accounts/balance"},
      {title:"Deposit Funds",route:"/dashboard/accounts/deposit-funds"},
      {title:"Withdraw funds",route:"/dashboard/accounts/withdraw-funds"},
      {title:"Reserve Bars",route:"/dashboard/accounts/reserve-bars"},
      {title:"Validation",route:"/dashboard/accounts/validation"},
      {title:"Documents",route:"/dashboard/accounts/documents"},
      {title:"Settings",route:"/dashboard/accounts/settings"},
    ]
  },
  {menu:"History",
    
    subMenu:[
      {title:"Orders",route:"/dashboard/history/orders"},
      {title:"Statement",route:"/dashboard/history/statement"},
      {title:"Deposit and Withdrawals",route:"/dashboard/history/deposits-and-withdrawals"},
      {title:"Profit and Loss",route:"/dashboard/history/profit-and-loss"},
      {title:"Gold Bar Withdrawal",route:"/dashboard/history/gold-bar-withdrawal"},
      {title:"Referrals",route:"/dashboard/history/referrals"},
    ]
  },
  {menu:"Buy/Sell ",
    subMenu:[
      {title:"Vaulted Gold & Silver",route:"/dashboard/buy-and-sell/vaulted-metals"},
      // {title:"Deposit Funds",route:"buy-and-sell/"},
      {title:"Daily Price",route:"/buy-and-sell/daily-price"},
    ]
  },
  {menu:"Investment Guide",
    subMenu:[
      {title:"Guide to Silver",route:"/investment-guide/guide-to-gold"},
      {title:"Guide to silver",route:"/investment-guide/guide-to-silver"},
      {title:"Withdraw funds",route:"/investment-guide/guide-to-platinum"},
    ]
  },
  {menu:"Gold News",
    subMenu:[
      {title:"Gold Price",route:"/gold-news/gold-price"},
      {title:"Silver Price",route:"/gold-news/silver-price"},
      {title:"Platinum Price",route:"/gold-news/platinum-price"},
    ]
  },

]

const SideNavLinks = ({ pathname, isActiveMenu }) => {

  const [currentAccordionValue,setCurrentAccordionValue] = useState("Accounts")

  useEffect(()=>{

  },[currentAccordionValue])
  return (
    <>
      {/* <div
        className={`  h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        }`}
      > */}

        {subMenusOfMenus.map((item,index)=>{

          return <article key={index + 1} className="px-5">

          <div 

onClick={()=>{
  console.log( currentAccordionValue == item.menu);
  
  
  setCurrentAccordionValue(item.menu)
  console.log(item.menu);
  console.log(currentAccordionValue);
// alert(item.menu)

 }}
 
          className={`mt-2    btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
            currentAccordionValue.trim() == item.menu
              ? "text-primary border-l-4 border-l-primary"
              : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
          }`}
          >
             {isActiveMenu ? (
          <MdSpaceDashboard className="text-xl" />
        ) : (
          <div className="flex flex-col items-center gap-2  w-full ">
           <div
           className="flex items-center items-start w-full"
//            onClick={()=>{
//             console.log( currentAccordionValue == item.menu);
            
            
//             setCurrentAccordionValue(item.menu)
//             console.log(item.menu);
//             console.log(currentAccordionValue);
// // alert(item.menu)

//            }}
           
           > 
            <MdSpaceDashboard className="text-lg" /> 
            {item.menu}</div>
           

          </div>
        )}

          </div>
          {!isActiveMenu && currentAccordionValue === item.menu && <section className="flex flex-col gap-y-2 items-end   w-full ">

{item.subMenu.map((submenu,index)=>{
  
  return (
    <Link key={index + 1}
    href={submenu.route}
    className="text-[0.75rem] font-light hover:text-primary "
    >
   {submenu.title}
   </Link>
 )
})}
</section>}
        </article>
        })}

      {/* </div> */}
      {/* <Link
        href="/dashboard/trading"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <AiFillSliders className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <AiFillSliders className="text-lg" />
            History
          </div>
        )}
      </Link>

      <Link
        href="/dashboard/market"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <SiMarketo className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <SiMarketo className="text-lg" />
            Buy/Sell Bullion
          </div>
        )}
      </Link>

      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <AiOutlineFundView className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <AiOutlineFundView className="text-lg" /> Investment Guide
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <HiMiniQueueList className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <HiMiniQueueList className="text-lg" /> Gold News
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/history"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/history"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaHistory className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <FaHistory className="text-lg" /> Chart
          </div>
        )}
      </Link> */}






      {/* SEPARATED */}
      {/* <Link
        href="/dashboard/academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <SiKhanacademy className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <SiKhanacademy className="text-lg" /> Academy
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaUserCircle className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-lg" />
            Profile
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaWallet className="text-xl transition-all duration-300 ease-in-out" />
        ) : (
          <div className="flex items-center gap-2">
            <FaWallet className="text-lg" /> Wallet
          </div>
        )}
      </Link> */}
    </>
  );
};

export default SideNavLinks;
