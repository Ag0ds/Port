'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '../styles/constants';
import { SideNavItem} from '../styles/types';
import { Icon } from '@iconify/react';
import { useSession } from 'next-auth/react';


const SideNav = () =>{
  const { data: session } = useSession();
    return (
        <div className="md:w-60 bg-red-400 h-screen flex-1 fixed border-r border-black hidden md:flex">
          <div className="flex flex-col space-y-6 w-full">
            <Link
              href="/"
              className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6  h-12 w-full"
            >
              <h1 className='text-black font-sans'>Olá, <span className=' font-sans font-bold'>{session?.user?.name ?? 'Visitante'}</span></h1>
              {session?.user?.image ? (
            
            <img
              src={session.user.image}
              alt="User Avatar"
              className="h-10 w-10 rounded-full border-2 border-black"
            />
          ) : (
            // Exibe o fallback "HQ" se a imagem não estiver disponível
            <div className="h-8 w-8 rounded-full bg-zinc-300 flex items-center justify-center text-center">
              <span className="text-black font-sans">HQ</span>
            </div>
          )}
            </Link>
    
            <div className="flex flex-col space-y-2  md:px-6 ">
              {SIDENAV_ITEMS.map((item, idx) => {
                return <MenuItem key={idx} item={item} />;
              })}
            </div>
          </div>
        </div>
      );
    };

export default SideNav;


const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setSubMenuOpen(!subMenuOpen);
    };

const handleReload = (event: React.MouseEvent, path: string) => {

  setTimeout(() => {
    window.location.href = path; // Navega para a nova página
    window.location.reload(); // Recarrega a página
  }, 60);
};
  
    return (
      <div className="">
        {item.submenu ? (
          <>
            <button
              onClick={toggleSubMenu}
              className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between border-2 border-black hover:bg-transparent hover:border-minha-cor ${
                pathname.includes(item.path) ? 'bg-minha-cor' : ''
              }`}
            >
              <div className="flex flex-row space-x-4 items-center">
                {item.icon}
                <span className="text-black font-sans  flex">{item.title}</span>
              </div>
  
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                <Icon icon="lucide:chevron-down" width="24" height="24" />
              </div>
            </button>
  
            {subMenuOpen && (
              <div className="my-2 ml-12 flex flex-col space-y-4 ">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${
                        subItem.path === pathname ? 'font-bold' : ''
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 rounded-lg border-2 border-black hover:bg-transparent hover:border-minha-cor  ${
              item.path === pathname ? 'bg-minha-cor' : ''
            }`}
            onClick={(e) => handleReload(e, item.path)}
          >
            {item.icon}
            <span className="text-black font-sans">{item.title}</span>
          </Link>
        )}
      </div>
    );
  };