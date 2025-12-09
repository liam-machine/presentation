import re

# Fix each file
for i in range(3, 17):
    filename = f"slide-{i:02d}.html"
    with open(filename, 'r') as f:
        content = f.read()

    # Fix the broken CSS structure
    content = re.sub(
        r'body \{\n\}\n\.logo \{\n  position: absolute; bottom: 15pt; left: 20pt; width: 80pt; height: auto;\n\n  width: 720pt; height: 405pt; margin: 0; padding: 0;\n  background: #FFFFFF; font-family: Arial, sans-serif;\n  display: flex; flex-direction: column;; position: relative;',
        'body {\n  width: 720pt; height: 405pt; margin: 0; padding: 0;\n  background: #FFFFFF; font-family: Arial, sans-serif;\n  display: flex; flex-direction: column; position: relative;\n}\n.logo {\n  position: absolute; bottom: 15pt; left: 20pt; width: 80pt; height: auto;',
        content
    )

    with open(filename, 'w') as f:
        f.write(content)

print("Fixed CSS in slides 3-16")
