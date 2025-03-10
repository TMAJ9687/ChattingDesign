// Sample chat data
const sampleChats = [
    {
        id: 1,
        name: 'John Doe',
        lastMessage: 'Hey, how are you?',
        time: '2:30 PM',
        unread: 2,
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 2,
        name: 'Jane Smith',
        lastMessage: 'See you tomorrow!',
        time: '1:45 PM',
        unread: 0,
        avatar: 'https://via.placeholder.com/40'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        lastMessage: 'Great idea!',
        time: '12:15 PM',
        unread: 1,
        avatar: 'https://via.placeholder.com/40'
    }
];

// Sample messages
const sampleMessages = [
    {
        id: 1,
        sender: 'John Doe',
        message: 'Hey, how are you?',
        time: '2:30 PM',
        isSent: false
    },
    {
        id: 2,
        sender: 'You',
        message: 'I\'m doing great, thanks!',
        time: '2:31 PM',
        isSent: true
    }
];

// DOM Elements
const chatList = document.querySelector('.chat-list');
const chatMessages = document.querySelector('.chat-messages');
const messageInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.send-btn');
const newChatButton = document.querySelector('.new-chat-btn');

// Render chat list
function renderChatList() {
    chatList.innerHTML = sampleChats.map(chat => `
        <div class="chat-item" data-id="${chat.id}">
            <img src="${chat.avatar}" alt="${chat.name}" class="profile-img">
            <div class="chat-info">
                <div class="chat-name">${chat.name}</div>
                <div class="chat-preview">${chat.lastMessage}</div>
            </div>
            <div class="chat-meta">
                <div class="chat-time">${chat.time}</div>
                ${chat.unread > 0 ? `<div class="unread-count">${chat.unread}</div>` : ''}
            </div>
        </div>
    `).join('');

    // Add click event listeners to chat items
    document.querySelectorAll('.chat-item').forEach(item => {
        item.addEventListener('click', () => {
            const chatId = item.dataset.id;
            loadChat(chatId);
        });
    });
}

// Render messages
function renderMessages(messages) {
    chatMessages.innerHTML = messages.map(msg => `
        <div class="message ${msg.isSent ? 'sent' : 'received'}">
            <div class="message-content">
                <div class="message-text">${msg.message}</div>
                <div class="message-time">${msg.time}</div>
            </div>
        </div>
    `).join('');

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Load chat
function loadChat(chatId) {
    const chat = sampleChats.find(c => c.id === parseInt(chatId));
    if (chat) {
        document.querySelector('.user-details h3').textContent = chat.name;
        renderMessages(sampleMessages);
    }
}

// Send message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        const newMessage = {
            id: sampleMessages.length + 1,
            sender: 'You',
            message: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSent: true
        };
        sampleMessages.push(newMessage);
        renderMessages(sampleMessages);
        messageInput.value = '';
    }
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

newChatButton.addEventListener('click', () => {
    // Add new chat functionality here
    alert('New chat feature coming soon!');
});

// Initialize the chat interface
renderChatList();
loadChat(1); 