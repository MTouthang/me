// import myLogo from "../assets/my-logo.svg"
const Navbar = () => {
  return (
    <>
      <header className="px-5 py-5 md:px-10">
        <nav className="flex items-center justify-between font-mono text-[#CCD6F6]">
          {/* nav logo */}
          <div className="bg-[#64FFDA] rounded-sm ">
            <svg
              className="bg-[#0A192F] transition ease-in-out  rounded-sm md:h-auto hover:-translate-y-1 hover:-translate-x-1 border-[1px] border-[#64FFDA]"
              width="80"
              height="30"
              viewBox="0 0 52 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.552 11V10.148H15.684C15.852 10.148 15.996 10.136 16.116 10.112C16.244 10.088 16.344 10.044 16.416 9.98C16.488 9.916 16.524 9.828 16.524 9.716V3.764C16.524 3.644 16.488 3.556 16.416 3.5C16.344 3.436 16.244 3.392 16.116 3.368C15.996 3.344 15.852 3.332 15.684 3.332H15.552V2.48H19.188L21.228 9.14L20.892 8.768L22.908 2.48H26.448V3.332H26.316C26.156 3.332 26.012 3.344 25.884 3.368C25.756 3.392 25.656 3.436 25.584 3.5C25.512 3.556 25.476 3.644 25.476 3.764V9.716C25.476 9.828 25.512 9.916 25.584 9.98C25.656 10.044 25.756 10.088 25.884 10.112C26.012 10.136 26.156 10.148 26.316 10.148H26.448V11H22.764V10.148H22.86C22.964 10.148 23.076 10.144 23.196 10.136C23.316 10.128 23.42 10.116 23.508 10.1C23.604 10.076 23.652 10.052 23.652 10.028V2.756L23.772 2.696L21.06 11.048H20.064L17.364 2.708L17.496 2.684V10.028C17.496 10.052 17.536 10.076 17.616 10.1C17.704 10.116 17.808 10.128 17.928 10.136C18.048 10.144 18.152 10.148 18.24 10.148H18.3V11H15.552ZM31.7886 7.004V7.748C31.3566 7.82 30.9886 7.896 30.6846 7.976C30.3886 8.056 30.1446 8.144 29.9526 8.24C29.7606 8.336 29.6126 8.44 29.5086 8.552C29.4046 8.656 29.3326 8.776 29.2926 8.912C29.2526 9.04 29.2326 9.18 29.2326 9.332C29.2326 9.556 29.2686 9.736 29.3406 9.872C29.4206 10 29.5286 10.096 29.6646 10.16C29.8086 10.224 29.9766 10.256 30.1686 10.256C30.3606 10.256 30.5406 10.212 30.7086 10.124C30.8846 10.036 31.0606 9.896 31.2366 9.704C31.4126 9.512 31.5926 9.26 31.7766 8.948L31.8486 9.524C31.6806 9.884 31.4886 10.184 31.2726 10.424C31.0566 10.664 30.8126 10.844 30.5406 10.964C30.2766 11.076 29.9686 11.132 29.6166 11.132C29.1846 11.132 28.8166 11.072 28.5126 10.952C28.2086 10.824 27.9766 10.632 27.8166 10.376C27.6566 10.12 27.5766 9.796 27.5766 9.404C27.5766 9.06 27.6486 8.764 27.7926 8.516C27.9446 8.268 28.1846 8.052 28.5126 7.868C28.8406 7.684 29.2726 7.524 29.8086 7.388C30.3446 7.244 31.0046 7.116 31.7886 7.004ZM31.8846 11L31.6926 9.62L31.6206 9.596V6.14C31.6206 5.924 31.5886 5.748 31.5246 5.612C31.4686 5.468 31.3606 5.364 31.2006 5.3C31.0406 5.228 30.8086 5.192 30.5046 5.192C30.0726 5.192 29.7166 5.244 29.4366 5.348C29.1566 5.452 28.9606 5.56 28.8486 5.672C28.8086 5.632 28.7926 5.58 28.8006 5.516C28.8166 5.452 28.8486 5.392 28.8966 5.336C28.9526 5.272 29.0246 5.22 29.1126 5.18C29.2006 5.14 29.3086 5.12 29.4366 5.12V6.56H27.9486V4.988C28.0686 4.9 28.2486 4.804 28.4886 4.7C28.7366 4.596 29.0406 4.504 29.4006 4.424C29.7606 4.336 30.1766 4.292 30.6486 4.292C31.0566 4.292 31.4246 4.332 31.7526 4.412C32.0886 4.484 32.3726 4.596 32.6046 4.748C32.8446 4.9 33.0246 5.1 33.1446 5.348C33.2726 5.596 33.3366 5.888 33.3366 6.224V9.74C33.3366 9.836 33.3646 9.912 33.4206 9.968C33.4846 10.016 33.5726 10.056 33.6846 10.088C33.7966 10.112 33.9366 10.14 34.1046 10.172L34.1886 10.196V11H31.8846ZM34.9091 11V10.268H34.9451C35.1211 10.268 35.2691 10.248 35.3891 10.208C35.5091 10.168 35.6011 10.096 35.6651 9.992C35.7291 9.888 35.7611 9.748 35.7611 9.572V5.72C35.7611 5.624 35.7331 5.552 35.6771 5.504C35.6291 5.448 35.5491 5.404 35.4371 5.372C35.3251 5.34 35.1851 5.308 35.0171 5.276L34.9091 5.252V4.424H37.2611L37.4531 5.888L37.5011 5.936V10.16C37.5011 10.184 37.5371 10.204 37.6091 10.22C37.6891 10.236 37.7811 10.248 37.8851 10.256C37.9971 10.264 38.0931 10.268 38.1731 10.268H38.2331V11H34.9091ZM42.6131 11H39.3011V10.268H39.3491C39.4371 10.268 39.5331 10.268 39.6371 10.268C39.7491 10.26 39.8411 10.248 39.9131 10.232C39.9851 10.208 40.0211 10.184 40.0211 10.16V6.284C40.0211 6.084 39.9931 5.92 39.9371 5.792C39.8891 5.656 39.8051 5.556 39.6851 5.492C39.5651 5.42 39.4011 5.384 39.1931 5.384C38.9771 5.384 38.7571 5.436 38.5331 5.54C38.3171 5.644 38.1011 5.804 37.8851 6.02C37.6771 6.228 37.4571 6.496 37.2251 6.824L37.2491 6.044C37.4571 5.684 37.6931 5.376 37.9571 5.12C38.2291 4.856 38.5251 4.652 38.8451 4.508C39.1731 4.356 39.5211 4.28 39.8891 4.28C40.2891 4.28 40.6291 4.352 40.9091 4.496C41.1891 4.64 41.4011 4.852 41.5451 5.132C41.6971 5.412 41.7731 5.756 41.7731 6.164V9.572C41.7731 9.748 41.8051 9.888 41.8691 9.992C41.9331 10.096 42.0251 10.168 42.1451 10.208C42.2651 10.248 42.4091 10.268 42.5771 10.268H42.6131V11ZM50.9658 5.408C50.6218 5.368 50.3218 5.344 50.0658 5.336C49.8178 5.32 49.5978 5.32 49.4058 5.336C49.2218 5.344 49.0458 5.368 48.8778 5.408L48.6378 5.468C48.7498 5.196 48.8738 4.96 49.0098 4.76C49.1538 4.552 49.3178 4.384 49.5018 4.256C49.6858 4.12 49.8938 4.028 50.1258 3.98C50.3658 3.932 50.6458 3.92 50.9658 3.944V5.408ZM46.7298 8.912C46.1538 8.912 45.6538 8.82 45.2298 8.636C44.8058 8.452 44.4738 8.188 44.2338 7.844C44.0018 7.5 43.8858 7.092 43.8858 6.62C43.8858 6.156 44.0018 5.748 44.2338 5.396C44.4738 5.044 44.8058 4.772 45.2298 4.58C45.6618 4.388 46.1618 4.292 46.7298 4.292C47.3058 4.292 47.8098 4.388 48.2418 4.58C48.6738 4.772 49.0058 5.044 49.2378 5.396C49.4778 5.748 49.5978 6.156 49.5978 6.62C49.5978 7.092 49.4778 7.5 49.2378 7.844C49.0058 8.188 48.6738 8.452 48.2418 8.636C47.8178 8.82 47.3138 8.912 46.7298 8.912ZM46.7298 8.108C47.0178 8.108 47.2498 8.056 47.4258 7.952C47.6018 7.848 47.7298 7.688 47.8098 7.472C47.8978 7.248 47.9418 6.968 47.9418 6.632C47.9418 6.288 47.8978 6.004 47.8098 5.78C47.7298 5.556 47.6018 5.392 47.4258 5.288C47.2498 5.176 47.0178 5.12 46.7298 5.12C46.4578 5.12 46.2338 5.176 46.0578 5.288C45.8818 5.392 45.7498 5.556 45.6618 5.78C45.5738 6.004 45.5298 6.288 45.5298 6.632C45.5298 6.968 45.5698 7.248 45.6498 7.472C45.7378 7.688 45.8698 7.848 46.0458 7.952C46.2298 8.056 46.4578 8.108 46.7298 8.108ZM45.7218 13.976C45.1858 13.976 44.7258 13.928 44.3418 13.832C43.9658 13.736 43.6738 13.584 43.4658 13.376C43.2658 13.176 43.1658 12.912 43.1658 12.584C43.1658 12.336 43.2258 12.124 43.3458 11.948C43.4658 11.772 43.6538 11.612 43.9098 11.468C44.1658 11.332 44.5018 11.192 44.9178 11.048L45.2658 11.276C45.0738 11.404 44.9258 11.524 44.8218 11.636C44.7178 11.756 44.6458 11.872 44.6058 11.984C44.5658 12.104 44.5458 12.236 44.5458 12.38C44.5458 12.54 44.5898 12.676 44.6778 12.788C44.7738 12.908 44.9258 12.996 45.1338 13.052C45.3498 13.116 45.6338 13.148 45.9858 13.148H47.4138C47.7978 13.148 48.1138 13.108 48.3618 13.028C48.6178 12.948 48.8058 12.832 48.9258 12.68C49.0458 12.528 49.1058 12.336 49.1058 12.104C49.1058 11.912 49.0458 11.764 48.9258 11.66C48.8138 11.556 48.6178 11.504 48.3378 11.504H45.0138L45.0978 11.396C44.7698 11.348 44.4898 11.268 44.2578 11.156C44.0338 11.044 43.8658 10.896 43.7538 10.712C43.6418 10.528 43.5858 10.312 43.5858 10.064C43.5858 9.808 43.6498 9.576 43.7778 9.368C43.9138 9.16 44.1018 8.972 44.3418 8.804C44.5898 8.636 44.8858 8.48 45.2298 8.336L45.6738 8.564C45.5058 8.684 45.3658 8.796 45.2538 8.9C45.1418 9.004 45.0618 9.104 45.0138 9.2C44.9658 9.288 44.9418 9.388 44.9418 9.5C44.9418 9.676 45.0018 9.804 45.1218 9.884C45.2498 9.956 45.4418 9.992 45.6978 9.992H48.4578C48.9138 9.992 49.3018 10.056 49.6218 10.184C49.9418 10.304 50.1818 10.492 50.3418 10.748C50.5098 10.996 50.5938 11.312 50.5938 11.696C50.5938 12.208 50.4578 12.632 50.1858 12.968C49.9138 13.312 49.5418 13.564 49.0698 13.724C48.5978 13.892 48.0658 13.976 47.4738 13.976H45.7218Z"
                fill="#CCD6F6"
              />
              <rect
                x="2.25"
                y="2.25"
                width="12.5"
                height="9.5"
                stroke="#CCD6F6"
                strokeWidth="0.5"
              />
              <line
                x1="2"
                y1="4.75"
                x2="15"
                y2="4.75"
                stroke="#CCD6F6"
                strokeWidth="0.5"
              />
              <circle cx="7.5" cy="3.5" r="0.5" fill="#CCD6F6" />
              <circle cx="5.5" cy="3.5" r="0.5" fill="#CCD6F6" />
              <circle cx="3.5" cy="3.5" r="0.5" fill="#CCD6F6" />
              <path
                d="M5.892 6.496V7.132L3.774 8.116L3.468 8.038V7.666L5.892 6.496ZM5.892 8.806V9.484L3.468 8.314V7.894L3.78 7.822L5.892 8.806ZM9.93942 5.32L6.99342 10.948H6.36942L9.31542 5.32H9.93942ZM10.4172 9.484V8.848L12.5352 7.864L12.8412 7.942V8.314L10.4172 9.484ZM10.4172 7.174V6.496L12.8412 7.666V8.086L12.5292 8.158L10.4172 7.174Z"
                fill="#CCD6F6"
              />
            </svg>
          </div>

          {/* nav menu items and button  */}
          <div className="flex items-center gap-5">
            <ol className="md:flex gap-6 text-[#CCD6F6] hidden lg:contents">
              <li>
                <a href="#contact" className="hover:text-[#64FFDA]">
                  About
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-[#64FFDA]">
                  Experience
                </a>
              </li>

              <li>
                <a href="#work" className="hover:text-[#64FFDA]">
                  Work
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#64FFDA]">
                  Contact
                </a>
              </li>
            </ol>
            <div className="form-control">
              <input
                type="checkbox"
                value="synthwave"
                className="toggle toggle-accent theme-controller"
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
