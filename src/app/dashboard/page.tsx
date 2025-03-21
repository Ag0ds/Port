// ❌ REMOVA O "use client" no topo

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, StarIcon, CodeIcon, ExternalLinkIcon } from "lucide-react"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogOutBtn } from "@/components/LogOutBtn";
import "./lobby.css";
import React from "react";

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  created_at: string
  updated_at: string
  stargazers_count: number
  forks_count: number
}

async function getRepos(): Promise<Repository[]> {
  const res = await fetch("https://api.github.com/users/Ag0ds/repos", {
    cache: "no-store",
  });
  return res.json();
}

export default async function GitHubPage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  const repos = await getRepos();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-red-500 border-b border-red-500 pb-2">GitHub Repositories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="bg-zinc-800 border border-zinc-700 hover:border-red-500 transition-all duration-300 overflow-hidden"
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block p-5 h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-red-400 truncate mr-2">{repo.name}</h3>
                  <div className="flex items-center text-yellow-400">
                    <StarIcon size={16} className="mr-1" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>

                {repo.description && (
                  <p className="text-zinc-300 mb-4 line-clamp-2 text-sm">{repo.description}</p>
                )}

                <div className="mt-auto space-y-3">
                  {repo.language && (
                    <div className="flex items-center">
                      <CodeIcon size={14} className="mr-2 text-zinc-400" />
                      <Badge variant="outline" className="bg-zinc-700 text-zinc-200">
                        {repo.language}
                      </Badge>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>Created: {formatDate(repo.created_at)}</span>
                    </div>

                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>Updated: {formatDate(repo.updated_at)}</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-2">
                    <ExternalLinkIcon size={16} className="text-red-400" />
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <LogOutBtn />
        </div>
      </div>
    </div>
  );
}
