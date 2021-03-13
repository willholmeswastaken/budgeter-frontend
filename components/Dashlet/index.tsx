interface IDashletChange {
  isPositive: boolean;
  change: string;
}

interface IDashletProps {
  title: string;
  value: string;
  increase: IDashletChange;
}

const Dashlet = (props: IDashletProps) => (
  <div className="w-full md:w-1/3 px-2">
    <div className="rounded-lg shadow-sm mb-4">
      <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
        <div className="px-3 pt-8 pb-10 text-center relative z-10">
          <h4 className="text-sm uppercase text-gray-500 leading-tight">
            {props.title}
          </h4>
          <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
            {props.value}
          </h3>

          {props.increase && (
            <p
              className={`text-xs ${
                props.increase.isPositive ? "text-green-500" : "text-red-500"
              } leading-tight`}
            >
              {props.increase.isPositive ? "▲" : "▼"} {props.increase.change}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Dashlet;
