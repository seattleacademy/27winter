# 27winter
#Instructions
 1. Log into terminal
 
 2. git clone http://github.com/seattleacademy/27winter 27winter
 
 3. cd 27winter
 
 4. npm install
 
 5. download server.js and the apps directory into Sublime
 
 6. change port on line 3 of server.js to your assigned port in the 1500 to 1540 range
 
 7. node server.js
 
 8. In browswer, change xxxx to your port and open Alexa Tester at https://seattleacademy.software/xxxx/alexa/sheet
 
 9. Login to https://developer.amazon.com/home.html, select Alexa Tab
 
 10.  From Alexa Skill kit, click Getting Started button.
 
 11.  Create new Skill and Give the app a name of Google Sheets and an invocation name of sheet.  Click 
 
 12.  From the Alexa Tester page, copy intents to the Apps intents and utterances to the Apps utterances.  Click next.
 
 13.  From the configuration tab, select https, North America, and past the url from Alexa Tester.  Select that we have  trusted certificate authority for the ssl certificate.
 
 14.  Create a Google sheet, put in some content, and from the file menu, select Pubish to Web
 
 15.  Copy the Sheet ID from the URL of Google sheets and put it replace it in index.js of the sheet app
 
 16.  Test that it reads the sheets contents by saying Alexa Launch sheet
 
 17.  Change for your needs.
 
 18.  Copy the Application ID from the first tab of the skill, and replace the other id in package.json of the app. Save.
 
 19.  Control-C from the server and cd app/sheet
 
 20.  npm install to make the sheet app for AWS
 
 21.  zip -r archive.zip index.js package.json node_modules/
 
 22.  Go to AWS site and log in with Amazon account
 
 23. Click on Services -> compute -> lambda
 
 24. Create a Lambda Function with Blank Function blueprint
 
 25. Select Alexa Skills Kit as trigger
 
 26. Name function sheetReader, add description "reads Google Sheets"
 
 27. set Code Entry Type to 'Upload Zip', upload archive.zip
 
 28. Set role to "custom role", and allow default lambda execution
 
 29. Click next and then create function
 
 30. Click test, then copy ARN link in top right corner.
 
 31. In Alexa Skills, change configuration from seattleacademy.software/xxxx/ to the ARN link, and change bubble select from HTTPS to AWS
 
 32. Test Alexa Skill
