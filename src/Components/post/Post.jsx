import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" 
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="postInfo">
            <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit, amet </span>
            <hr/>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis illum placeat quae voluptatem, tenetur aperiam quibusdam perferendis quasi molestias, labore excepturi natus minima, aspernatur repudiandae expedita odit voluptatum! Ullam ex doloremque sint fugiat mollitia. Distinctio sunt quia labore, quisquam laborum vero veniam sapiente ad pariatur error minima. Delectus consectetur, enim rerum amet, aperiam ad ut sunt provident fugit pariatur expedita voluptatem nisi asperiores vero assumenda modi accusantium voluptatum! Consequuntur, nemo? Eius doloremque consequatur possimus quidem, nesciunt reiciendis aliquam qui tempore, molestias labore impedit nobis dolor ad praesentium libero repudiandae et facilis, id repellendus dolorum debitis quo dolores provident. Culpa, cupiditate?
  </p>
    </div>
  )
}
