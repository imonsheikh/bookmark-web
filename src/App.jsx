import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {

  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmarks = blog => {
   console.log('bookmark adding soon');
   console.log(blog);
   const newBookmarks = [...bookmarks, blog]
   setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
     console.log('mark as read', time);
    //  setReadingTime(readingTime + time)
           //======OR=====
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
     
  }

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs 
        handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
      </main>
    </>
  );
}

export default App;
