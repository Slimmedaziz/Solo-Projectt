$(document).ready(function() {
  $('.card').click(function() {
    $(this).toggle();
  });
});

$(document).ready(function() {
    var teams = [];
    var selectedTeams = [];
    
    $('.card').click(function() {
      var teamName = $(this).data('team');
      if (selectedTeams.length < 2) {
        selectedTeams.push(teamName);
        $(this).slideToggle();
      }
      if (selectedTeams.length === 2) {
        $('#matchup').append('<div>' + selectedTeams[0] + " will face " + selectedTeams[1] + '</div>').slideDown();
        selectedTeams.forEach(function(team) {
          $('[data-team="' + team + '"]').slideToggle();
        });
        selectedTeams = [];
      }
    });
  });
