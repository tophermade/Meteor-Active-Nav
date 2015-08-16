# Meteor Active Nav
Use to automatically set nav states to active/inactive when using iron router

## How
Add package with ```meteor add nwz:activenav```

Then declare which element contains your navigation in Meteor settings ```{"public": {"activeNav": "#nav a"}}```

Your active navigation item will now have a class of "active", and you may style based on that.