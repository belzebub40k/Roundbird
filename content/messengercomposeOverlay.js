function openProperties() {
   var subject = document.getElementById("msgSubject").value;
   var issueId = 0;
   var retVals = {accepted: false, propertiesString: ''};
   
   var issue = subject.match('/\[bug[0-9]+\]/');
   
   Application.console.log(issue);

   window.openDialog(
     "chrome://roundbird/content/roundupPropertiesDialog.xul",
     "roundup-properties-dialog", "chrome,modal",
     issueId, retVals);

   if (retVals.accepted == true) {
      document.getElementById("msgSubject").value = '[' + retVals.propertiesString + ']';
   }
}
