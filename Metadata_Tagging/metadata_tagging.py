from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.schema import Document

text = "This is a long piece of text that we want to split into smaller chunks for processing with a language model. It can be any content — like text from a PDF or document."

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20
)

chunks = text_splitter.split_text(text)

documents = []
for i, chunk in enumerate(chunks):
    doc = Document(
        page_content=chunk,
        metadata={
            "chunk_number": i + 1,
            "source": "example_text"  
        }
    )
    documents.append(doc)

for doc in documents:
    print(f"Chunk {doc.metadata['chunk_number']} (Source: {doc.metadata['source']}):\n{doc.page_content}\n")
