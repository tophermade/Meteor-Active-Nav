if(Meteor.isClient){
    Meteor.startup(function () {
        Iron.Router.hooks.activeNavCheck = function () {
            var route = Router.current().route.getName().replace('/', '');

            $(Meteor.settings.public.activeNav).each(function(){
                if($(this).attr("href").replace('/', '') == route){
                    $(Meteor.settings.public.activeNav).removeClass("active");
                    $(this).addClass("active");
                    return;
                }
            });
        };

        Router.onAfterAction('activeNavCheck');
    });
}

