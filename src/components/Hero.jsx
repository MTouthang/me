/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <>
      <main className="lg:h-[90vh]  md:py-16 relative mx-auto flex items-center justify-center 2xl:h-[90vh] ml-5 md:ml-0 mr-5 md:mr-0">
        {/* hero main body  */}
        <div className="w-full mx-auto md:w-2/3">
          <p className="text-[#64FFDA] font-medium font-mono pt-10 md:pt-0">
            Hi, my name is
          </p>
          <h1 className="font-extrabold md:leading-[65px] text-3xl md:text-6xl text-[#CCD6F6] font-sans">
            Ngamlenmang Touthang
            <br />
            <span className="text-[#8892B0] text-xl md:text3xl">
              I build things for the web.
            </span>
          </h1>
          <p className="md:py-8 py-6 md:text-xl text-[#8892B0]">
            As an Associate Developer specializing in crafting web applications,
            I am currently engaged in creating content, documentation, and
            developing web projects for individuals with a curiosity and
            enthusiasm for constructing web applications from the ground up. My
            focus extends to both the frontend and backend aspects of these
            applications.
          </p>
          <div className="hover:bg-[#64FFDA] w-56 rounded">
            <button className="px-10 py-3 border-2 rounded text-[#64FFDA] border-[#64FFDA] hover:-translate-y-1 hover:-translate-x-1 bg-[#0A192F] transition ease-in-out w-56 font-mono">
              Download Resume
            </button>
          </div>
        </div>

        {/* hero main left */}
        <div className="fixed bottom-0 md:flex flex-col flex-wrap items-center justify-end gap-8 left-10 2xl:left-72 text-[#8892B0] hidden">
          {/* hero social link */}
          <div className="flex flex-col gap-5">
            <a
              href="#git"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            <a
              href="#insta"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="#twitter"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>

            <a
              href="#linkedin"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a
              href="#codepen"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <title>CodePen</title>
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </a>
          </div>
          <div className="w-[0.5px] bg-white h-32"></div>
        </div>

        {/* hero main right  */}
        <div className="fixed bottom-0 flex-col items-center justify-end hidden md:flex right-2 2xl:right-64 gap-44">
          <a
            href="mailto:vinaypratapsingh@gmail.com"
            className="w-24 rotate-90 text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-2 transition ease-linear"
          >
            ngtouthang96@gmail.com
          </a>
          <div className="w-[0.5px] h-32 bg-white"></div>
        </div>
      </main>
    </>
  );
};

export default Hero;
