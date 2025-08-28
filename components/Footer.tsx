import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-16 text-center mt-32 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900/60 dark:to-gray-950/40 border-t border-white/20 dark:border-white/10">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="glass-card inline-block px-8 py-6 rounded-2xl">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-2">
            AGENTS.md
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            An open-source community project
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 font-light">
          Built with ❤️ by the community
        </p>
      </div>
    </footer>
  );
}
