export default function Sidebar() {
  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." className="search" />
      <ul className="user-list">
        <li className="user">
          <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="" />
          <div></div>
          <div>
            <strong>Vincent Porter</strong>
          </div>
        </li>





        {/*{[].map((u, i) => (
          <li key={i} className="user">
            <img src={u.avatar} alt={u.name} className="avatar" />
            <div className={`status ${u.status}`}></div>
            <div>
              <strong>{u.name}</strong>
              {u.lastSeen && <span className="last-seen"> - {u.lastSeen}</span>}
            </div>
          </li>
        ))}*/}
      </ul>
    </div>
  )
}