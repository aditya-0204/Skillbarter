import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function PublicSkillCard({ skill, onSwapRequest }) {
  if (!skill) return null;

  // ✅ Use userAvatar (consistent with getAllSkills)
  const userAvatar = skill.userAvatar || `https://placehold.co/100x100/e2e8f0/333?text=?`;
  const userName = skill.userName || 'Unknown User';
  const title = skill.title || 'Untitled Skill';
  const description = skill.description || 'No description available.';

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="flex h-full flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            Peer skill
          </span>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">1-on-1 swap</span>
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-bold leading-snug text-slate-900">{title}</h3>
          <p className="mt-3 line-clamp-2 break-words text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              className="h-9 w-9 shrink-0 rounded-full border border-slate-200 object-cover"
              src={userAvatar}
              alt={userName}
            />
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Instructor</p>
              <p className="truncate text-sm font-semibold text-slate-800">{userName}</p>
            </div>
          </div>
          <button
            onClick={() => onSwapRequest(skill.userId, skill)}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Request Swap
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
