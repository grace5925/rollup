import x from'external';var self = {get default(){return foo$$1}};if(typeof Symbol!=='undefined'&&Symbol.toStringTag)Object.defineProperty(self,Symbol.toStringTag,{value:'Module'});else Object.defineProperty(self,'toString',{value:function(){return'[object Module]';}});/*#__PURE__*/Object.freeze(self);console.log(self);
function foo$$1 () {
	console.log( x );
}
// trailing comment
export default foo$$1;