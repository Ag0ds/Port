"use client";

import { signOut } from "next-auth/react";

export function LogOutBtn() {
    return ( 
            <button className="btn btn-primary" onClick={() => signOut()}>
        Sair
    </button>    
    )
}