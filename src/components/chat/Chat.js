import "./Chat/Chat.scss";
import pic from "../chat/man.png"

import { WagmiConfig, createClient } from 'wagmi'
import Profile from './Profile'

import { getDefaultProvider } from 'ethers'

const Chat = () => {

  const client = null;
  
  const client_ = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  })

  if(client === null)
  {
      return (
      
          
            <>
                <WagmiConfig client={client_}>

                <Profile />

              {/* <div className="popup-background">
                <div className="popup">
                    <div className="description">
                      description
                    </div>
                    <div>
                      <button onClick={()=>{getXmtp(wallet)}} className="set-client-btn">
                            Set client 
                      </button>
                    </div>
                </div>
              </div> */}
              </WagmiConfig>
            </>
      
      )
    }
      else
      {
        return(
            <>
              <div className="chat-app">
                
                  <div className="chat-app-left">
                        <div className="chats-title">
                          Chats
                        </div>
                      <div className="chat1">
                          <div className="address">
                            sfbjsgfhsgfhgsgfkslkjlskdjfklshgfkhskjhgfkjshgjhkjshfkjshdfjhsfkjshfkhkhfjkshfksghskjhgfkshgfkjhkjghfskhgksjhghshgkhkhsfgkjghfkjh
                          </div>
                      </div>
                  </div>
                  <div className="chat-app-right">
            
                  </div>
              </div>

          </>
          )
      }
};
export default Chat;
