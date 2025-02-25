
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogOutBtn } from "@/components/LogOutBtn";
import Image from "next/image";
import "./lobby.css";
import React from "react";

export default async function page() {
    const session = await getServerSession();

    if (!session){
        redirect("/");
    }


    return(
        <div>
            <h1>Olá {session.user?.name}</h1>
            <LogOutBtn/>
            {session.user?.image && <div className="w-[150px]"><Image src={session.user?.image} alt="Avatar" width={150} height={150}/></div>}
        </div>
            
    )
}
