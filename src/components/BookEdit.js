import { useState } from "react";

function BookEdit({book,onEdit,onSubmit}) {
    const [title,setTitle] = useState(book.title);

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        onEdit(book.id,title);
        onSubmit();
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
