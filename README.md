# Zentor - AI-Powered Self-Improvement Journal
Zentor is an innovative self-improvement journal that leverages advanced AI technologies to provide users with a unique and interactive journaling experience. By combining Large Language Models (LLM) like GPT-4 and open-source alternatives with Retrieval-Augmented Generation (RAG), Zentor transforms traditional journaling into a powerful tool for personal growth and reflection.

<img src="ProjectOverview/Zentor.gif" alt="Zentor is a self-improvements Journal powered by LLM" alt="Zentor AI-powered journaling app interface showing text input area and AI-generated insights panel"/>

## How It's Made:
Tech used: React, Node.js, Express, MongoDB, GPT-4 API, Open-source LLMs, Pinecone, HTML, Tailwind, JavaScript
Zentor was built as a full-stack web application, leveraging modern web technologies to create a seamless and responsive user experience. The front-end was developed using React, allowing for a dynamic and interactive interface that updates in real-time as users journal their thoughts and experiences.

On the back-end, Node.js and Express were used to create a robust API that handles user authentication, data storage, and integration with AI services. MongoDB was chosen as the database to store user journal entries and metadata, providing flexibility for unstructured data and easy scalability.

The core AI functionality of Zentor is powered by a combination of GPT-4 and open-source language models. These models are integrated using custom API wrappers, allowing for seamless switching between different AI providers based on availability and performance requirements.
One of the key challenges in developing Zentor was implementing the Retrieval-Augmented Generation (RAG) system. This involved creating an efficient indexing and retrieval mechanism for users' past journal entries, which could then be used to augment the AI's responses with personalized context. This was achieved by developing a custom vector database and similarity search algorithm, optimized for quick retrieval of relevant past entries.

## Optimizations:
To enhance performance and user experience, several optimizations were implemented in Zentor. Client-side caching was used to store recent journal entries and AI responses, reducing load times and server requests. The AI processing pipeline was optimized through prompt engineering and model fine-tuning, resulting in faster and more relevant responses.

On the database side, indexing strategies were employed to speed up query times, especially for the RAG system's retrieval process. Additionally, a background job system was implemented to handle resource-intensive tasks like periodic re-indexing of journal entries for improved RAG performance.


