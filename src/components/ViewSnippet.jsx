import { useState } from "react";
import { getSnippet } from "../api/snippetApi";

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