import React, { useState } from "react";
import chatbotimg from "./Chat bot.png"
import "./chatbot.css"
const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm KrishiCarbon, here to answer your questions about carbon emissions in agriculture. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    const botReply = getBotReply(input);

    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const getBotReply = (question) => {
    const keywords = {
      "carbon emission": "Carbon emissions in agriculture primarily come from livestock, soil management, and rice production.",
      "reduce emissions": "To reduce emissions, farmers can practice crop rotation, use biochar, adopt no-till farming, and manage soil carbon.",
      "livestock": "Livestock emissions are a significant source of methane, a potent greenhouse gas. Better manure management and feeding practices can help reduce this.",
      "biochar": "Biochar is a charcoal-like substance that, when added to soil, can increase carbon storage and reduce greenhouse gas emissions.",
      "fertilizers": "Using organic fertilizers or reducing nitrogen fertilizer use can significantly reduce emissions in agriculture.",
      "carbon emissions definition": "Carbon emissions refer to the release of greenhouse gases, primarily carbon dioxide, into the atmosphere, contributing to climate change.",
      "greenhouse gases": "Greenhouse gases trap heat in the earth's atmosphere, and major ones include carbon dioxide, methane, and nitrous oxide, which are common in agriculture.",
      "carbon footprint": "A carbon footprint measures the total greenhouse gases emitted by activities like farming, which contribute to global warming.",
      "soil carbon management": "Soil carbon management involves practices like cover cropping, crop rotation, and reduced tillage to increase carbon storage in soil.",
      "cover cropping": "Cover cropping involves planting crops to cover the soil, which reduces erosion, improves soil health, and captures carbon in the soil.",
      "no-till farming": "No-till farming is a conservation method that avoids disturbing the soil, helping to retain soil carbon and reduce emissions.",
      "crop rotation": "Crop rotation is the practice of growing different types of crops sequentially on the same land to improve soil health and reduce emissions.",
      "composting": "Composting involves decomposing organic matter, reducing waste and creating a natural fertilizer that enhances soil carbon.",
      "manure management": "Proper manure management can reduce methane emissions from livestock waste, a significant greenhouse gas in agriculture.",
      "methane reduction": "Methane emissions from livestock can be reduced through improved diets, grazing management, and manure handling practices.",
      "carbon sequestration": "Carbon sequestration involves capturing carbon from the atmosphere and storing it in soil or plants to mitigate climate change.",
      "soil conservation": "Soil conservation practices prevent soil degradation and erosion, which helps retain carbon in the soil and reduce emissions.",
      "Indian government subsidies": "The Indian government offers various subsidies to promote sustainable farming practices that help reduce emissions, such as subsidies for organic farming and composting.",
      "organic farming": "Organic farming uses natural inputs and avoids synthetic fertilizers and pesticides, helping to lower emissions from agricultural processes.",
      "precision agriculture": "Precision agriculture uses technology to apply inputs like water and fertilizers efficiently, reducing waste and emissions.",
      "agroforestry": "Agroforestry integrates trees and shrubs into farming, capturing more carbon and enhancing biodiversity.",
      "renewable energy": "Renewable energy sources, like solar and wind, can power farm equipment, reducing reliance on fossil fuels.",
      "carbon trading": "Carbon trading is a system where farmers can earn credits for reducing emissions, which they can sell to industries needing to offset their emissions.",
      "water management": "Efficient water management reduces energy use in agriculture and helps mitigate greenhouse gas emissions.",
      "climate-smart agriculture": "Climate-smart agriculture involves practices that adapt to climate change, reduce emissions, and ensure food security.",
      "nitrous oxide": "Nitrous oxide is a greenhouse gas released from fertilizers and soils. Reducing fertilizer use and using organic methods can lower these emissions.",
      "plant-based diets": "A shift toward plant-based diets reduces the demand for livestock, which in turn reduces greenhouse gas emissions from livestock farming.",
      "forest conservation": "Protecting forests helps retain carbon that would otherwise be released through deforestation, benefiting agriculture indirectly.",
      "reduced food waste": "Reducing food waste decreases demand for agricultural production, indirectly reducing emissions.",
      "biogas production": "Biogas production from animal waste generates renewable energy and reduces methane emissions from livestock manure.",
      "conservation tillage": "Conservation tillage reduces soil disturbance, retains soil carbon, and minimizes emissions from farm machinery.",
      "carbon credit": "Carbon credits are permits that allow holders to emit a certain amount of greenhouse gases, which can be traded to incentivize reductions.",
      "carbon offset": "A carbon offset is a way for farmers to reduce or capture emissions, creating credits they can sell in carbon markets.",
      "sustainable agriculture": "Sustainable agriculture aims to meet current needs without compromising the environment, which includes reducing emissions and preserving resources.",
      "carbon sink": "A carbon sink is an area, like forests or soils, that absorbs more carbon than it releases, helping reduce overall emissions.",
    };
    

    // Check if any keyword in `keywords` exists in the question
    const lowerQuestion = question.toLowerCase();
    for (const keyword in keywords) {
      if (lowerQuestion.includes(keyword)) {
        return keywords[keyword];
      }
    }

    return "Unable to understand your question !!!Please try asking about emissions, reduction practices, or specific sources like livestock or biochar.";
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
      <img src={chatbotimg} className="chatbotimg"></img>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#daf1da" : "#e1f5fe"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about carbon emissions in agriculture..."
          style={styles.input}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "700px",
    height: "95vh",
    border: "4px solid black",
    borderRadius: "8px",
    overflow: "hidden",
    margin:"20px auto",
    fontFamily: "Arial, sans-serif",
    boxShadow:"3px 3px 3px 3px white"
  },
  chatBox: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    backgroundColor: "#f4f4f4",
   
  },
  message: {
    maxWidth: "70%",
    padding: " 20px 15px",
    borderRadius: "30px",
    marginBottom: "10px",
    backgroundColor:"#80ff80",
    zIndex:"2",
    fontFamily :"Oswald"
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "rgb(255 205 57)",
    fontFamily:"sans seriff",
    color: "black",
    fontWeight:"bold",
    borderRadius: "4px",
    cursor: "pointer",
    font :"30px"
  },
};
export default Chatbot;
