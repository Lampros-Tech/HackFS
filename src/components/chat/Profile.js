import { useAccount, useSigner,useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Client } from '@xmtp/xmtp-js'
import {useState, useEffect} from 'react'
import "./chat.scss"
import { ethers } from "ethers";


function Profile() {
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  const { data } = useSigner()

  const [client, setClient] = useState(null);


  

  console.log();


  const getXmtp = async () => {
  // //   let accounts = await window.ethereum
  // //     .request({
  // //       method: "eth_requestAccounts",
  // //     })
  // //     .catch((err) => {
  // //       console.log(err);
  // //     });
      
  // // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // // const signer = provider.getSigner(accounts[0]);

  // console.log(signer);
    // const xmtp = await Client.create()
    // setClient(xmtp);
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

  // const xmtp = await Client.create(signer)

  if (address)
    return (
      <div className="test">
        Connected to {address}
        <button onClick={() => getXmtp()}>client</button>

        <button onClick={() => getConversation(client)}>Get Conversations</button>

        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return (
    <div className="test">

      <button onClick={() => connect()}>Connect Wallet</button>
    </div>
  )

}

export default Profile;