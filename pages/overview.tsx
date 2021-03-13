import { Line } from "react-chartjs-2";
import Dashlet from "../components/Dashlet";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Savings Valuation",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  title: {
    text: "Savings",
    display: true,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Overview = () => (
  <div className="pt-2">
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
      <div className="w-full max-w-3xl pt-10">
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
        <div className="-mx-2 md:flex">
          <Dashlet title="Spending Budget" value="£150" increase={null} />
          <Dashlet title="Utility In Budget" value="£20" increase={null} />
          <Dashlet title="Next Payday" value="In 10 Days" increase={null} />
        </div>
      </div>
      <div className="md:flex">
        <div className="w-full">
          <div className="rounded-lg shadow-sm mb-4">
            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
              <div className="py-5 px-3 h-full text-center relative z-10">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="w-full">
          <div className="rounded-lg shadow-sm mb-4">
            <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
              <div className="py-5 px-3 h-full text-center relative z-10">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
