# Meteor Active Nav
Use to automatically set nav states to active/inactive when using iron router

## How
Add package with ```meteor add nwz:activenav```

Then declare which element contains your navigation in Meteor settings ```{"public": {"activeNav": "#nav a"}}```

Meteor.settings can be declared when launching Meteor eg ```meteor --settings settings.json``` or with an env variable.

Your active navigation item will now have a class of "active", and you may style based on that.