# External Dependencies

This skill requires external system tools that must be installed separately from Python/Node.js packages.

## Required Tools

### 1. LibreOffice (for thumbnail.py)

**Purpose**: Converts PowerPoint files to PDF format

**Installation:**
- **Windows**:
  1. Download from https://www.libreoffice.org/download/download/
  2. Run installer
  3. Verify: Open Command Prompt and run `soffice --version`

- **Linux (Ubuntu/Debian)**:
  ```bash
  sudo apt-get update
  sudo apt-get install libreoffice
  ```

- **macOS**:
  ```bash
  brew install --cask libreoffice
  ```

### 2. Poppler (for thumbnail.py)

**Purpose**: Converts PDF files to images

**Installation:**
- **Windows**:
  1. Download from https://github.com/oschwartz10612/poppler-windows/releases
  2. Extract to `C:\Program Files\poppler\`
  3. Add `C:\Program Files\poppler\Library\bin` to PATH environment variable
  4. Verify: Open new Command Prompt and run `pdftoppm -v`

- **Linux (Ubuntu/Debian)**:
  ```bash
  sudo apt-get install poppler-utils
  ```

- **macOS**:
  ```bash
  brew install poppler
  ```

## Verification

After installation, verify all tools are available:

```bash
# Check LibreOffice
soffice --version

# Check Poppler
pdftoppm -v
```

## Troubleshooting

### "Command not found" errors on Windows

- Ensure tools are added to PATH environment variable
- Restart Command Prompt/PowerShell after PATH changes
- Use full path if PATH not working: `"C:\Program Files\LibreOffice\program\soffice.exe"`

### Permission errors on Linux/macOS

- Use `sudo` when installing packages
- Ensure execute permissions: `chmod +x /path/to/tool`

### LibreOffice fails to convert

- Ensure no other LibreOffice processes are running
- Try running with full path: `"C:\Program Files\LibreOffice\program\soffice.exe" --headless --version`
- Check that you have write permissions to the output directory

### Poppler fails to convert

- Ensure the PDF was created successfully first
- Check that `pdftoppm` is in your PATH
- Try running manually: `pdftoppm -jpeg -r 150 input.pdf output`
