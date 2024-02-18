"use client";
import DemoPie from "@/components/common/PieChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const data: any[] = [
  {
    type: "USDC",
    value: 47,
    color: "#75dcff",
  },
  {
    type: "DAI",
    value: 29,
    color: "#ede61a",
  },
  {
    type: "GLP ",
    value: 24,
    color: "#3c00ff",
  },
  // {
  //   type: "YAK",
  //   value: 20,
  //   color: "lightblue",
  // },
];

const VaultStrategies = () => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div>
      <div className="flex justify-center">
        <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
          <Button
            onClick={() => setTabIndex(1)}
            className="h-[55px] !rounded-b-none rounded-[15px]"
          >
            Vault Strategies
          </Button>
          <Button
            onClick={() => setTabIndex(2)}
            className="h-[55px] !rounded-b-none rounded-[15px]"
            variant={"secondary"}
          >
            Contract Information
          </Button>
        </div>
      </div>
      <div
        className={`  relative z-40 overflow-hidden -mt-[4px] p-5  bg-[#fff] border border-bb  rounded-[15px] card space-y-5`}
      >
        {tabIndex === 1 ? (
          <div className=" flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="basis-[45%] space-y-5">
              <h3 className=" text-t-22 text-darken font-extrabold">
              Arbitrum Stability Vault (arbifSV)
              </h3>
              <p className=" text-t-16 text-darken font-medium">
              The Arbitrum Stability Vault is designed to be a yield-bearing MASS Vault comprised of ~90% Stablecoin exposure. arbiSV accrues yield from GMX, Delta Prime, and Silo Finance.
              </p>
              <div style={{ textAlign: "center" }}>
                <Button className="bg-darken h-[50px]">Learn More</Button>
              </div>
            </div>
            {/* Pie Chart */}
            <DemoPie items={data} />
          </div>
        ) : (
          <p className=" text-t-22 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            necessitatibus iste amet. Eos hic, dignissimos veritatis iure id
            earum! Consequuntur impedit corrupti provident optio aliquam.
          </p>
        )}
      </div>
    </div>
  );
};

export default VaultStrategies;
