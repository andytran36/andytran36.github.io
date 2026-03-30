const socialLinkClass =
  "text-gray transition-colors duration-500 hover:text-red focus:outline-none flex items-center justify-center p-1";

export default function Footer() {
  return (
    <footer className="bg-light shrink-0 border-t border-black/10 px-4 py-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
        <nav
          aria-label="Social links"
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-2xl sm:text-xl"
        >
          <a
            className={socialLinkClass}
            href="https://www.github.com/andytran36"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className={socialLinkClass}
            href="https://www.facebook.com/andytran36"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            className={socialLinkClass}
            href="https://www.instagram.com/andytran36"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className={socialLinkClass}
            href="https://www.linkedin.com/in/andytran36"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className={socialLinkClass}
            href="https://www.twitter.com/andytran36"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </nav>
        <p className="text-center text-sm text-black no-underline sm:text-base">
          Built by Andy Tran
        </p>
      </div>
    </footer>
  );
}
