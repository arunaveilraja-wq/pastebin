import { useState } from "react";
import { getSnippet } from "../api/SnippetApi";

function ViewSnippet() {
  const [id, setId] = useState("");
  const [snippet, setSnippet] = useState(null);

  const handleGet = async () => {
    if (!id.trim()) return alert("Enter snippet ID");

    try {
      const response = await getSnippet(id);
      setSnippet(response.data);
    } catch (error) {
      alert("Snippet not found or expired");
    }
  };

  return (
    <div>
      <h2>View Paste</h2>
      <input
        placeholder="Enter Snippet ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleGet}>Get</button>

      {snippet && <pre>{snippet.content}</pre>}
    </div>
  );
}

export default ViewSnippet;

// import React, { useState } from "react";
// import { getSnippet } from "../api/SnippetApi";

// const ViewSnippet = () => {
//   const [id, setId] = useState("");
//   const [snippet, setSnippet] = useState(null);

//   const handleFetch = async () => {
//     const response = await getSnippet(id);
//     setSnippet(response.data);
//   };

//   return (
//     <div>
//       <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter snippet ID" />
//       <button onClick={handleFetch}>Fetch Snippet</button>
//       {snippet && <pre>{JSON.stringify(snippet, null, 2)}</pre>}
//     </div>
//   );
// };

// export default ViewSnippet;
