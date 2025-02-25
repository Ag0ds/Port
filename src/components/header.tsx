'use client';

import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react'; // Importe useSession para acessar a sessão
import Image from 'next/image';


const Header = () => {
    const { data: session } = useSession();
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return (
        <div
          className={cn(
            `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
            {
              'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
              'border-b border-gray-200 bg-white': selectedLayout,
            },
          )}
        >
          <div className="flex h-[47px] items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex flex-row space-x-3 items-center justify-center md:hidden"
              >
                <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                <span className="font-bold text-xl flex ">Logo</span>
              </Link>
            </div>
    
            <div className="hidden md:block">
          {session?.user?.image ? (
            // Exibe a imagem do usuário se estiver disponível
            <img
              src={session.user.image}
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
          ) : (
            // Exibe o fallback "HQ" se a imagem não estiver disponível
            <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
              <span className="font-semibold text-sm">HQ</span>
            </div>
          )}
        </div>
          </div>
        </div>
      );
    };

export default Header;