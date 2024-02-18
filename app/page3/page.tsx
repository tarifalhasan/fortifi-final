import { v1, v2, v3, v4, v5 } from "@/assets/images";
import DipositCard from "@/components/common/DipositCard";
import { DispositCardType } from "@/interfaces";

const Page2 = () => {
  const staticData: DispositCardType[] = [
    {
      icon: v1,
      name: "AVAX Vault",
      id: "#0001",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 USDC",
      assetsPrice: "$31,069.01",
      slug: "/page4",
    },
    {
      icon: v2,
      name: "BTC.b Vault",
      id: "#0002",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 USDC",
      assetsPrice: "$31,069.01",
      slug: "/page5",
    },
    {
      icon: v3,
      name: "Arbitrum Stability Vault",
      id: "#0003",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 USDC",
      assetsPrice: "$31,069.01",
      slug: "page6",
    },
    {
      icon: v4,
      name: "ETH Vault",
      id: "#0004",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 USDC",
      assetsPrice: "$31,069.01",
      slug: "page8",
    },
    {
      icon: v5,
      name: "Avalanche Stability Vault",
      id: "#0005",
      vaultTvl: "$80K",
      apy: "5.2%",
      myTvl: "0.0001 USDC",
      assetsPrice: "$31,069.01",
      slug: "page9",
    },
  ];
  return (
    <div className=" min-h-[80vh] h-full space-y-7 pt-5">
      {/* <div className="flex w-full justify-end">
        <div className=" px-4 w-full max-w-xl flex items-center justify-center   search rounded-full  h-[50px]">
          <input
            type="text"
            className="font-comforta text-white bg-transparent outline-none focus:outline-none text-t-18 font-bold flex-1"
            placeholder="Search"
          />
          <BiSearchAlt2 size={25} className="text-secondary" />
        </div>
      </div> */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 pt-10">
        {staticData.map((data) => (
          <DipositCard key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Page2;
