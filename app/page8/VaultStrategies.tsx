"use client";
import DemoPie from "@/components/common/PieChart";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const data: any[] = [
  {
    type: "ETH",
    value: 45,
    color: "#00bbfe",
  },
  {
    type: "rETH",
    value: 22.5,
    color: "#ff4900",
  },
  {
    type: "wstETH",
    value: 22.5,
    color: "#dddf00",
  },
  // {
  //   type: "WETH(Silo swETH))",
  //   value: 25,
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
              $ETH Vault (arbifETH)
              </h3>
              <p className=" text-t-16 text-darken font-medium">
              The Ethereum Vault on Arbitrum is designed to be a yield-bearing SAMS Vault comprised of 100% exposure to ETH and ETH derivatives. arbiETH accrues yield from Yield Yak, Delta Prime, and Silo Finance.
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
