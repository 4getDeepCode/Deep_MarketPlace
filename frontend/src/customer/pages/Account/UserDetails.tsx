import { Divider } from "@mui/material"
import ProfileFildCard from "../../../seller/pages/ProfileFildCard"


const UserDetails = () => {
  return (
 <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]  ">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600 ">
            Persional Details
          </h1>
        
        </div>
        <div className="space-y-5">
         
          <div>
            <ProfileFildCard keys={"Name"} value={"Abhi Kumar"} />
            <Divider />
            <ProfileFildCard keys={"Email"} value={"abhi@gmail.com"} />
            <Divider />
            <ProfileFildCard keys={"Mobile"} value={"9776646467"} />
          </div>
        </div>
      </div>
    
    
    </div>
  )
}

export default UserDetails