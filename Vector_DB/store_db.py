# pip install faiss-cpu
from langchain.vectorstores import FAISS
from langchain.embeddings import SentenceTransformerEmbeddings

# Load the embedding model
embedding_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

# Your documents go here (as LangChain Document objects)
documents = []

# Create a FAISS vector store from the documents
vector_store = FAISS.from_documents(documents, embedding_model)

# Save the vector store to disk
vector_store.save_local("./faiss_db")

print("Vector store saved to disk at ./faiss_db")
