const BlogFullView =({tittle,content,date})=>{
    return(
        <section className="blog-in">
            <div className="headBar">
                <div className="btn icon-back">
                    back
                </div>
                <div className="btn icon-dlt">
                    Delete
                </div>
            </div>
            <div className="content">
                <h1>
                    {tittle}
                </h1>
                <h3>
                    {date}
                </h3>
                <p>
                    {content}
                </p>
                <div className="line"/>
            </div>
            {/* <div className="social-links">
                    <button className="social-btn"><a href="#"/></button>
                    <button className="social-btn"><a href="#"/></button>
                    <button className="social-btn"><a href="#"/></button>
                    <button className="social-btn"><a href="#"/></button>j
            </div> */}
        </section>
    )
}
export default BlogFullView;