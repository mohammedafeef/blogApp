import { useState } from "react";
import { Blog, BlogFullView} from "./components/index"
const BlogsSection = ()=>{
    let [blogs,setBlogs] = useState(
        [
            {
                id:0,
                tittle:"Hacking is hard",
                date:"january 10th 2021",
                content:"Hacking is something that could be done by extrimly will qulified personality"
            },
            {
                id:1,
                tittle:"spamming is impersonation",
                date:"march 10th 2020",
                content:"Spamming is an harmful thing which is done by a person who have an intension to fool anyone in the group"
            }
        ]
    )

    return(
       <section className="blogs sub-container">
            {/* {
                blogs.map((blog)=>{
                    return(
                        <Blog tittle = {blog.tittle} content ={blog.content} date = {blog.date} id={blog.id}/>
                    )
                })
            } */}
            <BlogFullView tittle={blogs[0].tittle} content={blogs[0].content} date={blogs[0].date} id={blogs[0].id}/>
       </section>
    )
}
export default BlogsSection;