﻿function selectionsChanged(event) {    if (event.object instanceof Document)     {        if (event.type == "selectionsChanged")        {                         var externalObjectName = "PlugPlugExternalObject";             var mylib = new ExternalObject( "lib:" + externalObjectName );             var eventObj = new CSXSEvent();             eventObj.type="thumbnailclicked";             var thumb =  app.document.selections[0];            if(thumb)            {                var filepath = thumb.spec.fsName;                                 if( Folder.fs != "Windows" )                {                    filepath = "file://"+filepath;                }                                                                        eventObj.data=filepath;                eventObj.dispatch();             }         }    }}app.eventHandlers.push({handler: selectionsChanged});