class ScratchPopup {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Popup",
            "name": "Popup",
            "blocks": [
             {
                            "opcode": "createPopup",
                            "blockType": "command",
                            "text": "create a popup [pid] id with [width]width and [height]height",
                            "arguments": {
                                "width": {
                                    "type": "number",
                                    "defaultValue": "100"
                                },
                                "height": {
                                    "type": "number",
                                    "defaultValue": "100"
                                },
                                "pid": {
                                    "type": "number",
                                    "defaultValue": "1"
                                },
                            }
                        },
                        {
                            "opcode": "deletePopup",
                            "blockType": "command",
                            "text": "delete popup id[id]",
                            "arguments": {
                                "id": {
                                    "type": "number",
                                    "defaultValue": "1"
                                },
            ]
        }
    }

      createPopup({pid}, {width}, {height}) {
        
    }
}

Scratch.extensions.register(new ScratchFetch())