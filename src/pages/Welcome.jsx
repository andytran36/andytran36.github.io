import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="bg-gray text-light flex min-h-full w-full flex-col items-center justify-center px-4 py-8">
      <img
        className="border-light block aspect-square max-h-[35vh] w-auto rounded-full border-4 border-solid"
        src="/files/portrait.jpg"
        alt=""
      />
      <h1 className="mt-4 text-center text-4xl md:text-5xl">
        Hi there! I'm Andy Tran
      </h1>
      <p className="text-red text-[1.4rem] font-light">
        <i>Software Developer</i>
      </p>
      <p className="mt-6 text-[1.15rem] font-medium">
        <Link
          to="/about"
          className="text-light decoration-light underline underline-offset-4 hover:opacity-70"
        >
          About me →
        </Link>
      </p>
    </div>
  );
}
