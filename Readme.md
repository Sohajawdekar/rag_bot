# Our Project

The goal of this project is to use AI and ease the process of planning itinerary for travelers.

# Table of contents

- [About the Project](#About-the-Project)
  - [Tech Stack](#Tech-Stack)
  - [File Structure](#File-Structure)
- [Getting Started](#Getting-Started)
  - [Prerequisites and installlation](#Prerequisites-and-installlation)
  - [Installation](#Installation)
- [Theory and Approach](#Theory-and-Approach)
- [Results and Demo](#Results-and-Demo)
- [Future Work](#Future-Work)
- [Contributors](#Contributors)

# <a id="About-the-Project"></a> About the Project

Travel Guide consists of chatbot which intakes the preferences of travellers and outputs the most optimum destination to travel. It also consistes of an user-interface to ease the process of using the bot.

## <a id="Tech-Stack"></a> Tech Stack

- React
- [Python]
- [Langchain]
- [Hugging Face]
- [StreamLit]
- HTML, CSS
- FAISS
- Py PDF 2

## <a id="File-Structure"></a>File Structure

```
📦 Travel_planner

 ┣ 📂Model
 ┃ ┣📜app.py
 ┣ 📂Website
 ┃ ┣📂node_modules
 ┃ ┣📂public
 ┃ ┣📂src
 ┃ ┣📜.gitignore
 ┃ ┣📜package
 ┃ ┣📜package-lock
 ┣ 📂asset
 ┣ 📜Readme
 ┗ 📜requirements.txt
```

# <a id="Getting-Started"></a>Getting Started

## <a id="Prerequisites-and-installlation"></a>Prerequisites and installation

- Download Python on your device if not already present.
  Refer [here](https://www.python.org/downloads/) for the setup.
- Download node on your device if not already present.
  Refer [here](https://www.geeksforgeeks.org/installation-of-node-js-on-windows/) for the setup.

- You can use any code editor.
- All installations mentioned are made using pip hence install pip.
- To install pip , follow this [link](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/)
- To install the requirements

```
pip install -r requirements.txt
```

## <a id="Installation"></a>Installation

- Clone the repository

```
git clone https://github.com/Sanika-k-1317/Travel-Guide.git
```

## For running the website

- In the project directory
- To install all the dependencies run

```bash
npm install
```

- Then run

```bash
npm start
```

# <a id="Theory-and-Approach"></a>Theory and Approach

### Overview of the architecture used : <br />

#### Indexing​

Load: First we need to load our data. We’ll use DocumentLoaders for this. <br />
Split: Text splitters break large Documents into smaller chunks. This is useful both for indexing data and for passing it in to a model, since large chunks are harder to search over and won’t fit in a model’s finite context window. <br />
Store: We need somewhere to store and index our splits, so that they can later be searched over. This is often done using a VectorStore and Embeddings model. <br />

#### Retrieval and generation​

Retrieve: Given a user input, relevant splits are retrieved from storage using a Retriever. <br />
Generate: A ChatModel / LLM produces an answer using a prompt that includes the question and the retrieved data

# <a id="Results-and-Demo"></a>Results and Demo

![The Website](https://github.com/Sohajawdekar/travel_planner/blob/main/asset/Screenshot%202024-05-05%20212711.png)

# <a id="Future-Work"></a>Future Work

- Chatbot having memory buffer to improve the recommendation after every promp from the user.
  Contextualizing questions: Add a sub-chain that takes the latest user question and reformulates it in the context of the chat history.
- Using an ml-model with more number of parameters like llama-2. Fine-tuning the chatbot to maintain the original capabilities of the model while adapting it to suit more specialized use cases.
- The incorporation of the machine learning model into the user interface is slated for future implementation.

# <a id="Contributors"></a>Contributors

- Soha Jawdekar
- Sanika Kuumbhare
