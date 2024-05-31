import React from "react";

export default function LoadingPage() {
  return (
    <div>
      <div class="flex flex-col items-center">
        <div class="text-5xl font-semibold mb-3">Tailwind Loading Spinner</div>
        <div class="opacity-50 mb-8">
          Simple loading spinner using Tailwind CSS only.
        </div>
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            stroke="currentColor"
            stroke-width="4"
            cx="12"
            cy="12"
            r="10"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>

      <a
        href="https://chrome.google.com/webstore/detail/pkgejkfioihnchalojepdkefnpejomgn"
        target="_blank"
        class="absolute left-4 bottom-4 right-4 text-sm bg-white p-4 flex items-center"
      >
        <div class="flex items-center font-semibold">
          <img
            src="https://chroma.dev/img/icon.6a9c4cfa.svg"
            class="w-5 mr-4"
          />
          Chroma: Epic color tools for your browser.
        </div>
      </a>
    </div>
  );
}
