import React from 'react'
import StaffHeader from '../../components/Staff/StaffHeader'
import ChatPage from '../../components/Admin/ChatPage'
import AllChatPage from '../../components/Staff/ChatPage'

function ChatStaff() {
  return (
    <>
    <div>
<StaffHeader/>

    </div>
    <div >
        <AllChatPage/>
    </div>
    </>
  )
}

export default ChatStaff