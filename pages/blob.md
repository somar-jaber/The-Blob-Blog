---
layout : "base-layout.njk"
tags: ["ComputerScience"]
---

# Blob

<span class="hashtag" >#ComputerScience</span>
### **What is a `Blob` in JavaScript? Is it a Data Type?**  

Yes! A **`Blob` (Binary Large Object)** is a built-in JavaScript data type used to represent raw, immutable binary data. It’s commonly used for handling files (e.g., images, PDFs) or large chunks of data in web applications.

---

### **Key Features of `Blob`**
1. **Stores Binary Data**: Can hold text, images, audio, etc.  
2. **Immutable**: Cannot be modified directly (but can be sliced).  
3. **Browser/Node.js Support**: Available in both environments.  
4. **Used with APIs**:  
   - **File API** (e.g., `File` is a subclass of `Blob`).  
   - **Fetch API** (e.g., `response.blob()`).  
   - **IndexedDB/FileSystem** (storing large files).  

---

### **How to Create a `Blob`**
#### **1. From Text/String**
```javascript
const blob = new Blob(["Hello, world!"], { type: 'text/plain' });
console.log(blob.size); // 13 (bytes)
console.log(blob.type); // "text/plain"
```

#### **2. From JSON**
```javascript
const data = { name: "Alice" };
const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
```

#### **3. From ArrayBuffer**
```javascript
const buffer = new ArrayBuffer(8);
const blob = new Blob([buffer], { type: 'application/octet-stream' });
```

---

### **Common Use Cases**
#### **1. Download Files**
```javascript
const blob = new Blob(["File content"], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'example.txt';
a.click();
URL.revokeObjectURL(url); // Clean up
```

#### **2. Read `Blob` Data**
```javascript
const reader = new FileReader();
reader.onload = () => console.log(reader.result);
reader.readAsText(blob); // Or readAsDataURL(), readAsArrayBuffer()
```

#### **3. Slice a `Blob` (Chunking)**
```javascript
const chunk = blob.slice(0, 1024); // First 1KB
```

---

### **`Blob` vs Other Data Types**
| Type       | Mutable? | Use Case                     | Example                  |
|------------|----------|------------------------------|--------------------------|
| `Blob`     | ❌ No    | Binary files/streams         | `new Blob([data])`       |
| `ArrayBuffer` | ✅ Yes | Raw binary memory            | `new ArrayBuffer(8)`     |
| `File`     | ❌ No    | User-uploaded files          | `input.files[0]`         |
| `String`   | ✅ Yes   | Text data                    | `"Hello"`                |

---

### **Browser Compatibility**
- Supported in all modern browsers (Chrome, Firefox, Safari, Edge).  
- Node.js: Use the `Buffer` class for similar functionality.  

---

### **Summary**
- **`Blob` is a data type** for raw binary data.  
- **Immutable** but can be sliced/chunked.  
- **Essential for file handling** in web apps.  

Need to process a `Blob`? Try `FileReader` or `URL.createObjectURL()`! 
