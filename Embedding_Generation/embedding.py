from langchain.embeddings import SentenceTransformerEmbeddings

documents = []

embeddings_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

texts = [doc.page_content for doc in documents]

embeddings = embeddings_model.embed_documents(texts)

print(f"Embedded {len(embeddings)} chunks.")

for i, emb in enumerate(embeddings):
    print(f"Chunk {documents[i].metadata['chunk_number']} embedding length: {len(emb)}")
