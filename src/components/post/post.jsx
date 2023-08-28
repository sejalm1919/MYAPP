import "./post.css"

export default function post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" 
        />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">SOUND OF LOVE </span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDesc">
        
               
        ऐ काश, काश यूँ होता हर शाम,
        साथ तू होता चुप चाप, 
        दिल ना यूँ रोता हर शाम, 
        साथ तू होता.. 
        गुज़ारा हो तेरे, बिन गुज़ारा अब मुश्किल है लगता 
        नज़ारा हो तेरा, ही नज़ारा अब हर दिन है लगता.. 
        हाल-ए-दिल तुझको सुनाता दिल अगर ये बोल पाता बाखुदा तुझको है चाहता जां 
        तेरे संग जो पल बिताता वक़्त से मैं वो मांग लाता याद करके मुस्कुराता हाँ वो हो हो… हो हो वो हो…


      </p>
    </div>
  )
}
