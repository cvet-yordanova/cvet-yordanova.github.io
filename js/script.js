// function retrieveMyUploads() {
//     var results = YouTube.Channels.list('contentDetails', {mine: true});
  
//     for(var i in results.items) {
//       var item = results.items[i];
//       // Get the playlist ID, which is nested in contentDetails, as described in the
//       // Channel resource: https://developers.google.com/youtube/v3/docs/channels
//       var playlistId = item.contentDetails.relatedPlaylists.uploads;
  
//       var nextPageToken = '';
  
//       // This loop retrieves a set of playlist items and checks the nextPageToken in the
//       // response to determine whether the list contains additional items. It repeats that process
//       // until it has retrieved all of the items in the list.
//       while (nextPageToken != null) {
//         var playlistResponse = YouTube.PlaylistItems.list('snippet', {
//           playlistId: playlistId,
//           maxResults: 25,
//           pageToken: nextPageToken
//         });
  
//         for (var j = 0; j < playlistResponse.items.length; j++) {
//           var playlistItem = playlistResponse.items[j];
//           Logger.log('[%s] Title: %s',
//                      playlistItem.snippet.resourceId.videoId,
//                      playlistItem.snippet.title);
  
//         }
//         nextPageToken = playlistResponse.nextPageToken;
//       }
//     }
//   }
  



// (function youtubeApi() {

//     console.log('hi');
//     let key = "AIzaSyDFdBJXSnRm5UknY-Mjy2xwG3WhCdr4SFc";
//     let channelName = 'OmegaWeb';

//     $.get(
//         "https://www.googleapis.com/youtube/v3/search", {
//             part: 'snippet',
//             channelId:'UCCmQSX_HVkesaKM2DJPTVSg',
//             type: 'video',
//             key: 'AIzaSyDFdBJXSnRm5UknY-Mjy2xwG3WhCdr4SFc',
//             function(data){
//                 console.log(data);
//                 $.each(data.items, function(i, item){
//                     console.log(item);
//                 })
//             }
//         }
//     )

// })()


(function navigationLinks() {
    let homeButton = document.getElementById("home-b");
    let portfolioButton = document.getElementById("portfolio-b");
    let blogButton = document.getElementById("blog-b");
    let galleryButton = document.getElementById("gallery-b");

    $(document).ready(function(){
        allSectionsFadeOut();
        $('#skills').fadeIn(200);
    })

    homeButton.addEventListener("click", function(event){
        event.preventDefault();
        allSectionsFadeOut();
        toggleClass(homeButton)
        $('#skills').fadeIn(200);
    });

    portfolioButton.addEventListener("click", function(event){
        event.preventDefault();
        allSectionsFadeOut();
        toggleClass(portfolioButton)
        $('#portfolio').fadeIn(200);
    });

    blogButton.addEventListener("click", function(event){
        event.preventDefault();
        allSectionsFadeOut();
        toggleClass(blogButton)
        $('#blog').fadeIn(200);
    });

    galleryButton.addEventListener("click", function(event){
        event.preventDefault();
        allSectionsFadeOut();
        toggleClass(galleryButton)
        $('#gallery').fadeIn(200);
    });

    function allSectionsFadeOut(){
        $('#portfolio').fadeOut(400);
        $('#skills').fadeOut(400);
        $('#blog').fadeOut(400);
        $('#gallery').fadeOut(400);
    }

    function toggleClass(element){
        let allnavItems = document.getElementsByClassName('m_nav_item');

        for(i=0; i<allnavItems.length;i++){
            allnavItems[i].classList.remove('menu__item--current');
        }

        element.parentElement.classList.add('menu__item--current');
    }

})();



$(document).ready(function () {

    toggle_nav_container();
    // gotoByScroll();


});



var toggle_nav_container = function () {



    var $toggleButton = $('#toggle_m_nav');
    $navContainer = $('#m_nav_container');
    $menuButton = $('#m_nav_menu')
    $menuButtonBars = $('.m_nav_ham');
    $wrapper = $('#wrapper');

    // toggle the container on click of button (can be remapped to $menuButton)

    $toggleButton.on("click", function () {

        // declare a local variable for the window width
        var $viewportWidth = $(window).width();

        // if statement to determine whether the nav container is already toggled or not

        if ($navContainer.is(':hidden')) {
            $wrapper.removeClass('closed_wrapper');
            $wrapper.addClass("open_wrapper");
            $navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
            // $(window).scrollTop(0);
            $menuButtonBars.removeClass('button_closed');
            $menuButtonBars.addClass('button_open');
            $("#m_ham_1").addClass("m_nav_ham_1_open");
            $("#m_ham_2").addClass("m_nav_ham_2_open");
            $("#m_ham_3").addClass("m_nav_ham_3_open");

        }
        else {
            $navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
            $menuButtonBars.removeClass('button_open')
            $menuButtonBars.addClass('button_closed')
            $wrapper.removeClass('open_wrapper')
            $wrapper.addClass("closed_wrapper")
            $("#m_ham_1").removeClass("m_nav_ham_1_open");
            $("#m_ham_2").removeClass("m_nav_ham_2_open");
            $("#m_ham_3").removeClass("m_nav_ham_3_open");

        }
    });



}


// Function that takes the href value of links in the navbar and then scrolls 
// the div on the page whose ID matches said value. This only works if you use 
// a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function () {

    $(".m_nav_item a").on("click", function (e) {



        $('html,body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 50
        }, "slow");

    });




}


   







