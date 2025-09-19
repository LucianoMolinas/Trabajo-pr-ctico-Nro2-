
//import avatar from "../assets/avatar.jpeg "


const contacts = [
  { id: 1, name: "Vincent Porter", status: "Left 7 mins ago ", statusClass: "status-offline" },
  { id: 2, name: "Aiden Chavez", status: "online ", statusClass: "status-online" },
  { id: 3, name: "Mike Thomas", status: "online ", statusClass: "status-online" },
  { id: 4, name: "Christian Kelly ", status: "Left 10 hours ago ", statusClass: "status-offline" },
  { id: 5, name: "Monica Ward", status: "online ", statusClass: "status-online" },
  { id: 6, name: "Dean Henry ", status: "Offline since Oct 28  ", statusClass: "status-offline" },


];




const ChatList = () => {
  return (
    <ul>
      {
        contacts.map((contact) => {
          return (

            <li>
              <img src="./avatar .jpeg" alt="" />
              <div>
                <h4>{contact.name}</h4>
                <p className="contact status">  {contact.status} </p>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ChatList  