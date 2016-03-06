
var locations = {
  'Fixed': 'First Floor',
  'Movable': 'Second Floor',
  'Rotating': 'Pent house'
};

app.get('/locations/:name', function(req, res) {
  var location = locations[req.blockName];
  if (!location) {
    res.status(404).json('No location found for ' + req.params.name);
  } else {
    res.json(location);
  }
});
