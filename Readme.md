Here’s the enhanced and structured version of your handwritten notes, step-by-step:


---

Phase 1 – Pipeline for Document-Based LLM System


---

1. Document Upload

Frontend: Built using React + TypeScript

Backend: Implemented using FastAPI

Goal: Allow users to upload documents for processing.



---

2. Text Extraction

Use libraries like fitz from PyMuPDF.

Cleaning process:

Remove unwanted characters, extra spaces, newlines, or symbols using regular expressions (regex).

This helps reduce noise in the text.

Leads to better chunking and fewer tokens during embedding.




---

3. Text Chunking

Use LangChain's text_splitter.

Purpose: Split large documents into smaller, manageable chunks.

Why?

LLMs have token limits.

Chunking enables efficient search and accurate results.




---

4. Metadata Tagging

Attach metadata to each chunk such as:

Source (document name)

Page number

ID

Timestamps


Benefits:

Track the origin of the chunk.

Better traceability.


Tool: langchain.schema.Document is used to wrap text with metadata.



---

5. Embedding Generation

Use LangChain + HuggingFace Embeddings.

What is embedding?

A numerical representation of the text.


Alternatives:

Use sentence-transformers like:

sentence-transformers/all-MiniLM-L6-v2



These embeddings are then stored in a vector database.



---

6. Store in Vector DB

Use LangChain + FAISS:

FAISS = Facebook AI Similarity Search

Helps store and query vector representations efficiently.


Why vector DB?

Fast similarity search.

Helps capture the semantic meaning of text for relevant retrieval.




---

Would you like me to generate a visual flowchart or code snippets for any of these steps?

Here’s a clear step-by-step breakdown of your Phase 2 notes (from the new image you uploaded), followed by a flowchart-style description you can use to create a diagram similar to the one in the previous image.


---

Phase 2 – Enhanced LLM Integration Workflow


---

1. Query Input with Metadata

Use LangChain’s RetrievalQA to handle:

Query input

Query metadata (e.g., user ID, timestamp, intent)


Purpose: Improve personalization and context-awareness in responses.



---

2. Custom Prompt Templates

Design prompts that include:

System instructions

Retrieved document chunks

Query context


Helps maintain response consistency and clarity.



---

3. Multi-Document Retrieval

Query may pull data from multiple documents.

Retrieve top-k chunks from vector DB using similarity scores.

Ensures comprehensive answers with broader context.



---

4. Response Post-Processing

Format the LLM response:

Bullet points

Highlights

Source references


Improve readability and trustworthiness of the answer.



---

5. Source Attribution

Clearly link each chunk used in the response back to:

Original document

Page number or timestamp


Boosts transparency and traceability.



---

6. Feedback & Rating UI

Let users:

Rate answers

Mark as helpful or not


Feedback is stored for analytics and RAG loop improvements.



---

Diagram Style (Flowchart for Phase 2)


---

1. USER INTERACTION

Query Input with Metadata

→ Send to LangChain's RetrievalQA



---

2. DOCUMENT QUERYING

Vector Similarity Search

→ Multi-Document Top Chunks Retrieved



---

3. RESPONSE ASSEMBLY

Prompt Template + Retrieved Chunks

→ LLM Response Generation

→ Post-Processing and Formatting

→ Source Attribution



---

4. FINAL OUTPUT

Answer Sent to User with Sources



---

5. FEEDBACK LOOP

Feedback UI

→ Rating + Logging

→ RAG Optimization and Analytics



---

Would you like me to generate a flowchart image based on this structure?

