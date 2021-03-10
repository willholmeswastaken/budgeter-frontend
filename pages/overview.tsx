import Image from "next/image";
import Emoji from "../components/Emoji";

const Overview = () => (
  <div className="pt-10">
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
            <button className="absolute bottom-70 right-0 bg-green h-8 w-8 rounded-full text-white text-2xl font-mono border-4 border-white flex justify-center items-center">+</button>
          </div>
          <a>New</a>
        </li>
        <li className="flex flex-col items-center space-y-1 my-2 ml-1">
          <div className="bg-gradient-to-tr from-green-light to-green-dark p-1 rounded-full cursor-pointer">
            <a className="block bg-white p-1 rounded-full h-20 w-20 transform transition hover:-rotate-6">
              <Image
                src="/budgeter-logo.png"
                alt="Budgeter logo"
                height={100}
                width={100}
                className="object-contain md:object-scale-down"
              />
            </a>
          </div>
          <a className="font-semibold">Monzo</a>
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
