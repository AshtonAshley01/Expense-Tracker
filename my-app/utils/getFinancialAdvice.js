// // utils/getFinancialAdvice.js
// import OpenAI from "openai";

// // Initialize the OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// // Function to fetch user-specific data (mocked for this example)

// // Function to generate personalized financial advice
// const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
//   console.log(totalBudget, totalIncome, totalSpend);
//   try {
//     const userPrompt = `
//       Based on the following financial data:
//       - Total Budget: ${totalBudget} USD 
//       - Expenses: ${totalSpend} USD 
//       - Incomes: ${totalIncome} USD
//       Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
//     `;

//     // Send the prompt to the OpenAI API
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Process and return the response
//     const advice = chatCompletion.choices[0].message.content;

//     console.log(advice);
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };

// export default getFinancialAdvice;



// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

/**
 * Function to generate personalized financial advice using Gemini AI.
 * @param {number} totalBudget - Total budget of the user.
 * @param {number} totalIncome - Total income of the user.
 * @param {number} totalSpend - Total expenses of the user.
 * @returns {Promise<string>} - Financial advice message.
 */
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);

  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD
      - Expenses: ${totalSpend} USD
      - Income: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Get the Gemini AI model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate the response
    const response = await model.generateContent(userPrompt);
    const text = response.response.text(); // Extract text from response

    console.log(text);
    return text;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
