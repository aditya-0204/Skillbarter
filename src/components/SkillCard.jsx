import React from 'react';
import { BookOpen, Trash2 } from 'lucide-react';

// The component now accepts an `onDelete` function as a prop
export default function SkillCard({ skill, onDelete }) {
  if (!skill) {
    return null;
  }

  // Helper function to assign a color based on the skill's level
  const getBadgeColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'advanced':
        return 'bg-red-50 text-red-700';
      case 'intermediate':
        return 'bg-amber-50 text-amber-800';
      case 'beginner':
        return 'bg-green-50 text-green-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
      <div className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            Peer skill
          </span>
          {skill.level && (
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getBadgeColor(skill.level)}`}>
              {skill.level}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col">
          <h3 className="text-xl font-bold leading-snug text-slate-900">{skill.title}</h3>
          <p className="mt-3 flex-1 break-words text-sm leading-6 text-slate-600">{skill.description}</p>
        </div>

        {onDelete && (
          <button
            onClick={() => onDelete(skill)}
            className="mt-5 inline-flex items-center justify-center gap-2 self-start rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
            Delete Skill
          </button>
        )}
      </div>
    </article>
  );
}
