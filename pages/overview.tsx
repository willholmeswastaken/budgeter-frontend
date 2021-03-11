import Image from "next/image";
import Link from "next/link";
import Emoji from "../components/Emoji";

const Overview = () => (
  <div className="pt-10">
    <button className="absolute right-10 bottom-10 text-white px-4 w-auto h-12 bg-green rounded-full hover:bg-green-dark active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
      <svg
        viewBox="0 0 20 20"
        enable-background="new 0 0 20 20"
        className="w-6 h-6 inline-block mr-1 mb-1"
      >
        <path
          fill="#FFFFFF"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
      <span className="pt-1">Update Balances</span>
    </button>
    <div className="flex flex-col relative px-4 mx-auto max-w-xl ">
      <ul className="flex space-x-6 bg-white rounded-lg shadow-sm">
        <li className="flex flex-col items-center space-y-1 my-2 ml-2">
          <div className="relative bg-gradient-to-tr from-green-light to-green-dark p-1 rounded-full cursor-pointer">
            <a className="block bg-white p-1 rounded-full h-20 w-20 transform transition hover:-rotate-6">
              <Image
                src="/budgeter-logo.png"
                alt="Budgeter logo"
                height={100}
                width={100}
                className="object-contain md:object-scale-down"
              />
            </a>
            <button className="absolute bottom-0 right-0 bg-green h-8 w-8 rounded-full text-white text-2xl font-mono border-4 border-white flex justify-center items-center">
              +
            </button>
          </div>
          <a>New</a>
        </li>
        <li className="flex flex-col items-center space-y-1 my-2 ml-1">
          <div className="bg-gradient-to-tr from-green-light to-green-dark p-1 rounded-full cursor-pointer">
            <Link href="/account">
              <a className="block bg-white p-1 rounded-full h-20 w-20 transform transition hover:-rotate-6">
                <Image
                  src="/budgeter-logo.png"
                  alt="Budgeter logo"
                  height={100}
                  width={100}
                  className="object-contain md:object-scale-down"
                />
              </a>
            </Link>
          </div>
          <Link href="/account">
            <a className="font-semibold">Monzo</a>
          </Link>
        </li>
      </ul>{" "}
      <div className="relative mt-5 justify-center bg-white shadow-lg rounded-lg py-2 hvr-float cursor-pointer">
        <div className="flex">
          <div className="px-2">
            <Image
              src="/budgeter-logo.png"
              alt="Budgeter logo"
              height={75}
              width={75}
              className="object-contain md:object-scale-down w-45"
            />
          </div>
          <div className="flex flex-col ml-5">
            <span className="w-2/5 flex items-center px-2 py-0.5 text-sm text-green-600 bg-green-100 rounded-full">
              <Emoji symbol="😃" label="smiley face" />
              <span className="px-1 font-semibold text-md">+£30</span>
            </span>
            <h1 className="font-semibold antialiased text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              You Saved £30
            </h1>
            <p className="text-base antialiased font-medium tracking-wide text-gray-600 mt-3">
              10/03/2021 2:30pm into Monzo
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
