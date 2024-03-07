import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = ({handleCourseName,handleTimeHour}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        
        <div className="w-2/3 grid md:grid-cols-2 lg:grid-cols-3 ">
           
            {
                blogs.map(blog=><Blog key={blog.ID} blog={blog} handleCourseName={handleCourseName} handleTimeHour={handleTimeHour}></Blog>)
            }
        </div>
    );
};

export default Blogs;