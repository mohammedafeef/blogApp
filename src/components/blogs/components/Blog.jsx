const Blog = (props)=>{
    const {tittle,content,date} = props;
    return(
        <section className="blog-out">
            <div className="tittle">
                <h1>{tittle}</h1>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="expand">
                <button className="exp-button">
                    continue reading
                </button>
            </div>
        </section>
    )
}
export default Blog;