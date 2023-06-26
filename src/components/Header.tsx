import Image from "next/image";
import icon from "../assets/small-icon.png";

export default function Header() {
  return (
    <>
      <div className="grotesk mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6 bg-dark font-rajdhani">
        <div className="mt-4 pb-4 pl-8 flex flex-row justify-center items-center">
          <a href="/" className="flex items-center">
            <Image alt="icone" src={icon} className="h-8 w-8 mr-3" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary font-rajdhani">
              Tech
            </span>
          </a>
          <div className="hidden pl-14 align-middle xl:inline-block justify-center items-center">
            <a
              href="/"
              className="mr-12 text-xl text-primary items-center justify-center hover:border-2"
            >
              Review
            </a>
            <a
              href="/"
              className="pr-12 text-xl text-primary items-center justify-center"
            >
              Tips
            </a>
            <a
              href="/"
              className="pr-12 text-xl text-primary items-center justify-center"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <button className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
