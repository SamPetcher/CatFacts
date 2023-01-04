import { useState } from "react";
export default function SearchUI({ setSearchTerm, breeds}) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newCatObject = breeds.find((breed)=>breed.id === newSearchTerm);
    setSearchTerm(newCatObject);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="Form__main">
        <select
          name="breeds"
          onChange={(event) => setNewSearchTerm(event.target.value)}
        >
          {breeds.map((catBreed) => (
            <option key={catBreed.id} value={catBreed.id}>
              {catBreed.name}
            </option>
          ))}
        </select>
        <button type="submit">Find that cat</button>
      </form>
    </>
  );
}
