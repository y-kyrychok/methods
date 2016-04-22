Element.prototype.remove = function() {
if(!this.parentNode) return 
	this.parentNode.removeChild(this)
};


Element.prototype.before = function(node) {
if(!this.parentNode) return

	var frag = new DocumentFragment
	for (var node of arguments)
	{
		if(typeof node == "string")
			{
				node = /^<\w+>$/.test(node)
				? this.ownerDocument.createElement(node.slice(1, -1))
				:new Text(node)
			}
			frag.appendChild(frag)
	}
	this.parentNode.insertBefore(frag, this)	
};