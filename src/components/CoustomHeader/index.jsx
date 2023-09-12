import { HiMiniChatBubbleLeft, HiPhone } from "react-icons/hi2";

function CustomHeader({chat}) {
    return (
        <div className="chat-header">
            <div className="flexbetween">
                <HiMiniChatBubbleLeft className="icon-chat" />
                <h3 className="header-text">{chat?.title}</h3>
            </div>
            <div className="flexbetween">
                <HiPhone className="icon-phone" />
                {chat?.description !== "⬅️ ⬅️ ⬅️" ? (
                    <p className="header-text">{chat?.description}</p>
                ) : (
                    <p className="header-text">no chat selected</p>
                )}
            </div>
        </div>
    )
}

export default CustomHeader