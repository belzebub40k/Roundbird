function addItems (data) {
   $.each(data.users, function(idx,value){
      document.getElementById('user')
         .appendItem(value,value);
   });
   
   $.each(data.types, function(idx,value){
      document.getElementById('type')
         .appendItem(value,value);
   });
   
   $.each(data.statuses, function(idx,value){
      document.getElementById('status')
         .appendItem(value,value);
   });
   
   $.each(data.priorities, function(idx,value){
      document.getElementById('priority')
         .appendItem(value,value);
   });
   
   $.each(data.components, function(idx,value){
      document.getElementById('component')
         .appendItem(value,value);
   });
   
   $.each(data.versions, function(idx,value){
      document.getElementById('version')
         .appendItem(value,value);
   });
}

function loadData() {
   var issueId = window.arguments[0];
   $.getJSON("http://127.0.0.1/roundup-json.py/bug", addItems);
}

function clickedAccept() {
   var retVals = window.arguments[1];
   var properties = {
      component: [],
      version: [],
      assignee: null,
      type: null,
      status: null,
      priority: null,
      superseder: null
   };
   
   var componentList = [];
   var components = document.getElementById('component').selectedItems;
   $.each(components, function(idx,element){
      componentList.push(element.value);
   });
   properties.component = componentList.join(',');
   
   var versionList = [];
   var versions = document.getElementById('version').selectedItems;
   $.each(versions, function(idx,element){
      versionList.push(element.value);
   });
   properties.version = versionList.join(',');
   
   var type = document.getElementById('type').selectedItem;
   properties.type = type.value;
   
   var status = document.getElementById('status').selectedItem;
   properties.status = status.value;
   
   var priority = document.getElementById('priority').selectedItem;
   properties.priority = priority.value;
   
   var user = document.getElementById('user').selectedItem;
   properties.assignee = user.value;
   
   var user = document.getElementById('superseder');
   properties.superseder = user.value;
   
   
   var propertiesString = '';
   var count = 0;
   $.each(properties, function(idx,value){
      count++;
      
      if(value != ''){
         propertiesString += idx + '=' + value + ';' ;
      }
      
   });
   
   retVals.accepted = true;
   retVals.propertiesString = propertiesString;
}
