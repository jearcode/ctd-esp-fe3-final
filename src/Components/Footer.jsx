const Footer = () => {
  return (
    <footer className="py-6 flex flex-col items-center space-y-4 bg-gray-200 dark:bg-neutral-950 text-black dark:text-white">
      <div className="flex items-center space-x-3">
      <img
          src="/images/DH.png"
          alt="DH-logo"
          className="w-12 h-auto dark:invert-50"
        />
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-sm font-light">
          © 2024 Digital House
        </p>
      </div>

      <div className="text-sm">
        <p>
          Desarrollado por{' '}
          <a
            href="https://www.digitalhouse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300"
          >
            Digital House
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
