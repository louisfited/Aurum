



const tableContentStyle = "w-[25%] text-start"



const data = [
    {
        id:"1",
patient:"Phoenix Baker",
date:"Jan 3,2025",
status:"Admin",
doctor:"Dr Maxwell James"
    },
    {
        id:"2",
patient:"Phoenix Baker",
date:"Jan 3,2025",
status:"Mod",
doctor:"Dr Maxwell James"
    },
    {
        id:"3",
patient:"Phoenix Baker",
date:"Jan 3,2025",
status:"User",
doctor:"Dr Maxwell James"
    },

]


const generateRandomBgColor = ()=>{
const random = Math.floor(Math.random() * 4)

if (random == 1) {
    return "bg-green-500"
    
}
else if (random == 2) {
    return "bg-red-500"
}
else if (random == 3) {
    return "bg-blue-500"
}
else{
    return "bg-pink-500"
}


}


const UsersList = () => {

  return (
    <div
    className="px-8 mt-16"
    >



{/* <div className="flex justify-end my-4">
<button
onClick={openModal}
className=" px-8 bg-primary rounded-lg text-white font-semibold h-[40px] cursor-pointer hover:opacity-50 ">Add New</button>

</div> */}

{/* table */}
<section className="text-white text-sm">

<header className="flex items-center text-[#CDCECF] bg-black h-[60px] py-2 font-semibold rounded-t-lg px-4" >
    <div className={tableContentStyle}>Users</div>
    <div className={tableContentStyle}>Date Registered</div>
    <div className={tableContentStyle}>Role</div>
    {/* <div className={tableContentStyle}>Doctor</div> */}
    <div className={tableContentStyle}>Actions</div>
</header>

<article className="">
    {data.length < 1 && (<div>data not available</div>)}
    {data.length > 0 && data.reverse().map((item,index)=>{

 
return <aside key={item.id} className={`flex py-2 ${index % 2 == 0 ? " bg-nobleBlack" :"bg-slate-900" } h-[60px] py-2 px-4`} >
    {/* patent name */}
    <div className={tableContentStyle+ " flex gap-x-2 items-center "}><span className={`h-[30px] w-[30px]  rounded-full flex items-center justify-center uppercase ${generateRandomBgColor()}`}>{item.patient.split("")[0].charAt(0) + item.patient.split("")[1].charAt(0) }</span> <span>{item.patient}</span></div>
    {/* date */}
    <div className={tableContentStyle + " text-[#CDCECF]"}>{item.date}</div>
    {/* status */}
    <div className={tableContentStyle + " flex items-center"}><span className={`${item.status == "Admin" ? "bg-green-900 text-green-500" : item.status == "User" ? "bg-blue-900 text-blue-500" : "bg-red-900 text-red-500" } rounded-full px-2`}>{item.status}</span></div>
    {/* docor */}
    {/* <div className={tableContentStyle + " flex items-center gap-x-2 "}><span className={`h-[30px] w-[30px]  rounded-full flex items-center justify-center uppercase ${generateRandomBgColor()}`}>{item.doctor.split("")[0].charAt(0) + item.doctor.split("")[1].charAt(0) }</span>  <span>{item.doctor}</span></div> */}
    {/* schedule */}
    <div
    // onClick={()=> deletePatient(item.id)}
    className={tableContentStyle + " flex gap-x-2 items-center"}><button className="bg-green-500 rounded-lg px-2 cursor-pointer">More Info</button><button className="bg-red-500 rounded-lg px-2 cursor-pointer">delete</button></div>
</aside>
    })}
</article>
</section>
    </div>
  )
}

export default UsersList