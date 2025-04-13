import readline from "readline";
import { BedrockAgentRuntimeClient, InvokeAgentCommand } from "@aws-sdk/client-bedrock-agent-runtime";

const client = new BedrockAgentRuntimeClient({
  region: "us-east-2",
  credentials: {
    // Replace with your AWS credentials
    accessKeyId: "XXXXXXX", 
    secretAccessKey: "XXXXXXXXXXXX", 
  },
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: "
});

const agentId = "XXXXXXXXX";  // Replace with your agent ID
const agentAliasId = "XXXXXXXXX"; // Replace with your agent alias ID
const sessionId = "cli-session-1"; 

console.log("🤖 Bedrock CLI Chatbot Initialized. Type your messages below:\n");
rl.prompt();

const streamWords = async (text, delay = 40) => {
  const words = text.split(/\s+/);
  for (let word of words) {
    process.stdout.write(word + " ");
    await new Promise(res => setTimeout(res, delay));
  }
  console.log("\n");
};

rl.on("line", async (line) => {
  const inputText = line.trim();
  if (!inputText) {
    rl.prompt();
    return;
  }

  const command = new InvokeAgentCommand({
    agentId,
    agentAliasId,
    sessionId,
    inputText,
    enableTrace: true,
  });

  try {
    const response = await client.send(command);

    let fullOutput = "";
    const decoder = new TextDecoder();

    for await (const chunk of response.completion) {
      if (chunk.chunk?.bytes) {
        const text = decoder.decode(chunk.chunk.bytes, { stream: true });
        fullOutput += text;
      }
    }

    console.log("Bot: ");
    await streamWords(fullOutput);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
  

  rl.prompt();
}).on("close", () => {
  console.log("\n👋 Session ended.");
  process.exit(0);
});
