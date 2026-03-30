const buttonClass =
  'group relative mb-2 mr-8 inline-block h-10 w-[300px] border-2 overflow-hidden border-black overflow-hidden text-center text-base font-extrabold leading-10 text-black no-underline transition-colors duration-200 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-0 after:bg-gray after:transition-all after:duration-200 after:content-[""] hover:text-light hover:after:w-full max-[400px]:mr-0 max-[400px]:w-full';

export default function Work() {
  return (
    <div className="mx-auto w-3/4 max-w-4xl px-4 pt-20 pb-12">
      <h2 className="mb-5 text-2xl font-bold">Work experience</h2>

      {/* Soteria */}
      <h3 className="text-xl">WestJet - Airline Operations</h3>
      <p className="text-gray text-sm">October 2025 - Present</p>
      <p className="mb-2 text-sm font-semibold">Vue3, TypeScript, Vite</p>
      <p className="mb-8 text-base">
        Worked on internal ERP tool, leading changes for overall code quality
        improvements and developing new features.
      </p>

      {/* DCI */}
      <h3 className="text-xl">WestJet - Check In</h3>
      <p className="text-gray text-sm">May 2021 - October 2025</p>
      <p className="mb-2 text-sm font-semibold">Vue3, TypeScript, Vite</p>
      <p className="mb-5 text-base">
        Maintained the web-based check-in application for flights. Contributing
        to a complete UI refresh and migration from Vue 2 to Vue 3.
      </p>

      {/* Contact buttons */}
      <div className="py-5">
        <a
          className={buttonClass}
          href="/files/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="relative z-10">MY RESUME</span>
        </a>
        <a className={buttonClass} href="mailto:andytran636@gmail.com">
          <span className="relative z-10">EMAIL ME</span>
        </a>
      </div>
    </div>
  );
}
