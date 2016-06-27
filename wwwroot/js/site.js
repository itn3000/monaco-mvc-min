// Write your Javascript code.
if (typeof (require) != "undefined") {
    require.config({
        paths: {
            "vs": "/jslib/monaco-editor/min/vs",
            "vue": "/jslib/vue/dist"
        }
    });
}
// var Vue = require("vue/vue");
// console.log(Vue);
// var m = require("vs/editor/editor.main");
// console.log(m);
require(["vue/vue", "vs/editor/editor.main"], function (Vue, M) {
    console.log(1);
    console.log(Vue);
    console.log(2);
    //console.log(VueRouter);
    console.log(3);
    var m = require("vs/editor/editor.main");
    console.log(m);
    var editor = monaco.editor.create(document.getElementById("editor-container"), {
        value: [
            "function x(){",
            "\tconsole.log(\"\");",
            "}"
        ].join("\n"),
        language: "javascript"
    }
    );
    var app = new Vue({
        el:"#vue-container",
        data:{
            editorText:""
        },
        methods:{
            onDownload:function(ev){
                console.log("in onDownload");
                console.log(ev);
                console.log(editor.getValue());
                console.log(this.editorText);
                this.editorText = editor.getValue();
            }
        },
        created:function (params) {
            this.editorText = editor.getValue();
        }
    });
    return Vue;
});
// define("X", ["vue/vue", "vs/editor/editor.main"], function (V, M) {
//     // console.log(1);
//     // console.log(V);
//     // console.log(2);
//     // console.log(monaco);
//     // console.log(3);
//     // return V;
//     var app = V.extend();
//     // var m = require("vs/editor/editor.main");
//     // console.log(m);
//     var editor = monaco.editor.create(document.getElementById("editor-container"), {
//         value: [
//             "function x(){",
//             "\tconsole.log(\"\");",
//             "}"
//         ].join("\n"),
//         language: "javascript"
//     }
//     );
// });
