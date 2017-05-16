$(document).ready(function() {
	
	$('#wrapper ul.tabs a').click(function(e){
		
		e.preventDefault();


		$('#wrapper > div').hide().filter(this.hash).show();
        

		$('#wrapper ul.tabs a').removeClass('selected');
		

		$(this).addClass('selected');
        
        
        
	}).filter(':first').click();
	
	
	$('#button').click(function(){
		
		var picklePreference1 = $("input[name=flavor]:checked").val()
		var picklePreference2 = $("input[name=size]:checked").val()
		
		PickleReccomendation(picklePreference1,picklePreference2);
		
		
	});
    
    	$('#button2').click(function(){
            
            var pickleBuy1 = $('#dillQty').val();
            var pickleBuy2 = $('#breadQty').val();
            var pickleBuy3 = $('#polishQty').val();
            var pickleBuy4 = $('#gherkinQty').val();
            
            PicklePurchase(pickleBuy1,pickleBuy2,pickleBuy3,pickleBuy4)


});
    
});

    
function PicklePurchase(pp1, pp2, pp3, pp4) {
    $('#outputOrderTotal').html('$'+parseFloat((pp1*1.00)+(pp2*1.50)+(pp3*2.00)+(pp4*0.50)).toFixed(2));
}
    
    
    
function PickleReccomendation( pp1, pp2) {
	var pickleReccomend = new Array("Kosher Dill","Bread and Butter","Polish-style Pickle","Gherkin");
			if (pp1 == "sweet"){
			if (pp2 == "large"){
				$('#outputPickleRecomendation').html(pickleReccomend[0])
			} else if (pp2 == "small"){
				$('#outputPickleRecomendation').html(pickleReccomend[1])
			}
		} else if (pp1 == "salty") {
				if (pp2 == "large"){
					$('#outputPickleRecomendation').html(pickleReccomend[2])
				} else if (pp2 == "small"){
					$('#outputPickleRecomendation').html(pickleReccomend[3])
				}
			}
		
		
}