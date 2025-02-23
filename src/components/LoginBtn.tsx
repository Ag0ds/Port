"use client";

import "boxicons/css/boxicons.min.css";
import { signIn } from "next-auth/react";
import "./btn.css"

export function LoginBtn() {
    return (
        <div className="BtnAuth">
            <button onClick={() => signIn("google", {callbackUrl: "/dashboard"})} className="BtnGoogle">
            <i className='bx bxl-google'></i>
            </button>
            <button onClick={() => signIn("github", {callbackUrl: "/dashboard"})} className="BtnGithub">
                <i className='bx bxl-github'></i>
            </button>
        </div>
    )
}