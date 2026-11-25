import React from 'react';

export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium leading-5 text-slate-600">{title}</p>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}
