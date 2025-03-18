
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogOutBtn } from "@/components/LogOutBtn";
import "./lobby.css";
import React from "react";

export default async function page() {
    const session = await getServerSession();

    if (!session){
        redirect("/");
    }


    return(
        <div>
            <LogOutBtn/>
        </div>
            
    )
}
