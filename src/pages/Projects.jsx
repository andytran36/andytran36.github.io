const buttonClass =
  'group relative mb-2 mr-8 inline-block h-10 w-[300px] border-2 overflow-hidden border-black overflow-hidden text-center text-base font-extrabold leading-10 text-black no-underline transition-colors duration-200 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-0 after:bg-gray after:transition-all after:duration-200 after:content-[""] hover:text-light hover:after:w-full max-[400px]:mr-0 max-[400px]:w-full';

export default function Projects() {
  return (
    <div className="mx-auto w-3/4 max-w-4xl px-4 pt-20 pb-12">
      <h2 className="mb-5 text-2xl font-bold">Some projects I've worked on</h2>
      <h3 className="inline-block">Chumby Survivors</h3>{" "}
      <a
        className="hover:text-red transition-colors duration-500"
        href="https://github.com/andytran36/chumby-survivors"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <p className="mb-5 text-base leading-[30px]">
        This was a for-fun project done in Lua, creating a Vampire
        Survivors-esque game from scratch.
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
