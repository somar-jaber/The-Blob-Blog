---
layout : "base-layout.njk"
title: "Deep into the Context Menu of Directories"
tags: ["Tech"]
---

in Windows when you click the `right-click` on your mouse after selecting a *Folder* or a *File* a drop-menu opens. This menu called the Context menu in Windows.

First we will start with the directories then at the end we will speak about the files. To edit the context menu we should go to one of the forbidden areas in Windows - **The Registry Files**. 
To edit them you need to search in your search bar for **Registry Editor**. Open it to see multiple main folders. The one that we need called
`HKEY_CLASSES_ROOT` .

Inside it go to `> Directory` to see the folders
<pre>
|
|_ Background
|_ DefaultIcon 
|_ Shell
|_ Shellex
</pre>

Here this folder is where we edit the _Context menu_ of folders.

Now let's apply a useful experiment. We will add **Open with VLC** to the _Context menu_ of folders. we will add it twice:
- once to open the current opened directory in VLC (*Where you are inside the folder*)
- once to Open the current selected folder in VLC (*Where you are outside the folder and already selected it by your cursor*)

### Add "Open with VLC" to the *Background* Context Menu
#### Method 1: Manual Registry Edit
1. Open Registry Editor (Win + R → regedit → Enter).  
2. Navigate to:  
  
   `HKEY_CLASSES_ROOT\Directory\Background\shell`
   
   *(This controls the right-click menu when clicking inside a folder.)*  
3. Create a new key named Open with VLC:
   - Right-click shell → New → Key → Name it Open with VLC.  
4. Set the default value (optional display text):  
   - Double-click (Default) inside the new key and set it to Open with VLC.  
