const [activeTab ,setActiveTab] = useState("HOME")


button onclick={()=>setActiveTab("HOME")} Home
button onclick={()=>setActiveTab("ABOUT")} About
button onclick={()=>setActiveTab("CONTACT")} Contact

{activeTab === "HOME" && p WELCOME to HOME}
{activeTab === "ABOUT" && p WELCOME to ABOUT}
{activeTab === "CONTACT" && p WELCOME to CONTACT}