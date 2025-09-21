"use client"
import { useEffect } from "react"
import { columns, IntegrationPg } from "./columns"
import { DataTable } from "./data-table"
import React from "react"

function getData(): IntegrationPg[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      date: "2025-09-15T14:48:00.000Z",
      mode: "production",
      modifiedby: "admin",
      createdby: "admin",
      shorttext: "This is a sample integration content",
      resourceId: "res-12345",
      name: "Integration flow",
      version: "1.0.0",

    },
    {
      id: "a4b1c2d3",
      date: "2023-08-10T09:30:00.000Z",
      mode: "edit",
      modifiedby: "user1",
      createdby: "user1",
      shorttext: "This is a sample OData API",
      resourceId: "res-67890",

      name: "OData API",
      version: "1.0.0",

    },
    {
      id: "e5f6g7h8",
      date: "2024-01-20T16:15:00.000Z",
      mode: "production",
      modifiedby: "user2",
      createdby: "user2",
      shorttext: "This is a sample value mapping",
      resourceId: "res-54321",

      name: "Value mapping",
      version: "1.0.0",
    },
    {
      id: "i9j0k1l2",
      date: "2023-11-05T11:00:00.000Z",
      mode: "edit",
      modifiedby: "user3",
      createdby: "user3",
      shorttext: "This is a sample runtime artifacts",
      resourceId: "res-98765",
      name: "Runtime Artifacts",
      version: "1.0.0",
    },
    
    // ...
  ]
}

export default  function DemoicPage() {

  const [artifacts, setArtifacts] = React.useState<IntegrationPg[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        
        const response = await fetch('/api/integration-design-packages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            token: token,
          }),
        });
        
        const xmlText = await response.text();  
        console.log('API Response (XML):of content', xmlText);
        
        // Parse XML and extract runtime artifacts data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const entries = xmlDoc.getElementsByTagName('m:properties');
        const artifactsData: IntegrationPg[] = [];
        var total=0;
        for (let i = 0; i < entries.length; i++) {
          const id = entries[i].getElementsByTagName('d:Id')[0]?.textContent || '';
          const name = entries[i].getElementsByTagName('d:Name')[0]?.textContent || '';
          const version = entries[i].getElementsByTagName('d:Version')[0]?.textContent || '';
          const resourceId = entries[i].getElementsByTagName('d:ResourceId')[0]?.textContent || '';
          const createdby = entries[i].getElementsByTagName('d:CreatedBy')[0]?.textContent || '';
          const createdon = entries[i].getElementsByTagName('d:CreationDate')[0]?.textContent || '';
          const shorttext = entries[i].getElementsByTagName('d:ShortText')[0]?.textContent || '';
          const mode = entries[i].getElementsByTagName('d:Mode')[0]?.textContent || '';
          const modifiedby = entries[i].getElementsByTagName('d:ModifiedBy')[0]?.textContent || '';

          total=total+1;
          artifactsData.push({
            id: id,
            name: name,
            date: createdon,
            mode: mode,
            modifiedby: modifiedby,
            createdby: createdby,
            shorttext: shorttext,
            resourceId: resourceId,
            version: version,
          });
        }
        // store started and error count in localstorage
        localStorage.setItem('total', total.toString());

          


        setArtifacts(artifactsData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={artifacts} />
    </div>
  )
}