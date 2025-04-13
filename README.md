# 🧠 Bedrock CLI Chatbot

A command-line AI chatbot built using Amazon Bedrock Agents and Node.js. This application allows developers to interact with a GenAI Agent in real-time via the terminal, with clear, word-by-word streamed responses.

## 🚀 Features

- 🌍 Built using **Amazon Bedrock's Agent Runtime**.
- 🧑‍💻 Full CLI-based experience with prompt-style input.
- 📡 Supports **streamed, word-by-word** output for human-like response flow.

## 📦 Requirements

- Node.js **v18+**
- AWS credentials with access to **Bedrock Agents** (non-Knowledge Base).
- Your deployed **Agent ID** and **Agent Alias ID** in Bedrock.

## Libraries Used

- aws-sdk

## Installation: 
```
npm install @aws-sdk/client-bedrock-agent-runtime
```


## 🔧 Setup

### Clone this repository

```
git clone https://github.com/Sarimsaljook/Bedrock-agent-stream.git 
cd Bedrock-agent-stream
```

## Running the Chatbot

### 1. Run in the terminal: 

node index.mjs

You should see:

```
🤖 Bedrock CLI Chatbot Initialized. Type your messages below:

You:
```

### 2. Start chatting 

💬 Example Interaction

```
You: Hello, what can you do?
Bot: I am an AI assistant. I can help you with information, tasks, or just a friendly conversation!
```