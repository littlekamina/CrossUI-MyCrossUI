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
                .setLeft("19.047619047619047em")
                .setTop("34.285714285714285em")
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
                        "id":"a",
                        "caption":"Парацетамол",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Ибупрофен",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
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
                .setLabelSize("8em")
                .setLabelCaption("Drop List Input")
                .setType("listbox")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Парацетамол",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"Ибупрофен",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"Мелоксикам",
                        "imageClass":"xui-icon-number3"
                    }
                ])
                .setVisibility("hidden")
                .onCommand([
                    {
                        "desc":"Action 1",
                        "type":"page",
                        "target":"*",
                        "args":[ ],
                        "method":"show",
                        "conditions":[
                            {
                                "left":"{page.xui_ui_comboinput5}",
                                "symbol":"=",
                                "right":"{page.xui_ui_comboinput5.getValue(Парацетамол)}"
                            }
                        ]
                    }
                ])
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