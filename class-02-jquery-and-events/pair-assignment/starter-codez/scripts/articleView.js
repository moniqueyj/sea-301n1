// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' +$(this).val()+'"]').fadeIn();
    } else{
      $('article').fadeIn();
      $('article.template').hide();
    }
      // If the select box was changed to an option that has a value, we need to hide all the articles,
      //       and then show just the ones that match for the author that was selected.
      //       Use an "attribute selector" to find those articles, and fade them in for the reader.

      //  If the select box was changed to an option that is blank, we should
      //       show all the articles, except the one article we are using as a template.

    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this.val()) {
      $('article').hide();
      $('artice[data-category="' +$(this).val()'"]').fadeIn;
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};
  // Just like we do for #author-filter above, we should handle change events on the #category-filter element.
  //       When an option with a value is selected, hide all the articles, then reveal the matches.
  //       When the blank (default) option is selected, show all the articles, except for the template.
  //       Be sure to reset the #author-filter while you are at it!

};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
    $('#article').on('click', 'a.read-on', function(e){
      e.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    });
  };

$(document).ready(function () {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
