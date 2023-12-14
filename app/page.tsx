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
import { useCallback, useState } from "react";
import { useCompletion } from "ai/react";

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
  const { complete, completion } = useCompletion({
    api: "/api/completion",
  });
  const [content, setContent] = useState("");
  const kpis = parseCompletion(completion);
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
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></Textarea>
              <Button
                className="mt-4 px-4 py-2 w-full rounded-md text-white bg-gray-900 hover:bg-black"
                onClick={() => complete(content)}
              >
                Convert Text
              </Button>
            </div>
            <div className="grid w-full gap-1.5 mt-4">
              <Label htmlFor="interpretation">Interpretation</Label>
              <KPITable kpis={kpis} />
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

function parseCompletion(
  completionStr: string
): { value: string; className: string; validation: boolean }[] {
  const completionPairs = completionStr
    .trim()
    .split("\n")
    .map((line: any) => line.split("=>"));
  const kpis = completionPairs.reduce((acc: any, pair: any) => {
    if (pair.length === 2 && pair[0].trim() !== "0.0") {
      acc.push({
        value: pair[0].trim(),
        className: pair[1].trim(),
        validation: false,
      });
    }
    return acc;
  }, []);
  return kpis;
}

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const defaultArray: never[] = [];

function KPITable({
  kpis,
}: {
  kpis: { value: string; className: string; validation: boolean }[];
}) {
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
        {kpis.map((row, index) => (
          <Row value={row.value} className={row.className} key={index} />
        ))}
      </TableBody>
    </Table>
  );
}

function Row({ value, className }: { value: string; className: string }) {
  const [isValid, setIsValid] = useState(false);
  return (
    <TableRow>
      <TableCell>{value}</TableCell>
      <TableCell>{className}</TableCell>
      <TableCell>{isValid && <CheckIcon className="w-4 h-4" />}</TableCell>
      <TableCell>
        <button
          className={`px-2 py-1 text-white rounded-md w-24 ${
            isValid ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={() => {
            setIsValid((prev) => !prev);
          }}
        >
          {isValid ? "Report" : "Validate"}
        </button>
      </TableCell>
    </TableRow>
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
