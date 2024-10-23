import PropTypes from "prop-types";
// import { FaBeer } from 'react-icons/fa';
import {IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    // console.log(blog);
    const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog
    
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8 rounded-xl" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center mb-4">
                <div className="flex">
                    <img className="w-14 rounded-full h-14 object-fill" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmarks(blog)}
                    className="ml-2 text-red-600 text-2xl"><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className="">{hashtags.map((hash, idx) => <span 
            key={idx}><a href="http://" target="_blank" rel="noopener noreferrer">{hash}</a></span>)}</p>

            <button 
            onClick={() => handleMarkAsRead(reading_time)}
            className="text-purple-600 font-bold underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;