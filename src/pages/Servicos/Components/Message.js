import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
	margin: 5px;
	margin-left: 10px;
	margin-right: 10px;
	padding: 10px;
	max-width: 70%;
	background-color: white;
	border: solid black 1px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: ${props => (props.sender === 1 ? "15px 15px 0px 15px" : "15px 15px 15px 0px")};
	align-self: ${props => (props.sender === 1 ? "flex-end" : "flex-start")};
`;

const Time = styled.span`
	font-size: small;
	color: gray;
	float: right;
`;

const Message = ({ text, sender }) => {
  return (
    <MessageContainer sender={sender}>
			<div>
    		<span>{text}</span>
			</div>
    <Time>10:22</Time>
    </MessageContainer>
  );
};

export default Message;
