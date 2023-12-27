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
          <div className="hover:bg-[#64FFDA] w-56 rounded ">
            <button className="px-10 py-3 border-[1px] rounded text-[#64FFDA] border-[#64FFDA] hover:-translate-y-1 hover:-translate-x-1 bg-[#0A192F] transition ease-in-out w-56 font-mono">
              Download Resume
            </button>
          </div>
        </div>

        {/* hero main left */}
        <div className="fixed bottom-0 md:flex flex-col flex-wrap items-center justify-end gap-12 left-10 2xl:left-72 text-[#8892B0] hidden">
          {/* hero social link */}
          <div className="flex flex-col gap-7">
            <a
              href="https://github.com/MTouthang"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://twitter.com/ngtouthang"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://www.linkedin.com/in/ngamlenmangtouthang/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://leetcode.com/huebart16/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64FFDA] hover:-translate-y-1 transition ease-linear"
            >
              <svg
                viewBox="0 0 95 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 "
              >
                <title>Leetcode</title>
                <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
                ></path>
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
