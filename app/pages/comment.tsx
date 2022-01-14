const CommentBox = () => {
  return (
    <div>
      <section className="rounded-b-lg  mt-4 ">
        <form action="/" acceptCharset="UTF-8" method="post">
          <input type="hidden"></input>
          <textarea
            className="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl"
            placeholder="Ask questions here."
            data-cols="6"
            data-rows="6"
            id="comment_content"
            spellCheck="false"
          ></textarea>
          <button className="font-bold py-2 px-4 w-full bg-purple-400 text-lg text-white shadow-md rounded-lg ">
            Comment{" "}
          </button>
        </form>

        <div id="task-comments" className="pt-4">
          <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row justify-center mr-2">
              <img
                alt="avatar"
                width="48"
                height="48"
                className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
              ></img>
              <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">
                @Shanel
              </h3>
            </div>

            <p data-style="width: 90%" className="text-gray-600 text-lg text-center md:text-left ">
              Hi good morning will it be the entire house.{" "}
            </p>
          </div>

          <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
            <div className="flex flex-row justify-center mr-2">
              <img
                alt="avatar"
                width="48"
                height="48"
                className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
              ></img>
              <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">
                @Tim Motti
              </h3>
            </div>

            <p data-style="width: 90%" className="text-gray-600 text-lg text-center md:text-left ">
              <span className="text-purple-600 font-semibold">@Shanel</span> Hello. Yes, the entire
              exterior, including the walls.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default CommentBox
