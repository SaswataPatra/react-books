import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete,onEdit}) {
    const [showEdit,setShowEdit] = useState(false);


    const handleDeleteClick = () =>{
        onDelete(book.id);
    }
    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }
    const handSubmit =() =>{
        setShowEdit(false);
    }

    let content = book.title;
    if(showEdit){
        content = <BookEdit onSubmit={handSubmit} onEdit={onEdit} book={book}/>;
    }
  return (
    <div className="book-show">
      {content}
      <div className="actions">
      <button className="edit" onClick={handleEditClick} > Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}
export default BookShow;
