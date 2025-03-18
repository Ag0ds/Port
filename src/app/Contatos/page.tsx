import { AnimatedBackground } from "@/components/animated-background";
import SocialButtons from "@/components/socialbtn";
import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Typewriter } from "@/components/typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <AnimatedBackground />
      <div className="">
        <a href="https://github.com/Ag0ds" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-500 rounded m-2 p-2 shadow-md">
            <FaGithub size={20} color="white" />
          </button>
        </a>

        <a href="https://wa.link/837lvf" target="_blank" rel="noopener noreferrer">
          <button className="bg-whats rounded p-2 shadow-md">
            <FaWhatsapp size={20} color="white" />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/ag0ds/" target="_blank" rel="noopener noreferrer">
          <button className="bg-linkd rounded m-2 p-2 shadow-md">
            <FaLinkedin size={20} color="white" />
          </button>
        </a>

        <a href="https://discord.com/channels/@me/727236858404143204" target="_blank" rel="noopener noreferrer">
          <button className="bg-disc rounded p-2 shadow-md">
            <FaDiscord size={20} color="white" />
          </button>
        </a>
      </div>

      {/* Container principal que coloca a foto à DIREITA do texto */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white p-6 gap-10">
        
        {/* Texto */}
        <div>
          <h1 className="max-w-2xl text-start">Olá, me chamo</h1>
          <h1 className="text-4xl text-start font-bold">Gabriel Arthur (Ag0ds)</h1>

          <div className="flex items-center gap-2 text-xl mt-4">
            <p className="text-start">O que eu sou?</p>
            <span className="text-blue-400 font-semibold">
              <Typewriter
                words={[
                  "Front-end developer?",
                  "Back-end developer?",
                  "Analista de requisitos?",
                  "O que se especializar?...",
                ]}
                typingSpeed={150}
                deletingSpeed={40}
                delayAfterWord={1500}
              />
            </span>
          </div>

          <p className="text-gray-300 mt-4 text-lg leading-relaxed w-1/2">
            🐙 Especializado em 
            <span className="text-pink-400"> Typescript, Javascript (Next.js, Angular, React Native) </span>, e 
            <span className="text-green-400"> Python (Django)</span>. Sou estudante de ciências e tecnologias na UFRN, atualmente sem vínculo a nenhuma
            empresa, estou atrás de mais processos que aumentem meu currículo e meus conhecimentos.
            Possuo competência com algumas linguagens para desenvolvimento, porém experiência apenas com
            atividades de requisitos e atendimento. Possuo conhecimento em automações com chat bot <span className="text-red-400">N8N</span>. 🤖💡
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/foto2.jpg"
            alt="Gabriel Arthur"
            width={256}
            height={256}
            className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-2 border-blue-500 shadow-[0_0_20px_rgba(0,191,255,0.6)]"
          />
        </div>
      </div>
    </main>
  );
}
