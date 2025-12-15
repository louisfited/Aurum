import Header from "@/components/admin/users-components/header"
import UsersList from "@/components/admin/users-components/user-list"
import WelcomeAdmin from "@/components/admin/users-components/welcome-admin"


const Page = () => {
  return (
    <div className=" w-full min-h-screen bg-nobleBlack px-2 py-2">
{/* <Header/> */}
<WelcomeAdmin/>
<UsersList/>

    </div>
  )
}

export default Page