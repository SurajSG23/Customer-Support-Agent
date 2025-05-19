import re

text = "Hello!!! This is an example... text 123 with numbers, symbols & extra   spaces."

# Remove special characters (keep only letters and spaces)
cleaned = re.sub(r'[^A-Za-z\s]', '', text)

# Remove extra spaces
cleaned = re.sub(r'\s+', ' ', cleaned).strip()

print(cleaned)
