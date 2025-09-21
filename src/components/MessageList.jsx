
const messages = [

  { id: 1, text: "Hi Aiden , how are you? How is the project coming along", sender: "sent", time: "10:10 AM , Today" },
  { id: 2, text: "Are we meeting today?", sender: "received", time: "10:12 AM, Today" },
  { id: 3, text: "Project has been already finished and I have results to show you.", sender: "received", time: "10:15 AM, Today " },



];






//import Message from "../components/Message"

const MessageList = () => {
  return (
    <section>
      {
        messages.map((messages) => {
          return (
            <div className={`message-${messages.sender} `}>
              <p>{messages.text}</p>
              <p className="timestamp">{messages.time}</p>

            </div>
          )

        })

      }



    </section>

  )
}

export default MessageList 