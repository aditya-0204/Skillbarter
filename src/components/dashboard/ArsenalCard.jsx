import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function ArsenalCard({ skills }) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
            <BookOpen aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Skill library</p>
            <h3 className="text-xl font-bold text-slate-900">Your Arsenal</h3>
          </div>
        </div>
        <Link to="/browse" className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800">
          Find Skills to Barter
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
      <div className="space-y-4">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div key={index} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-blue-800">
                <BookOpen aria-hidden="true" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h4 className="text-lg font-semibold text-slate-900">{skill.title}</h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">{skill.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-slate-500">You haven't added any skills yet. Go to your profile to build your arsenal!</p>
        )}
      </div>
    </div>
  );
}
