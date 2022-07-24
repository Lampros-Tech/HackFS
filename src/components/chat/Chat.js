import "./Chat/Chat.scss";
import pic from "../chat/man.png"
import { useAccount, useSigner,useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Client } from '@xmtp/xmtp-js'
import {useState, useEffect} from 'react'
const Chat = ({ id }) => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { data: wallet } = useSigner()
  const [client,setClient] =useState(null);

  const getXmtp = async (wallet) => {
    console.log(wallet);
    const xmtp = await Client.create(wallet)
    setClient(xmtp);
    // const allConversations = await xmtp.conversations.list()
    // console.log(allConversations);

  }

  const getConversation = async (xmtp) => {

    const conversations = xmtp.conversations
    const allConversations = await xmtp.conversations.list()
    console.log(allConversations);
    for (const conversation of allConversations) {
      console.log(`Saying GM to ${conversation.peerAddress}`)
      await conversation.send('gm')
    }  

  }

  if(client === null)
  {
      return (
      
          
            <>
              <div className="popup-background">
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
              </div>
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
