// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("18.6em")
                .setTop("32.6em")
                .setWidth("21.257142857142856em")
                .setHeight("6.628571428571429em")
                .setCaption("Button")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput5")
                .setLeft("0.7619047619047619em")
                .setTop("3.8095238095238093em")
                .setWidth("29.409523809523808em")
                .setHeight("4.8em")
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id":"1",
                        "caption":"Парацетамол",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"2",
                        "caption":"Ибупрофен",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"3",
                        "caption":"Мелоксикам",
                        "imageClass":"xui-icon-number3"
                    }
                ])
                .setCustomStyle({
                    "ICONB":{
                        "color":"#DC143C",
                        "line-height":"1.22"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput194")
                .setLeft("0.7619047619047619em")
                .setTop("11.428571428571429em")
                .setWidth("29.409523809523808em")
                .setHeight("4.8em")
                .setVisibility("visible")
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id":"3.1",
                        "caption":"3.75 мг."
                    },
                    {
                        "id":"3.2",
                        "caption":"5 мг."
                    },
                    {
                        "id":"3.3",
                        "caption":"7.5 мг."
                    }
                ])
                .beforeUIValueSet([
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_comboinput194",
                        "args":[ ],
                        "method":"show",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_comboinput5}",
                                "symbol":"objarrhaskey",
                                "right":"{1}"
                            }
                        ]
                    },
                    {
                        "desc":"Action 2",
                        "type":"control",
                        "target":"xui_ui_comboinput194",
                        "args":[ ],
                        "method":"hide",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_comboinput5}",
                                "symbol":"objarrhaskey",
                                "right":"{2;3}"
                            }
                        ]
                    }
                ])
                .onCommand([ ])
                .setCustomStyle({
                    "ICONB":{
                        "color":"#DC143C",
                        "line-height":"1.22"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});