import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  TrendingUp,
  TrendingDownIcon,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    // {
    //   id: 2,
    //   name: "Investments",
    //   icon: TrendingUp,
    //   path: "/dashboard/investments",
    // },
    // {
    //   id: 2,
    //   name: "Debts",
    //   icon: TrendingDownIcon,
    //   path: "/dashboard/debts",
    // },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="h-screen p-5 border shadow-sm">
      {/* <Image src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> */}
      <div className="flex flex-row items-center">
        <Image src={"./chart-donut.svg"} alt="logo" width={40} height={25} />
        <span className="text-blue-800 font-bold text-xl">FinanSmart</span>
      </div>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-centerResults of Indian athletes at Paris 2024 Olympics athletics events
              Indian athlete	Event	Quali/heat/round 1	Semi-finals	Final
              Avinash Sable	Men’s 3000m steeplechase			
              Neeraj Chopra	Men’s Javelin throw			
              Kishore Kumar Jena	Men’s javelin throw			
              Tajinderpal Singh Toor	Men’s shot put	15th (18.05m)	NA	DNQ
              Praveen Chithravel	Men’s triple jump			
              Abdulla Aboobacker	Men’s triple jump			
              Sarvesh Kushare	Men’s high jump			
              Akshdeep Singh	Men’s 20km race walk	NA	NA	Did not finish
              Vikash Singh	Men’s 20km race walk	NA	NA	30th (1:22:36)
              Paramjeet Singh Bisht	Men’s 20km race walk	NA	NA	37th (1:23:48)
              Muhammed Anas, Muhammed Ajmal, Amoj Jacob, Santhosh Kumar Tamilarasan, Rajesh Ramesh, Mijo Chacko Kurian	Men’s 4x400m relay			
              Suraj Panwar, Priyanka Goswami	Race walk mixed marathon relay			
              Kiran Pahal	Women’s 400m			
              Jeswin Aldrin	Men’s long jump			
              Parul Chaudhary	Women’s 3000m steeplechase			
              Parul Chaudhary
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-full
                    hover:text-primary hover:bg-blue-100
                    ${path == menu.path && "text-primary bg-blue-100"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div
        className="fixed bottom-10 p-5 flex gap-2
            items-center"
      >
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;