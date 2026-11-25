import React from 'react';
import { KeyRound, Mail } from 'lucide-react';

export default function ProfileCard({ profile, onOpenChangePassword }) {
  return (
    <div className="rounded-xl border border-slate-200 border-t-4 border-t-blue-700 bg-white p-5 shadow-sm sm:p-6">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">Your profile</p>
      <div className="mb-5 flex items-center gap-4">
        <img
          src={
            profile.photoURL ||
            profile.avatar ||
            "https://www.gravatar.com/avatar?d=mp"
          }
          alt={profile.displayName || "User Avatar"}
          className="h-16 w-16 shrink-0 rounded-full border border-slate-200 object-cover"
        />

        <div className="min-w-0">
          <h3 className="truncate text-xl font-bold text-slate-900">
            {profile.displayName || "Unnamed User"}
          </h3>
          <p className="mt-1 flex min-w-0 items-center gap-1.5 text-sm text-slate-500">
            <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span className="truncate">{profile.email}</span>
          </p>
        </div>
      </div>

      <button
        onClick={onOpenChangePassword}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-800 transition-colors hover:bg-slate-50"
      >
        <KeyRound aria-hidden="true" className="h-4 w-4" />
        Change Password
      </button>
    </div>
  );
}
