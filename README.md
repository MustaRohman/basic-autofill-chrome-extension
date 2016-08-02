# README #

### What is this repository for? ###

This is a prototype of the AutoFill extension for the Chrome browser. The focus of the extension is currently front-end functionality.Server-side functionality has not been implemented. This extension uses static/fake data in order to test certain features. 

### Assumptions ###
The extension in its current form uses static username and password data. I have assumed that user data would be retrieved using an API from a server. From what I've read, I think it would be more secure to do it this way instead of storing it locally. Also, if there are to be other extensions/plugins/mobile-apps in the future, this would be ideal. 

Currently, the URLs that are to be auto-filled will be stored using chrome.storage or HTML5 local storage. However, it may be best to store/retrieve in/from server only. The problem with chrome.storage is that it isn't encrypted, and HTML5 local storage will require message passing, since storage is differs depending on context (web pages and extension pages are different contexts). For the current prototype, we will use chrome storage due to its simplicity in code.

### How do I get set up? ###

1. Download repository folder using "Downloads" link on left side-bar. You can download the repo from a specific branch in the Downloads screen. (Download "master" for latest updates. These branches will be merged, so watch this space)
2. Open Chrome. Click on "Settings" under the drop-down menu
![Screen Shot 2016-07-10 at 15.25.12.png](https://bitbucket.org/repo/Xa8Xjg/images/3110307171-Screen%20Shot%202016-07-10%20at%2015.25.12.png)
3. Click on "Extensions" link on the left, and check the "Developer Mode" box
![Screen Shot 2016-07-10 at 15.26.27.png](https://bitbucket.org/repo/Xa8Xjg/images/1061228553-Screen%20Shot%202016-07-10%20at%2015.26.27.png)
4. Click "Load unpacked extension" and navigate to the downloaded repository, then click ok.
![Screen Shot 2016-07-10 at 15.35.30.png](https://bitbucket.org/repo/Xa8Xjg/images/3269444388-Screen%20Shot%202016-07-10%20at%2015.35.30.png)

The extension should now appear in the UI of Chrome, next to the address bar. You should be able to interact with the new page action button.

### How to test ###
1. Follow the steps above to set up the extension
2. Go on to a website that has a login page or form
3. Click on the AutoFill extension icon next to the address bar
4. On the popup-login page, click submit.
5. Click on the "Store URL" button in the extension popup
6. Now when you refresh the page, a confirm dialog box should appear asking to fill login form
7. When ok is clicked, the username/email and password field should be filled with static strings.
8. Currently these static (fake) login credentials are used for testing and security purposes

(This will be updated as new functionality/changes is added)

### Extension Architecture ###

- manifest.json

This is where we specify the settings for our extension. The content_script section specifies the script that we want to automatically run on specific web pages (more on this below). The permission section denotes the APIs and webpages we want our extension to access.  

- popup-login, popup-login.js, popup.css

This is the first web page that will be shown in the popup window that appears after you click on the browser action (our extension icon located near the address bar of Chrome, more info: https://developer.chrome.com/extensions/browserAction). This is just a basic login page. Once the user clicks submit, it will then go into popup.html. Login verification has not been implemented. 

- popup.html, popup.js, popup.css

This is page that is viewed once the user clicks on submit in popup-login. This page is loaded into browser action popup view. This page has three buttons: Settings will open settings.html, Store URL saves the current to test the autofilling functionality (as mentioned in “How to Test”), and finally 
Logout (unimplemented). 

- settings.html, settings.js, settings.css

The settings page is used to manage login details for the webpages the user wants to be autofilled. Currently the page has a basic form to input the website's name, URL, username, password and notes. There is also a side bar that will list all of the autofilled websites. Currently the data storage capability has not been implemented.  

- content-script.js

In order to manipulate the elements on the webpage we are on (in this case input fields), we need a content script (https://developer.chrome.com/extensions/content_scripts#execution-environment). This is just some JavaScript that is run in the context of the page that is loaded into the browser. The script executes in an environment called an isolated world. This means that it can’t access the functions and variables created by popup.js or scripts for the website itself. But context scripts have access to the DOM of the loaded web page, which is what we need. Another benefit of content scripts is that it doesn’t overwrite the scripts that belong to the loaded web page, or vice versa. Both scripts will run without interrupting each other.  

So content-script.js contains our form-filling functionality, which runs when the URL that we’re currently on has been stored. This script also injects code into the submit button of any form if the current URL isn’t saved. Functionality for retrieving username and password value has been added here. However, the actual saving of the data has not been implemented. 

- icon.png
Icon for the browser action

### Libraries ###
- jQuery 

This JavaScript library makes it easier and simpler to manipulate the DOM, as well as event handling. It's also make Javascript code much more readable overall.

- jQuery UI

This library is used to make widgets built upon the jQuery library. Currently jQuery UI is only used for the for the autocomplete search bar, but it will likely be used for other features as this extension evolves.

- Bootstrap

HTML, CSS and Javascript framework which helps to mobile-first front-end development faster and easier. Bootstrap has been used for all web pages included in this extension. 
