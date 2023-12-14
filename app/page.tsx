/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CPe8fm0Tmp9
 */
"use client";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useState } from "react";

export default function Home() {
  "use client";
  return (
    <div>
      <NavBar />
      <Silver />
    </div>
  );
}

function Silver() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="p-6">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Transform Raw Text</h2>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="bg-white shadow rounded-lg p-4">
              <Textarea
                className="h-72 w-full max-w rounded-md border dark:text-white"
                placeholder="Your text here!"
              ></Textarea>
              <Button className="mt-4 px-4 py-2 w-full rounded-md text-white bg-gray-900 hover:bg-black">
                Convert Text
              </Button>
            </div>
            <div className="grid w-full gap-1.5 mt-4">
              <Label htmlFor="interpretation">Interpretation</Label>
              <KPITable />
              <p className="text-sm text-gray-500">
                This is the interpreted KPIs from the raw text.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const tableData = [
  { value: "Value 1", class: "Assets", validation: false },
  { value: "Value 2", class: "Assets", validation: false },
  // ... add more rows as needed
];

function KPITable() {
  const [rows, setRows] = useState(tableData);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Value</TableHead>
          <TableHead>Class</TableHead>
          <TableHead className="w-[250px]">Validation</TableHead>
          <TableHead className="w-[250px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.value}</TableCell>
            <TableCell>{row.class}</TableCell>
            <TableCell>
              {row.validation && <CheckIcon className="w-4 h-4" />}
            </TableCell>
            <TableCell>
              <button
                className={`px-2 py-1 text-white rounded-md w-24 ${
                  row.validation ? "bg-red-500" : "bg-green-500"
                }`}
                onClick={() => {
                  console.log("Button clicked");
                  setRows((prevRows) =>
                    prevRows.map((row, idx) =>
                      idx === index
                        ? { ...row, validation: !row.validation }
                        : row
                    )
                  );
                }}
              >
                {row.validation ? "Report" : "Validate"}
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function NavBar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-white shadow-md">
      <div className="flex w-full justify-center">
        <h1 className="text-2xl font-semibold">
          Structura: Where Text Transforms into Treasure
        </h1>
      </div>
    </header>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
