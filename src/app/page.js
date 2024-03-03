// 'use client';
// import {useEffect, useState} from 'react'

import AddLead from "@/components/add-lead";

async function fetchData() {
  const response = await fetch('http://localhost:3000/api/leads')
  const result = await response.json()
  const {results} = result
  return results;
  // setLeads(await response.json())
}

export default async function Home() {
  // const [data, setData] = useState('')
  // const [leads, setLeads] = useState('')

  const leads = await fetchData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World v2</h1>
      <AddLead />
      <div>
        {leads && leads.map((lead, i) => {
          return <div key={i}>{lead.email}</div>
        })}
      </div>
    </main>
  );
}
