import styled from 'styled-components';
import Message from './Components/Message';
import { useNavigate } from 'react-router-dom';
import { Avatar } from "@geist-ui/core"
import { useState } from 'react';
import { Send } from '@geist-ui/icons'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  position: relative;
  border: solid black 1px;
`;

const Title = styled.h1`
  text-align: center;
  flex: 1;
  margin: 0;
  font-size: xx-large;
`;

const ReturnButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 50px;
  margin-left: 30px;
  color: black;
`;

const Messages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const InputContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  position: fixed;
  bottom: 0;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 1em;
  border: solid black 1px;
  margin: 5px;
  padding-left: 12px;
  box-shadow: inset gray 0px 0px 6px;
`;

const MsgButton = styled.button`
  color: black;
  font-weight: bolder;
  font-size: large;
  background-color: white;
  border: solid black 1px;
  border-radius: 50%;
  height: 100%;
  width: 40px;
  margin: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Anfitriao = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2px;
    align-items: center;
    width: 100%;
    margin: 10px;
`;

const UserDetails = styled.div`
    display: flex;
    align-items: center;
`;

const UserName = styled.h4`
    margin: 0;
`;

const UserSpan = styled.span`
    margin: 0;
`;

const AvatarSmall = styled(Avatar)`
  transform: scale(1.2);
`;

function time() {
  const currentTime = new Date();

  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}


// Chat screen component
const ChatScreen = () => {

  const navigate = useNavigate()
  const imgSrc = 'https://i.pinimg.com/564x/18/a4/ee/18a4ee46df0aea9263f2533c6f96afbe.jpg'

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user", time: time() }, { text: "Olá!! Seu pet está bem.", sender: "other", time: time()}]);
      setInputValue("");

      
    }
    console.log(messages);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Page>
      <Header>
        <ReturnButton onClick={() => navigate("/servicos")}>{"<"}</ReturnButton>
        <Title style={{ marginTop: "15px" }}>Mensagems</Title>
      </Header>
      <Anfitriao>
        <UserDetails>
          <Avatar src={imgSrc} scale={3} />
            <div style={{ marginLeft: "20px" }}>
              <UserName>Margarida</UserName>
              <UserSpan>Online</UserSpan>
            </div>
          </UserDetails>
        <AvatarSmall src="https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg" />
      </Anfitriao>
      <Messages>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} time={message.time} />
        ))}
      </Messages>
      <InputContainer>
        <Input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Digite sua mensagem..." 
        />
        <MsgButton 
          onClick={handleSendMessage} ><Send/>
        </MsgButton>
      </InputContainer>
    </Page>
  );
};

export default ChatScreen;
