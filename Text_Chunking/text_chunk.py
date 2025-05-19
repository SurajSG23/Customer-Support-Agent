from langchain.text_splitter import RecursiveCharacterTextSplitter

text = "This is a long piece of text that we want to split into smaller chunks for processing with a language model. It can be any content — like text from a PDF or document."

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,         # max characters per chunk
    chunk_overlap=20        # number of overlapping characters
)

chunks = text_splitter.split_text(text)

for i, chunk in enumerate(chunks):
    print(f"Chunk {i+1}:\n{chunk}\n")
