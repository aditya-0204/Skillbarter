import React from 'react';
import { Link } from 'react-router-dom';
import AddSkillModal from '../components/AddSkillModal.jsx'; // Note: This will need a state management solution to work here.

export default function Home(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Exchange skills. <span className="text-indigo-600">Learn faster.</span> Grow together.
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            Find people who can teach what you want to learn — and offer your skill in return.
            Post a skill, browse the marketplace, and request a barter.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link to="/browse" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold">Browse Skills</Link>
            {/* The AddSkillModal would typically be triggered by state, e.g. from a button in the Navbar when logged in */}
            {/* <AddSkillModal /> */}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <div className="text-2xl font-bold text-indigo-600">1k+</div>
              <div>Active users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">2k+</div>
              <div>Skills listed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <div>Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Featured Skills</h3>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 bg-indigo-50 dark:bg-slate-700/50 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-indigo-700 dark:text-indigo-300 font-semibold">UI/UX Design</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">By: jane@example.com • Intermediate</div>
                </div>
                <div>
                  <button className="px-3 py-1 bg-white dark:bg-slate-600 border dark:border-slate-500 rounded">View</button>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Python for Data Science</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">By: amit@example.com • Advanced</div>
                </div>
                <div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded">View</button>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-700/50 rounded border dark:border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-800 dark:text-gray-200 font-semibold">Guitar Basics</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">By: maya@example.com • Beginner</div>
                </div>
                <div>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">How it works</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md">
            <div className="text-xl font-semibold">1. Post a Skill</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Add what you can teach and what you want in return.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md">
            <div className="text-xl font-semibold">2. Browse & Connect</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Find the best match using search and filters.</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 text-center rounded-lg shadow-md">
            <div className="text-xl font-semibold">3. Barter & Learn</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Schedule sessions, leave ratings, and grow together.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
