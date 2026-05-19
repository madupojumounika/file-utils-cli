# 📁 file-utils-cli

![npm version](https://img.shields.io/npm/v/@madupojumounika/file-utils-cli)
![Node.js](https://img.shields.io/badge/node-%3E%3D14-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![CLI Tool](https://img.shields.io/badge/CLI-Tool-orange)
![Status](https://img.shields.io/badge/status-active-success)

A simple and powerful **Node.js Command Line Interface (CLI)** tool to perform file operations like counting words, lines, characters, cleaning text files, analyzing file statistics and searching keywords inside text files.

---

## ✨ Why this project?

This project is built to simulate a **real-world developer CLI tool** used in production environments.

It helps you:
- Understand Node.js CLI development
- Work with file systems
- Build modular backend tools
- Experience real open-source structure

---

## 🚀 Features

- 📊 Count words in a file
- 📄 Count lines in a file
- 🔤 Count characters in a file
- 🧹 Clean text files (remove extra spaces & empty lines)
- 📑 Analyze file statistics (lines, words, characters, size, empty lines)
- 🔍 Search keywords inside text files
- 🎨 Beautiful CLI output using Chalk
- ⚡ Fast and lightweight



---

## 📦 Installation

### Install directly from npm
```bash
npm install -g @madupojumounika/file-utils-cli
```

### 1. Clone the repository
```
git clone https://github.com/madupojumounika/file-utils-cli.git
cd file-utils-cli
```
### 2. Install dependencies
```
npm install
```
### 3. Link CLI globally
```
npm link
```

---

## ⚡ How to Use

After installing globally, use the CLI like this:

### 📊 Count Words
```
file-utils count_words samples/example1.txt
```

### 📄 Count Lines
```
file-utils count_lines samples/example1.txt
```

### 🔤 Count Characters
```
file-utils count_chars samples/example1.txt
```

### 🧹 Clean File
```
file-utils clean samples/example2.txt
```
### 📑 Analyze File

```bash
file-utils analyze samples/example1.txt
```
### 🔍 Search Keyword
```
file-utils search "hello" samples/example3.txt
```

### 🧾 Help & Version
```
file-utils --help   # show all commands
file-utils -h       # shortcut help
file-utils -V       # version
```

---

## 📁 Project Structure

```
file-utils-cli/
├── bin/
│   └── file-utils.js
├── tasks/
│   ├── task1.js
│   ├── task2.js
│   ├── task3.js
│   ├── task4.js
├── samples/
│   ├── example1.txt
│   ├── example2.txt
├── index.js
├── package.json
├── README.md

```
---

## 🛠 Tech Stack
- Node.js
- Commander.js
- Chalk
- File System (fs module)
- npm

---

## 🤝 Contributing
We welcome contributions 🚀

### 1. Fork the repo

### 2. Clone your fork
```
git clone https://github.com/your-username/file-utils-cli.git
```
### 3. Create branch
```
git checkout -b feature-name
```
### 4. Commit changes
```
git commit -m "Add feature"
```
### 5. Push changes
```
git push origin feature-name
```
### 6. Open Pull Request

---

## ⭐ Show Your Support

If you like this project:

- ⭐ Star this repository
- 🍴 Fork it
- 🚀 Share it with others
- 🧠 Improve it with new features

