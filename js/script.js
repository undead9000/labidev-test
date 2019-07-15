(function ($, root, undefined) {
    
    $(function () {
        
        'use strict';
        $('select').chosen();

        function html_output() {
            $.getJSON( "https://api.myjson.com/bins/125uyv", function( data ) {
                var posts = '';
                var post = '';
                $.each(data.posts, function(key, value){
                    post = '<div class="post">';
                    post += '<h2 class="post__title">' + value.name + '</h2>';

                    post += '<ul class="post__options">';
                    post += '<li>Fixed: <span>' + value.options.fixed + '</span></li>';
                    post += '<li>Budget: <span>' + value.options.budget+ '</span></li>';
                    post += '<li>Delivery: <span>' + value.options.delivery + '</span></li>';
                    post += '<li>Posted: <span>' + value.options.posted+ '</span></li>';
                    post += '<li>Ends: <span>' + value.options.ends + '</span></li>';
                    post += '<li class="post__last-option">' + value.options.proposals + ' Proposals</li>';
                    post += '</ul>';

                    post += '<div class="post__description">' + value.description + ' <a class="post__more" href="/">more...</a></div>';

                    post += '<div class="post__skills">';
                    post += '<div class="post__category">Category: <span>' + value.category + '</span></div>Skills';
                    post += '<ul>';
                    $.each(value.slils, function(key, skill){
                        post += '<li>' + skill.name + '</li>';
                    });
                    post += '</ul>';
                    post += '<a href="/" class="post__more-skills">18 more</a>';
                    post += '</div>';

                    post += '<div class="post__client">';
                    post += 'Client: <span>' + value.client.country + '</span>';
                    post += '<div class="post__rating">' + value.client.rating + '</div>';
                    post += '<ul class="post__stars"><li class="active"></li> <li></li> <li></li> <li></li> <li></li></ul>';
                    post += '</div>';

                    post += '</div>';
                    posts += post;
                });
                $('section').html(posts);
            });
        }
        html_output();
    });
    
})(jQuery, this);