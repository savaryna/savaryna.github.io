/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8800, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("LOOP");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         $("edity").attr("contentEditable","true");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 667, function(sym, e) {
         $('#Stage_fb-like-bb').append($('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fsavaryna.github.io%2F&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=35&amp;appId=1516810475268920" scrolling="no" frameborder="0" align="middle" style="border:none; overflow:hidden; height:35px;" allowTransparency="true"></iframe>'));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'bradulet'
   (function(symbolName) {   
   
   })("bradulet");
   //Edge symbol end:'bradulet'

   //=========================================================
   
   //Edge symbol: 'hohoho'
   (function(symbolName) {   
   
   })("hohoho");
   //Edge symbol end:'hohoho'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "tabel");