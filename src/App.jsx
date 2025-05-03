import React from "react";
import { assets } from "./assets/ChatGPT_Clone_assets/assetes";

function App() {
  return (
    <div className="min-h-screen flex bg-[#0D0D2B] text-white ">
      <div className="w-72 border-r border-gray-700 flex flex-col justify-between ">
        <div>
          <div className=" items-center justify-between p-4 border-b border-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <img src={assets.chatgpt} alt="ChatGPT Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">ChatGPT</span>
            </div>
           
            <button className="w-full flex items-center gap-2 bg-gray-[#5C6AC4] px-2 py-1 mt-10 justify-center rounded bg-[#4b5bb8]  hover:bg-[#4b5bb8]/80 cursor-pointer transition">
              <img src={assets.add30} alt="Add Logo" className="w-4 h-4" />
              <span className="text-sm">New Chat</span>
            </button>
          </div>
          
          <div className="p-4 space-y-2">
            <button className="flex items-center gap-2 bg-gray-800 w-full p-2 rounded hover:bg-gray-700 transition">
              <img src={assets.message} alt="Message Icon" className="w-4 h-4"/>
              What is programming?
            </button>

            <button className="flex items-center gap-2 bg-gray-800 w-full p-2 rounded hover:bg-gray-700 transition">
              <img src={assets.message} alt="Message Icon" className="w-4 h-4"/>
              How to use an API?
            </button>
          </div>
          

        </div> 

        <div className="p-4 space-y-3 border-t border-gray-700">
          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition">
            <img src={assets.addhome} alt="Home Logo" className="w-4 h-4" />
            <span>Home</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition">
            <img src={assets.bookmark} alt="Home Logo" className="w-4 h-4" />
            <span>Saved</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-400 transition">
            <img src={assets.rocket} alt="Home Logo" className="w-4 h-4" />
            <span>Upgrade to Pro</span>
          </div>
        </div>
      </div>
    {/* Main Chat  */}
      <div className="min-h-[calc(100vh - 14rem)] flex-1 p-6 mt-6 mb-0 mr-10 ml-10 items-center">
        <div className="max-w-[70] h-[calc(100vh - 17rem)] w-full scroll-smooth overflow-hidden ">
          <div className="flex m-1 pt-2 pb-2 mr-3 pl-3 items-start ">
            <img src={assets.userIcon} alt="User Icon" className="w-8 h-8 mr-2 border-1 rounded-full"/>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio soluta, aliquid enim, a rerum veniam suscipit molestias eius id eveniet ex accusamus fugit nesciunt et necessitatibus nihil fuga assumenda qui quis quos nobis voluptas iste. Nisi, velit. Tenetur voluptatibus libero velit aperiam. Iste mollitia repellendus et cumque eum repudiandae veniam doloremque ut asperiores harum rerum assumenda praesentium sapiente sint porro temporibus nemo cum in quisquam, maxime alias. Quia, at? Consectetur expedita ipsum rerum deserunt doloribus. Sed quam quibusdam pariatur ea consequuntur inventore, tenetur placeat, maxime unde optio dignissimos. Itaque deleniti a inventore aspernatur cum optio facilis tempora rerum reiciendis quidem.</p>
          </div>
          <div className="flex m-1 pt-2 pb-2 mr-3 pl-3 items-start bg-[rgba(28,30,58,1)] w-fit rounded-md">
            <img src={assets.chatgptlogo} alt="ChatGPT" className="w-8 h-8 mr-2 border-1 rounded-full"/>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci magni nihil quod! Quibusdam sit aspernatur impedit qui vel eaque quidem at, amet aut consequuntur deserunt, iste voluptatibus! Eum, quaerat?</p>
          </div>
        </div>
        <div className="mt-40 w-full flex flex-col items-center justify-center">
          <div className="p-3 mt-10 w-full bg-[rgba(28,30,58,1)] border-t border-gray-700" >
            <div className="relative">
            <input type="text" placeholder="Send a message" className="bg-transparent text-white placeholder-gray-400 outline-none flex-grow"/>
            <button className="absolute right-3  ml-3 p-1 rounded hover:bg-gray-600 transition">
              <img src={assets.send} alt="Send Icon" className="w-5 h-5"/>
            </button>
            </div> 
            
          </div>
          <p className="text-sm text-gray-400">ChatGPT may produce inaccurate information about people, place pr facts. ChatGPT May 3 version</p>

        </div>
      </div>
    </div>
  );
}

export default App;
