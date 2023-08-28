import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label> Profile Picture </label>
            <div className="settingsPP">
              <img 
              src="https://wallpapercave.com/wp/wp10015904.jpg" 
              alt="" 
              />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Sejal"/>
            <label>Email</label>
            <input type="email" placeholder="sejal.meshram19@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
