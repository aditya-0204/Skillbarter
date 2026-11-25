import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import AuthModal from '../components/AuthModal.jsx';

const featuredSkills = [
  {
    title: 'UI/UX Design',
    instructor: 'jane@example.com',
    category: 'Design',
    level: 'Intermediate',
    featured: true,
  },
  {
    title: 'Python for Data Science',
    instructor: 'amit@example.com',
    category: 'Technology',
    level: 'Advanced',
  },
  {
    title: 'Guitar Basics',
    instructor: 'maya@example.com',
    category: 'Music',
    level: 'Beginner',
  },
];

const communityStats = [
  { value: '1k+', label: 'Active learners' },
  { value: '2k+', label: 'Skills shared' },
  { value: '95%', label: 'Learner satisfaction' },
];

const steps = [
  {
    number: '01',
    title: 'Share what you know',
    description: 'List a skill you can teach and the topics you enjoy helping others learn.',
  },
  {
    number: '02',
    title: 'Find your match',
    description: 'Explore the community catalog and connect with someone whose skills fit your goals.',
  },
  {
    number: '03',
    title: 'Learn by exchanging',
    description: 'Arrange a session, trade knowledge, and make progress together.',
  },
];

export default function Home() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleBrowseClick = () => {
    if (currentUser) {
      navigate('/browse');
      return;
    }
    setIsAuthModalOpen(true);
  };

  return (
    <>
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="py-2 lg:col-span-7">
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-900">
            A community built around learning together
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Exchange skills. <span className="text-blue-700">Learn faster.</span> Grow together.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Find people who can teach what you want to learn—and offer your skill in return.
            Post a skill, browse the marketplace, and request a swap.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleBrowseClick}
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
            >
              Browse Skills
            </button>
            <span className="text-sm text-slate-500">Learn from peers. Share what you know.</span>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-white px-2 py-4 shadow-sm sm:px-4">
            {communityStats.map((stat) => (
              <div key={stat.label} className="px-2 text-center sm:px-4">
                <div className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs leading-4 text-slate-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-5" aria-labelledby="featured-skills-title">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Start exploring</p>
              <h2 id="featured-skills-title" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Featured skills</h2>
            </div>
            <span className="hidden rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 sm:inline-flex">Community picks</span>
          </div>

          <div className="space-y-3">
            {featuredSkills.map((skill) => (
              <article key={skill.title} className={`rounded-xl border p-4 transition-colors hover:border-blue-200 ${skill.featured ? 'border-blue-100 bg-blue-50' : 'border-slate-200 bg-white'}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">{skill.title}</h3>
                      <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">{skill.category}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">Instructor <span className="font-medium text-slate-700">{skill.instructor}</span></p>
                  </div>
                  <button type="button" onClick={handleBrowseClick} className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-200 hover:bg-blue-50">
                    View
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-slate-200 pt-3">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">Level</span>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">{skill.level}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">A few ways to begin learning with the community</p>
        </aside>
      </section>

      <section className="mt-14 sm:mt-16" aria-labelledby="how-it-works-title">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Simple by design</p>
            <h2 id="how-it-works-title" className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How SkillSwap works</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Build practical knowledge through a balanced exchange with another learner.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
    {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />}
    </>
  );
}
