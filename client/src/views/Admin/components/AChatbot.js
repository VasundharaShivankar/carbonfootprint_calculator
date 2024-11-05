import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ChatbotMessages() {
  const [messages, setMessages] = React.useState([]);

  const loadMessages = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/chatbot`);
      setMessages(response.data.data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Error loading messages');
    }
  };

  const deleteMessage = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this message?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/chatbot-messages/${id}`);
      setMessages(messages.filter(message => message._id !== id));
      toast.success('Message deleted successfully');
    } catch (error) {
      toast.error('Error deleting message');
    }
  };

  React.useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Chatbot Messages</h1>
      <div className="row">
        {messages.map((message, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card p-3 px-4 card-wth border-info shadow">
              <div className="d-flex align-items-center">
                <img src={message.userPhoto} alt='User' className="icon-wth rounded-circle" />
                <div className="ms-4">
                  <h6 className="fw-bold m-0">{message.username}</h6>
                </div>
              </div>
              <div className='m-3 mx-1 border inner-shadow p-2'>
                <p className="ms-2">{message.content}</p>
              </div>
              <button
                className="btn btn-danger mt-3"
                onClick={() => deleteMessage(message._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
