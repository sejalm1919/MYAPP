import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            src="https://picstatio.com/large/c13f89/Little-Witch-Academia-anime-girl-reading-book.jpg" 
            alt="" 
            className="singlePostImg" 
            />
            <h1 className="singlePostTitle">
                Hello Everyone my name is Sejal.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>  
                <i className="singlePostIcon fa-solid fa-trash-can"></i> 
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b> Sejal </b>
                        </span>
                        <span className="singlePostDate"> 1 Hour Ago </span>
                </div>
                <p className="singlePostDesc">
                Music fans have never had so much choice when it comes to keeping up with the latest music news and releases. But, as always with so much choice, it’s difficult to know which sites are worth reading, and which aren’t.

That’s why we’ve compiled this list of the best music blogs, online music magazines and music discovery sites.

Whether you’re into Indie Rock, Pop, EDM, or Hip Hop you can find your new favourite music blog here.

We’ve selected a variety of blogs, from industry leaders to smaller more niche publications, and we’ve done our best to group them by genre to make it easier to find what you’re looking for.
                </p>


        </div>
      
    </div>
  )
}
