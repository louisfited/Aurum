
import { MdOutlineEventAvailable } from "react-icons/md";



const appointments = [

    {
        title:"All Users",
        value:94,
        icon: MdOutlineEventAvailable,

    },
    {
        title:"Newly Joined Users",
        value:12,
        icon: MdOutlineEventAvailable,

    },
    {
        title:"Verified Users",
        value:30,
        icon: MdOutlineEventAvailable,

    },

]
const WelcomeAdmin = () => {
  return (
    <div className="px-8 mt-36">
<aside className="pb-8">
   <header className="flex flex-col gap-y-4">
       <h1 className="text-white font-semibold text-5xl">Welcome, Admin</h1>
      
   </header>
</aside>


<section className="flex justify-between">

    {appointments.map((item,_)=>{


return <div key={item.title} className={`card py-4 flex flex-col gap-4 ${item.title.includes("scheduled") ? "card-gradient-yellow" : item.title.includes("pending")? "card-gradient-blue" : "card-gradient-red" }  w-[30%] py-4`}>
    <aside className="flex text-3xl items-center  gap-x-3"><span className={` flex items-center ${item.title.includes("scheduled") ? "text-yellow-500" : item.title.includes("pending")? "text-blue-500" : "text-red-500" }`}><item.icon size={30} /> </span> <span className=" font-semibold">{item.value}</span></aside>
    <h1>Total number of {item.title}</h1>
</div>
    })}
</section>

    </div>
  )
}

export default WelcomeAdmin