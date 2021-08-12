$(".tab").each(function(index) {
    $(this).click(function(e) {
      triggletab();
      triigletabcontent();
      $(this).toggleClass("active");
      $(".tab-c")
        .eq(index)
        .toggleClass("active");
    });
  });
  //to remove all tab headers
  function triggletab() {
    $(".tab").each(function() {
      $(this).removeClass("active");
    });
  }
  
  //triggle the tab content
  function triigletabcontent() {
    $(".tab-c").each(function() {
      $(this).removeClass("active");
    });
  }
  