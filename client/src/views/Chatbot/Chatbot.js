import React, { useState } from "react";
import chatbotimg from "./Chat bot.png"
import "./Chatbot.css"
import Navbar from "./../../components/Navbar/Navbar.js"
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
      "reduce":"To reduce emissions, farmers can practice crop rotation, use biochar, adopt no-till farming, and manage soil carbon.",
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
      "climate change": "Climate change refers to long-term changes in temperature, precipitation, and weather patterns caused by increased greenhouse gas emissions.",
      "renewable farming equipment": "Using solar-powered pumps and electric tractors reduces reliance on fossil fuels, helping lower emissions in agriculture.",
      "vertical farming": "Vertical farming grows crops in stacked layers, using less land and water while reducing emissions from transportation and soil management.",
      "drip irrigation": "Drip irrigation delivers water directly to plant roots, conserving water and reducing energy use in farming.",
      "alternative proteins": "Producing proteins from insects, lab-grown meat, or plant-based sources reduces emissions compared to traditional livestock farming.",
      "energy-efficient machinery": "Farm machinery designed for lower fuel consumption or powered by renewable energy helps reduce carbon emissions in agriculture.",
      "reforestation": "Reforestation involves planting trees on deforested land, which acts as a carbon sink to absorb atmospheric carbon dioxide.",
      "biodiversity conservation": "Preserving biodiversity ensures resilient ecosystems that can better store carbon and support sustainable agriculture.",
      "water-efficient crops": "Planting drought-resistant crops can reduce water usage and the associated emissions from irrigation systems.",
      "integrated pest management": "This approach reduces pesticide use by integrating natural pest control methods, lowering emissions from chemical production.",
      "farm-to-table": "The farm-to-table model shortens supply chains, reducing emissions from transportation and storage of food products.",
      "carbon-smart policies": "Governments can implement policies incentivizing sustainable practices, like subsidies for renewable energy or penalties for high emissions.",
      "carbon accounting": "Carbon accounting measures the emissions and sequestration of carbon to track the environmental impact of farming activities.",
      "urban farming": "Urban farming reduces the need for transportation and fosters localized food production, lowering overall emissions.",
      "genetically modified crops": "Genetically modified crops can increase yield and resistance to pests and climate extremes, reducing emissions per unit of food produced.",
      "renewable fertilizers": "Using fertilizers derived from renewable sources like compost or bio-based chemicals helps lower greenhouse gas emissions.",
      "carbon-negative farming": "Carbon-negative farming practices capture more carbon than they emit, contributing to net carbon reduction.",
      "farmers' education": "Educating farmers about sustainable practices equips them to adopt techniques that reduce emissions and improve productivity.",
      "climate adaptation": "Climate adaptation strategies include shifting planting seasons and crop varieties to match changing climate conditions, reducing vulnerabilities.",
      "soil erosion prevention": "Techniques like terracing, windbreaks, and cover crops help prevent soil erosion and retain carbon in the soil.",
      "carbon monitoring tools": "Digital tools and software help farmers track their emissions and adopt targeted practices to reduce their carbon footprint.",
      "agrivoltaics": "Agrivoltaics combines agriculture and solar energy production on the same land, optimizing land use and reducing emissions.",
      "food supply chain": "Optimizing the food supply chain by reducing waste and energy consumption minimizes emissions from farm to consumer.",
      "community-supported agriculture": "Direct partnerships between farmers and consumers reduce transportation emissions and support local sustainable farming.",
      "permaculture": "Permaculture is a sustainable farming system that mimics natural ecosystems, reducing emissions and improving soil health.",
      "carbon labeling": "Carbon labeling displays the carbon footprint of products, encouraging consumers to choose low-emission options.",
      "regenerative agriculture": "Regenerative agriculture focuses on rebuilding soil health and ecosystems while sequestering carbon and reducing emissions.",
      "eco-friendly packaging": "Using biodegradable or reusable packaging reduces waste and emissions associated with traditional packaging materials.",
      "green manure": "Green manure involves growing cover crops that are plowed back into the soil to enrich it, reducing the need for synthetic fertilizers.",
      "crop diversity": "Promoting crop diversity enhances resilience against pests and diseases while improving carbon sequestration in soil.",
      "agricultural robotics": "Using autonomous machinery for precision farming reduces fuel use and increases efficiency, lowering emissions.",
      "renewable-powered irrigation": "Irrigation systems powered by solar or wind energy reduce the carbon footprint of water management.",
      "planting hedgerows": "Hedgerows act as windbreaks, reduce soil erosion, and provide carbon storage in their biomass.",
      "microbial inoculants": "Adding beneficial microbes to soil can improve nutrient availability, reduce fertilizer needs, and enhance carbon storage.",
      "bioenergy crops": "Growing crops like switchgrass or miscanthus for bioenergy production provides renewable energy and absorbs carbon during growth.",
      "soil organic matter": "Increasing soil organic matter improves soil fertility and acts as a long-term carbon storage solution.",
      "digital agriculture": "Using sensors, drones, and AI in agriculture optimizes resource use, reducing emissions and increasing efficiency.",
      "companion planting": "Planting complementary crops together can reduce the need for chemical inputs and enhance soil health, lowering emissions.",
      "windbreaks": "Planting trees or shrubs to block wind reduces soil erosion and stores carbon in their biomass.",
      "green infrastructure": "Integrating green infrastructure, like constructed wetlands, into farms helps manage water and reduce emissions.",
      "peatland restoration": "Restoring degraded peatlands prevents carbon release and enhances their ability to act as carbon sinks.",
      "energy-efficient storage": "Using energy-efficient technologies for food storage and refrigeration reduces emissions in the agricultural supply chain.",
      "low-emission animal breeds": "Breeding livestock with lower methane emissions can significantly reduce the environmental impact of animal farming.",
      "rotational grazing": "Rotational grazing improves soil health and reduces overgrazing, enhancing carbon sequestration on pastures.",
      "smart irrigation systems": "Smart irrigation systems use real-time data to optimize water use, reducing emissions from excessive energy consumption.",
      "renewable biofuels": "Producing biofuels from agricultural waste reduces reliance on fossil fuels and provides a sustainable energy source.",
      "carbon neutrality": "Carbon neutrality is achieved when the amount of carbon emitted is balanced by an equivalent amount of carbon removal or offsetting efforts.",
      "organic composting": "Organic composting converts plant and animal waste into nutrient-rich soil amendments, reducing emissions from synthetic fertilizers.",
      "green cover": "Maintaining green cover through vegetation and tree planting helps sequester carbon and reduce soil degradation.",
      "regenerative agriculture": "Regenerative agriculture focuses on practices that restore soil health and capture carbon, such as holistic grazing and agroecology.",
      "permaculture": "Permaculture designs agricultural systems that mimic natural ecosystems, reducing inputs and emissions while enhancing biodiversity.",
      "local sourcing": "Buying locally produced food reduces emissions from transportation and storage, supporting sustainable agriculture.",
      "wetland restoration": "Restoring wetlands can act as carbon sinks, storing significant amounts of carbon while supporting biodiversity.",
      "algae farming": "Algae farming captures carbon while producing biofuels and feedstocks with a lower carbon footprint than traditional methods.",
      "crop residue management": "Instead of burning crop residues, farmers can compost or use them as biofuel, reducing methane and carbon emissions.",
      "carbon labeling": "Carbon labeling on food products helps consumers understand the emissions impact of their choices, encouraging sustainable consumption.",
      "precision irrigation": "Precision irrigation systems use data to optimize water usage, reducing energy and emissions associated with farming.",
      "eco-friendly packaging": "Using biodegradable or recyclable materials for farm products reduces waste and emissions from packaging production.",
      "sustainable grazing": "Managing grazing patterns to avoid overgrazing and promote grass regrowth helps capture carbon and maintain soil health.",
      "carbon farming incentives": "Programs offering financial rewards for adopting practices that capture or reduce carbon encourage sustainable agriculture.",
      "flood-resistant crops": "Developing crops resistant to flooding reduces losses and emissions caused by climate-induced extreme weather events.",
      "renewable biofuels": "Biofuels derived from agricultural waste provide a sustainable energy source with lower emissions compared to fossil fuels.",
      "agricultural research": "Investing in research on low-emission farming techniques helps develop scalable solutions to reduce carbon footprints.",
      "green finance": "Green finance mechanisms support farmers in adopting sustainable technologies and practices that lower emissions.",
      "climate-resilient seeds": "Seeds bred to withstand climate extremes help maintain crop yields while reducing the need for resource-intensive inputs.",
      "ecosystem services": "Farming practices that enhance natural ecosystem services, like pollination and water purification, reduce reliance on emissions-heavy inputs.",
      "sustainable fisheries": "Practices like reducing overfishing and using low-emission equipment in aquaculture contribute to lowering emissions from food production.",
      "land restoration": "Restoring degraded lands to productive use with sustainable methods helps capture carbon and improve biodiversity.",
      "carbon-efficient logistics": "Streamlined logistics, like optimized routes and eco-friendly transport, reduce emissions in agricultural supply chains.",
      "forest farming": "Forest farming integrates shade-loving crops with forests, capturing carbon while producing high-value crops sustainably.",
      "crop diversification": "Planting a variety of crops reduces risk, enhances soil health, and helps lower emissions by decreasing monoculture reliance.",
      "smart weather tracking": "Using technology to track weather patterns helps farmers adapt planting schedules and reduce losses, indirectly lowering emissions.",
      "alternative irrigation techniques": "Techniques like fog harvesting and water recycling reduce the energy footprint of traditional irrigation methods.",
      "agricultural drones": "Drones monitor crops and apply inputs precisely, minimizing waste and emissions from overuse of resources.",
      "solar irrigation": "Solar-powered irrigation systems reduce energy use from fossil fuels and cut emissions in water management.",
      "urban farming": "Urban farming involves growing crops in cities, reducing the need for transportation and lowering carbon emissions from supply chains.",
  "vertical farming": "Vertical farming grows crops in stacked layers, using less land and water while reducing emissions from traditional farming methods.",
  "climate adaptation": "Climate adaptation refers to changes in farming practices to cope with shifting weather patterns, like planting drought-resistant crops.",
  "integrated pest management": "Integrated pest management reduces reliance on chemical pesticides, cutting emissions associated with their production and use.",
  "natural fertilizers": "Natural fertilizers like manure and compost enrich soil without the high emissions linked to synthetic fertilizers.",
  "energy-efficient machinery": "Using energy-efficient machinery reduces fuel consumption and emissions from farm operations.",
  "cover crops": "Planting cover crops between main crops improves soil health and captures carbon, reducing emissions over time.",
  "community-supported agriculture (CSA)": "CSA programs connect farmers directly with consumers, reducing food waste and emissions from distribution networks.",
  "food forests": "Food forests mimic natural ecosystems, integrating perennial plants and trees that store carbon and reduce agricultural emissions.",
  "soil testing": "Regular soil testing ensures optimized input use, reducing excess fertilizer application and associated nitrous oxide emissions.",
  "conservation buffers": "Planting buffers like hedgerows or grass strips around fields helps prevent soil erosion and capture carbon.",
  "afforestation": "Planting trees on unused or degraded land captures carbon and improves biodiversity, benefiting farms nearby.",
  "micro-irrigation": "Micro-irrigation techniques like drip systems reduce water usage and energy costs, lowering overall emissions.",
  "organic certification": "Achieving organic certification encourages sustainable farming practices and reduces emissions by avoiding synthetic inputs.",
  "renewable-powered cold storage": "Using renewable energy for cold storage reduces emissions from post-harvest food preservation.",
  "intercropping": "Growing complementary crops together maximizes land use, improves soil health, and reduces emissions from fertilizers.",
  "solar drying": "Solar drying of crops reduces dependence on fossil fuels for preservation and processing, cutting emissions.",
  "bio-based materials": "Using bio-based materials for farm infrastructure, like bamboo or recycled plastic, lowers the carbon footprint of farming equipment.",
  "rainwater harvesting": "Rainwater harvesting systems capture water for irrigation, reducing the need for energy-intensive water pumping.",
  "carbon-smart certification": "Certification programs reward farmers who adopt practices that actively reduce or sequester carbon emissions.",
  "farm cooperatives": "Farmers joining cooperatives can share resources like equipment and transport, lowering costs and emissions collectively.",
  "fermentation technology": "Using fermentation processes in feed production reduces methane emissions from livestock digestion.",
  "eco-labeling": "Eco-labeling informs consumers about sustainable farming practices, encouraging choices that support low-emission agriculture.",
  "zero-budget natural farming": "This farming approach minimizes external inputs, reducing emissions from synthetic fertilizers and pesticides.",
  "renewable-powered greenhouses": "Greenhouses powered by renewable energy reduce emissions while maintaining optimal growing conditions.",
  "water-efficient crops": "Planting water-efficient crops lowers the energy used in irrigation and conserves resources, reducing emissions.",
  "biodegradable mulches": "Using biodegradable mulches reduces plastic waste and lowers emissions from traditional mulch production.",
  "energy audits": "Conducting energy audits on farms helps identify ways to reduce fuel use and emissions from operations.",
  "biodiversity corridors": "Creating corridors for wildlife within farms supports biodiversity, indirectly improving ecosystem carbon storage.",
  "farm-to-table initiatives": "Farm-to-table initiatives reduce the distance food travels, cutting emissions from transportation and storage.",
  "low-carbon certification": "This certification recognizes farms that implement practices to minimize greenhouse gas emissions.",
  "advanced weather forecasting": "Access to detailed weather forecasts helps farmers plan activities to reduce losses and unnecessary fuel usage.",
  "bioenergy crops": "Growing crops like switchgrass for bioenergy captures carbon while providing renewable energy sources.",
  "livestock rotation": "Rotating livestock grazing areas prevents overgrazing and helps maintain grasslands as carbon sinks."
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
    <>
    <Navbar/>
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
    </>
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
    margin:"120px auto",
    fontFamily: "Arial, sans-serif",
    boxShadow:"3px 3px 3px 3px white",
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
    fontFamily:"Oswald",
    color: "black",
    borderRadius: "4px",
    cursor: "pointer",
    font :"30px"
  },
};
export default Chatbot;
