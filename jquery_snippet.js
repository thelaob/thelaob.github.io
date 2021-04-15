<script>
var firstName = "";
$(window).on("load", function() {
$(".onBoard").on({
	"click":
  function() {
		$( this ).css("background-color", "yellow");
		console.log(`this: ${this} length: ${this.length} this[0]: ${this[0]}`);
	},
//    firstName = $(this)
//      .text()
//      .split(" ")[0];
    // $("#openBio").html($("#" + firstName).html());
  // ,
  "mouseout":
	function() {
		$( this ).css("background-color", "white");
//    $("#openBio").html("");
  }
});
})
</script>
