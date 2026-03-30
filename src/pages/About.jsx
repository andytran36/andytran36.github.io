const buttonClass =
  'group relative mb-2 mr-8 inline-block h-10 w-[300px] border-2 overflow-hidden border-black overflow-hidden text-center text-base font-extrabold leading-10 text-black no-underline transition-colors duration-200 after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-0 after:bg-gray after:transition-all after:duration-200 after:content-[""] hover:text-light hover:after:w-full max-[400px]:mr-0 max-[400px]:w-full';

export default function About() {
  return (
    <div className="mx-auto w-3/4 max-w-4xl px-4 pt-20 pb-12">
      <h2 className="mb-5 text-2xl font-bold">A little bit about me</h2>
      <p className="mb-5 text-base leading-[30px]">
        I graduated with a Bachelor's degree in{" "}
        <strong>Software Engineering</strong> at the{" "}
        <a className="text-inherit" href="https://www.ucalgary.ca">
          <strong>University of Calgary</strong>
        </a>{" "}
        in Alberta, Canada.
      </p>

      <p className="mb-5 text-base leading-[30px]">
        I have been working profesionally as a software developer since 2021,
        primarily focused on front-end development.
      </p>
      <p className="mb-5 text-base leading-[30px]">
        Some of my interests include
        <strong> weightlifting, video games, and music.</strong> <br />I have
        been actively weightlifting since 2014, it's been an outlet for my
        energy and keeps me active in a field where we normally don't get much
        physical activity.
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
