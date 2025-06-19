"use client"
import { Autocomplete, Button } from '@uipm/ui-web'
// import TableAutocomplete, { Column } from "@uipm/ui-web/Autocomplete/TableAutocomplete";
// const columns: Column[] = [
//   { id: 'id', label: 'Mã' },
//   { id: 'name', label: 'Tên' },
// ]
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Button variant="primary">Click Me</Button>
        <Autocomplete />
        {/* <TableAutocomplete columns={columns} data={[{ id: 12, name: 'mã tôi là' }]} onChange={() => { }} /> */}
      </main>
    </div>
  );
}
