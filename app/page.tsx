/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CPe8fm0Tmp9
 */
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
      <nav className="rounded-md p-4 mb-6 flex items-center justify-around bg-white shadow-md">
        <ul className="space-x-8 flex">
          <li>
            <a className="text-gray-900 hover:text-gray-600" href="#">
              Bronze
              <ArrowRightIcon className="w-4 h-4 ml-2 inline-block" />
            </a>
          </li>
          <li>
            <a className="text-gray-900 hover:text-gray-600" href="#">
              Silver
              <ArrowRightIcon className="w-4 h-4 ml-2 inline-block" />
            </a>
          </li>
          <li>
            <a className="text-gray-900 hover:text-gray-600" href="#">
              Gold
            </a>
          </li>
        </ul>
      </nav>
      <Silver/>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>KPI</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Validation</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>KPI 1</TableCell>
                  <TableCell>Assets</TableCell>
                  <TableCell>Value 1</TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4" />
                  </TableCell>
                  <TableCell>
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-md">
                      Fix Value
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>KPI 2</TableCell>
                  <TableCell>Assets</TableCell>
                  <TableCell>Value 2</TableCell>
                  <TableCell>
                    <CheckIcon className="w-4 h-4" />
                  </TableCell>
                  <TableCell>
                    <button className="px-2 py-1 bg-blue-500 text-white rounded-md">
                      Fix Value
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is the interpreted text from the raw text.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
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
