import { useState, useEffect } from "react";
import { db } from "../../data/firebase";
import {
collection,
addDoc,
query,
orderBy,
onSnapshot,
serverTimestamp
} from "firebase/firestore";

const Chat = () => {

const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");

useEffect(() => {

const q = query(
collection(db, "messages"),
orderBy("createdAt")
);

const unsubscribe = onSnapshot(q, (snapshot) => {

setMessages(
snapshot.docs.map(doc => ({
id: doc.id,
...doc.data()
}))
);

});

return unsubscribe;

}, []);

const sendMessage = async () => {

if (newMessage === "") return;

await addDoc(collection(db, "messages"), {

text: newMessage,
user: "Player1",
createdAt: serverTimestamp()

});

setNewMessage("");

};

return (

<div>

<h2>Yu-Gi-Oh Chat</h2>

<div>

{messages.map(msg => (

<p key={msg.id}>
<strong>{msg.user}:</strong> {msg.text}
</p>

))}

</div>

<input
value={newMessage}
onChange={(e) => setNewMessage(e.target.value)}
placeholder="Write message"
/>

<button onClick={sendMessage}>
Send
</button>

</div>

);

};

export default Chat;