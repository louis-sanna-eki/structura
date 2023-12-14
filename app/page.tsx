/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CPe8fm0Tmp9
 */
"use client";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Silver />
    </div>
  );
}

function Silver() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Raw Text and Interpretation</h2>
        </CardHeader>
        <CardContent className="p-4">
          <ScrollArea className="h-72 w-full max-w-sm rounded-md border">
            <div className="p-4 text-sm">
              <h3 className="mb-4 text-lg font-medium leading-none">
                Raw Text
              </h3>
              <p className="mt-4 leading-7">Here goes the raw text</p>
            </div>
          </ScrollArea>
          <div className="grid w-full gap-1.5 mt-4">
            <Label htmlFor="interpretation">Interpretation</Label>
            <KPITable />
            <p className="text-sm text-gray-500">
              This is the interpreted text from the raw text.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function KPITable() {
  const tableData = [
    { value: "Value 1", class: "Assets", validation: true },
    { value: "Value 2", class: "Assets", validation: true },
    // ... add more rows as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Value</TableHead>
          <TableHead>Class</TableHead>
          <TableHead>Validation</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.value}</TableCell>
            <TableCell>{row.class}</TableCell>
            <TableCell>
              {row.validation && <CheckIcon className="w-4 h-4" />}
            </TableCell>
            <TableCell>
              <button className="px-2 py-1 bg-green-500 text-white rounded-md">
                Validate
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
