# README #

### What is this repository for? ###

This is a prototype of the AutoFill extension for the Chrome browser.

### How do I get set up? ###

1. Download repository folder using "Downloads" link on left side-bar. You can download the repo from a specific branch in the Downloads screen. (Download "chrome-storage" for latest updates. These branches will be merged, so watch this space)
2. Open Chrome. Click on "Settings" under the drop-down menu
![Screen Shot 2016-07-10 at 15.25.12.png](https://bitbucket.org/repo/Xa8Xjg/images/3110307171-Screen%20Shot%202016-07-10%20at%2015.25.12.png)
3. Click on "Extensions" link on the left, and check the "Developer Mode" box
![Screen Shot 2016-07-10 at 15.26.27.png](https://bitbucket.org/repo/Xa8Xjg/images/1061228553-Screen%20Shot%202016-07-10%20at%2015.26.27.png)
4. Click "Load unpacked extension" and navigate to the downloaded repository, then click ok.
![Screen Shot 2016-07-10 at 15.35.30.png](https://bitbucket.org/repo/Xa8Xjg/images/3269444388-Screen%20Shot%202016-07-10%20at%2015.35.30.png)

The extension should now appear in the UI of Chrome, next to the address bar. You should be able to interact with the new page action button.

### Extension Architecture ###
- popup.html
- popup.js
- content-script.js
- jquery-3.0.0.js
- manifest.json
- settings.html
- icon.png

### Assumptions ###
The extension in its current form uses static username and password data. I have assumed that user data would be retrieved using an API from a server. From what I've read, I think it would be more secure to do it this way instead of storing it locally. Also, if there are to be other extensions/plugins/mobile-apps in the future, this would be ideal. 

Currently, the URLs that are to be auto-filled will be stored using chrome.storage or HTML5 local storage. However, it may be best to store/retrieve in/from server only. The problem with chrome.storage is that it isn't encrypted, and HTML5 local storage will require message passing, since storage is differs depending on context (web pages and extension pages are different contexts). For the current prototype, we will use HTML5 local storage.