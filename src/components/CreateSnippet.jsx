import { useState } from "react";
import { createSnippet } from "../api/SnippetApi";

function CreateSnippet() {
  const [content, setContent] = useState("");
  const [savedSnippet, setSavedSnippet] = useState(null);

  const handleSave = async () => {
    if (!content.trim()) return alert("Please enter content");

    try {
      const response = await createSnippet({ content });
      setSavedSnippet(response.data);
      alert("Saved! ID: " + response.data.id);
      setContent("");
    } catch (error) {
      alert("Failed to save snippet");
    }
  };

  return (
    <div>
      <h2>Create Paste</h2>
      <textarea
        rows="8"
        placeholder="Enter code here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>Save</button>

      {savedSnippet && (
        <p>
          ✅ Saved ID: <b>{savedSnippet.id}</b>
        </p>
      )}
    </div>
  );
}

export default CreateSnippet;


// import React, { useState } from "react";
// import { createSnippet } from "../api/SnippetApi";

// const CreateSnippet = () => {
//   const [text, setText] = useState("");

//   const handleSubmit = async () => {
//     const snippet = { content: text };
//     const response = await createSnippet(snippet);
//     console.log("Saved:", response.data);
//   };

//   return (
//     <div>
//       <textarea value={text} onChange={(e) => setText(e.target.value)} />
//       <button onClick={handleSubmit}>Save Snippet</button>
//     </div>
//   );
// };

// export default CreateSnippet;
