# pip install faiss-cpu
from langchain.vectorstores import Chroma
from langchain.embeddings import SentenceTransformerEmbeddings

embedding_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

documents = []

vector_store = Chroma.from_documents(
    documents,
    embedding_model,
    persist_directory="./chroma_db"  # directory to store the DB
)

vector_store.persist()

print("Vector store saved to disk at ./chroma_db")
