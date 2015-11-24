function grow() {

	var dish = d3.select("#dish");
	var c = d3.select("#cee")
	var a_bot = d3.select("#ayy_bot")
	var a_top = d3.select("#ayy_top")

	dish.transition()
		.duration(500)
		.ease("quad")
		.attr("r", 200)
		.style("fill",function() {
		    return "hsl(" + Math.random() * 360 + ",100%,50%)";
		})
		.style("fill-opacity", function(){
			return (Math.random()).toString();
		})

	c.transition()
		.delay(500)
		.duration(2000)
		.ease("quad")
		.attr("r", 200)
		.style("fill",function() {
		    return "hsl(" + Math.random() * 360 + ",100%,50%)";
		})
		.style("fill-opacity", function(){
			return (Math.random()).toString();
		})

	a_bot.transition()
		.delay(500)
		.duration(2000)
		.ease("quad")
		.attr("rx", "70")
		.attr("ry", "150")
		.style("fill",function() {
		    return "hsl(" + Math.random() * 360 + ",100%,50%)";
		})
		.style("fill-opacity", function(){
			return (Math.random()).toString();
		})

	a_top.transition()
		.delay(500)
		.duration(2000)
		.ease("quad")
		.attr("r", 30)
		.style("fill",function() {
		    return "hsl(" + Math.random() * 360 + ",100%,50%)";
		})
		.style("fill-opacity", function(){
			return (Math.random()).toString();
		})
}

setTimeout(grow(), 3000);