5. Add an icon (optional):  
   - Right-click Open with VLC → New → String Value → Name it Icon.  
   - Set its value to:  
    
     `C:\Program Files\VideoLAN\VLC\vlc.exe`
     (*Note: change the directory as your program installed, it might be in `C:\Program Files (x86)\`* )
     
6. Create the command key:  
   - Right-click Open with VLC → New → Key → Name it command.  
   - Set its (Default) value to:  
```
"C:\Program Files\VideoLAN\VLC\vlc.exe" "%V"
```
*(Note: %V passes the current folder path.)*

7. Restart File Explorer (Task Manager → explorer.exe → Restart).  

#### **Method 2: Use a .reg File**
1. ONotepadad** and paste:  
  
   Windows Registry Editor Version 5.00

   [HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VLC]
   @="Open with VLC"
   "Icon"="\"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe\""

   [HKEY_CLASSES_ROOT\Directory\Background\shell\Open with VLC\command]
   @="\"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe\" \"%V\""
   
2. Save as **vlc_folder_background.reg**.
3. Double-click theYes **Yes** to merge into the registry.  
4. File Explorerplorer** (or reboot).Why This Works Works**
- Directory\Background\shell afferight-click menu inside foldersolders**.  
- %V ensures VLC opcurrent folderfolder** (not a selected file).Troubleshootingooting**
- If it doesn’t work, checkVLC pathC path** (adjust if installed elsewhere, e.g., Program Files (x86))Permissionsssions** (run Registry Editor as Admin)Conflictsflicts** (use [ShellExView](https://www.nirsoft.net/utils/shexview.html) to check for blocked entries). right-click inside any folderfol"Open with VLC"h VLC"** should work!
<br>

### Add "Open with VLC" to the for folders
Same as the above but with slightly difference.
You go to the next directory:
	`HKEY_CLASSES_ROOT\Directory\shell`
Instead of `HKEY_CLASSES_ROOT\Directory\Background\shell`
and follow the same old steps, but in the key command the default string value should be :
```
"C:\Program Files\VideoLAN\VLC\vlc.exe" "%1"
```

**SO this is all for Directories (folders), if you want to edit the Background Context menu edit in**
`HKEY_CLASSES_ROOT\Directory\Background\shell`
**If you want to edit the Folder Context menu edit in** `HKEY_CLASSES_ROOT\Directory\shell`
<br>
<br>
<br>


---
## Now About Files 
Most of the things are files in Windows so there is no one specific directory to edit in, it depends on what type of file you want to edit. So to edit the context menu to all the files you should edit 
```
     HKEY_CLASSES_ROOT\*\shell
```
where the `*` means all the files. But if you want to edit the `.mp4` files type context menu :
```
   HKEY_CLASSES_ROOT\.mp4\shell
```

**So now we will see how to add Open With VLC to files with a Bonus at the end**
<br>
<br>


### Add Open with VLC to Files :
To add "Open with VLC" to the right-click context menu for individual files (like videos, music, etc.), you can modify the registry to include VLC in the context menu for all files or specific file types. Here’s how:

---

### Method 1: Add "Open with VLC" for All Files
This will make the option appear when right-clicking any file (not just media files).

#### Steps:
1. Open Registry Editor  
   - Press Win + R, type regedit, and hit Enter.

2. Navigate to the File Context Menu Key  
   - Go to:
   ```cmd 
     HKEY_CLASSES_ROOT\*\shell
   ```
   - *(This applies to all file types.)*

3. Create a New Key for VLC  
   - Right-click shell → New → Key → Name it Open with VLC.
   - *(Optional)* To add an icon:
     - Right-click the Open with VLC key → New → String Value → Name it Icon.
     - Set its value to:
      
       `"C:\Program Files\VideoLAN\VLC\vlc.exe"`
       
4. Add the Command  
   - Right-click Open with VLC → New → Key → Name it command.
   - Double-click the (Default) value inside command and set it to:
    
     `"C:\Program Files\VideoLAN\VLC\vlc.exe" "%1"`
     
     *(Adjust the path if VLC is installed elsewhere.)*

5. Restart File Explorer  
   - Open Task Manager (Ctrl + Shift + Esc), find Windows Explorer, and restart it.

---

### Method 2: Add "Open with VLC" for Specific File Types (e.g., .mp4, .mkv)
If you only want VLC to appear for video files, target specific extensions (e.g., .mp4, .mkv).

#### **Example for .mp4 Files:**Open Registry Editoror** (regedit).  
2. Navigate to:
```cmd  
   HKEY_CLASSES_ROOT\.mp4\shell
```   
   *(If .mp4 doesn’t have a shell key, create one.)*  
3. Follow the same stepsMethod 1 1** to create Open with VLC and command keys.  
4. Restart File Explorer.

---

### **Method 3: Use a .reg File (Quick Setup)**
Copy to Notepadotepad and paste:
```shell  
   Windows Registry Editor Version 5.00

   [HKEY_CLASSES_ROOT\*\shell\Open with VLC]
   @="Open with VLC"
   "Icon"="\"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe\""

   [HKEY_CLASSES_ROOT\*\shell\Open with VLC\command]
   @="\"C:\\Program Files\\VideoLAN\\VLC\\vlc.exe\" \"%1\""
```
2. Save as **vlc_file_context.reg** (select **"All Files"** as the type).  
3. Double-cYese file → **Yes** to merge into the registrFile Explorer*File ExplorTroubleshootingrouOption doesn’t appear?oesn’t appear?**  
  - Ensure the registry path is correct (e.g., HKEY_CLASSES_ROOT\*\shell for all fiRegistry Editor as Administrator AdminVLC doesn’t open the file?open the file?**  
  - Check if the file path in the registry is correct (e.g., Program Files (x86) for 32-bit VLC).  
  - Reinstall VLC if the executable is corruptBonus: Add "Add to VLC Playlist" VLC Playlist"**queue files in VLCe files in VLC** instead of opening them immediately, modify the command to:
"C:\Program Files\VideoLAN\VLC\vlc.exe" --started-from-file --playlist-enqueue "%1"
