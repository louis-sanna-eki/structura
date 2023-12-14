// app/api/completion/route.ts

import { OpenAI } from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const SYSTEM_PROMPT = `### Task
The task is to extract financial KPIs then classify them.
The classes are: ['Accounting Policies and Estimates', 'Assets', 'Business Combinations', 'Cash Flow', 'Commitments and Contingencies', 'Employee Benefits', 'Equity', 'Expenses', 'Fair Value Measurements', 'Financial Instruments', 'Financial Performance', 'Financial Position', 'Intangible Assets', 'Investment and Equity Interests', 'Liabilities', 'Property, Plant, and Equipment', 'Regulatory Items', 'Related Party Transactions', 'Revenue', 'Risk Management', 'Segment Reporting', 'Shareholder Transactions', 'Taxation']
Your answer MUST be of the form (one line per KPI): "NUMBER=>CLASS\n"

### Example text
As a result of adoption , the Company recognized approximately $ 279.9 million of operating ROU assets and approximately $ 333.5 million of operating lease liabilities as of January 1 , 2019 . NOTE 3 - ACQUISITIONS AND DISPOSITIONS Empire City Acquisition As discussed in Note 1 , on January 29 , 2019 , the Company acquired the developed real property associated with Empire City from MGM for fair value consideration of approximately $ 634.4 million .

### Example response
279.9=>Assets
333.5=>Liabilities
634.4=>Business Combinations
`;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

function buildPrompt(prompt: string): any[] {
  return [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: prompt },
  ];
}

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: buildPrompt(prompt),
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
