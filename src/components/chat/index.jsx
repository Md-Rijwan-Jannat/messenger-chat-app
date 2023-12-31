import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced"
import CustomHeader from "../CoustomHeader"
import StrandardMessageForm from "../CustomMessageForm/StrandardMessageForm";
import Ai from "../CustomMessageForm/Ai";


function Chat() {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    'testuser',
    1234
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CustomHeader chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          // if (chatProps.chat?.title.startsWith("AiCode_")) {
          //   return <AiCode props={props} activeChat={chatProps.chat} />;
          // }
          // if (chatProps.chat?.title.startsWith("AiAssist_")) {
          //   return <AiAssist props={props} activeChat={chatProps.chat} />;
          // }

          return (
            <StrandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  )
}

export default Chat