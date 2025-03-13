import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export  const redirectUser = async()=>{
    const user = await currentUser();
    if(!user){
        redirect('/');
    }
}