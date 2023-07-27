import { useState } from "react";

function BookEdit({currentTitle}) {
    const [title,setTitle] = useState(currentTitle);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log("New event is :", title);
    }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
    <label>Title</label>
      <input value={title} onChange = {handleChange} className="input"></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
