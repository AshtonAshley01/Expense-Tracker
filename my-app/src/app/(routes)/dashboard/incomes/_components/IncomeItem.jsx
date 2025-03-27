// import Link from "next/link";
// import {useState,useEffect} from "react";
// import { useUser } from "@clerk/nextjs";
// import CreateIncomes from "./CreateIncomes";
// import { db } from "../../../../../../utils/dbConfig";
// import { desc, eq, getTableColumns, sql } from "drizzle-orm";
// import { Expenses, Incomes } from "../../../../../../utils/schema";

// function IncomeList() {
//   const [incomelist, setIncomelist] = useState([]);
//   const { user } = useUser();

//   useEffect(() => {
//     if (user) {
//       getIncomelist();
//     }
//   }, [user]);

//   const getIncomelist = async () => {
//     const result = await db
//       .select({
//         ...getTableColumns(Incomes),
//         totalSpend: sql`sum(CAST(${Expenses.amount} AS numeric))`.mapWith(Number),
//         totalItem: sql`count(${Expenses.id})`.mapWith(Number),
//       })
//       .from(Incomes)
//       .leftJoin(Expenses, eq(Incomes.id, Expenses.budgetId))
//       .where(eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress))
//       .groupBy(Incomes.id)
//       .orderBy(desc(Incomes.id));

//     setIncomelist(result);
//   };

//   return (
//     <div className="mt-7">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         <CreateIncomes refreshData={() => getIncomelist()} />
//         {incomelist?.length > 0
//           ? incomelist.map((budget, index) => (
//               <Income budget={budget} key={index} />
//             ))
//           : [1, 2, 3, 4, 5].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full bg-slate-200 rounded-lg h-[150px] animate-pulse"
//               ></div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default IncomeList;

import Link from "next/link";
import React from "react";

function IncomeItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  return (
    <div
      className="p-5 border rounded-2xl
    hover:shadow-md cursor-pointer h-[170px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
          >
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget.name}</h2>
            <h2 className="text-sm text-gray-500">{budget.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-primary text-lg"> ${budget.amount}</h2>
      </div>
    </div>
  );
}

export default IncomeItem;
