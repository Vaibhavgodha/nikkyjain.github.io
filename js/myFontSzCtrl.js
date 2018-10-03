$(function() {
  var curGathaSz=3;
  var curArthSz=2;
  var curTableSz=2;
  var curTeekaSz=2;
  $('.incFontSz').click(function() {
      curGathaSz+=1;
      curArthSz+=1;
      curTeekaSz+=1;
      curTableSz+=1;
      $(".gatha").css("font-size", curGathaSz+"vw");
      $(".arth").css("font-size", curArthSz+"vw");
      $(".teeka").css("font-size", curTeekaSz+"vw");
      $(".myTable td").css("font-size", curTableSz+"vw");
      $(".myTable th").css("font-size", curTableSz+"vw");
      $(".myAltTable td").css("font-size", curTableSz+"vw");
      $(".myAltTable th").css("font-size", curTableSz+"vw");
  });
  $('.decFontSz').click(function() {
      curGathaSz-=1;
      curArthSz-=1;
      curTeekaSz-=1;
      curTableSz-=1;
      $(".gatha").css("font-size", curGathaSz+"vw");
      $(".arth").css("font-size", curArthSz+"vw");
      $(".teeka").css("font-size", curTeekaSz+"vw");
      $(".myTable td").css("font-size", curTableSz+"vw");
      $(".myTable th").css("font-size", curTableSz+"vw");
      $(".myAltTable td").css("font-size", curTableSz+"vw");
      $(".myAltTable th").css("font-size", curTableSz+"vw");
  });
});
